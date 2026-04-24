import { test, expect } from '@playwright/test';

test.describe('Boise Code Camp Migration Tests', () => {

  test('no console errors on home page', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(`[error] ${msg.text()}`);
    });
    page.on('pageerror', err => errors.push(`[pageerror] ${err.message}`));

    await page.goto('/');
    // Wait for all Vue islands to hydrate
    await page.waitForSelector('nav.navbar', { timeout: 10000 });
    await page.waitForTimeout(2000);

    expect(errors, `Console errors:\n${errors.join('\n')}`).toHaveLength(0);
  });

  test('local images load on home page', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('nav.navbar', { timeout: 10000 });
    await page.waitForTimeout(2000);

    const images = await page.locator('img').all();
    for (const img of images) {
      const src = await img.getAttribute('src');
      // Only check local/bundled images — external URLs (Sessionize, CDN) may be network-gated
      if (!src || src.startsWith('http')) continue;

      const alt = await img.getAttribute('alt');
      const isLoaded = await img.evaluate(
        (node) => node.complete && node.naturalWidth > 0
      );
      expect(isLoaded, `Local image "${src}" (alt: "${alt}") failed to load`).toBeTruthy();
    }
  });

  test('home page renders key sections', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Boise Code Camp 2026/);

    // Navbar
    await expect(page.locator('nav.navbar')).toBeVisible();

    // Navbar logo — appears after Vue hydration; check src is set (not just the static shell)
    // Two imgs exist: one for dark nav (invert), one for light nav (logo) toggled via v-show
    const navLogo = page.locator('nav img[alt="Boise Code Camp Logo"]').first();
    await expect(navLogo).toHaveAttribute('src', /\S+/, { timeout: 10000 });

    // Hero words image
    await expect(page.locator('img[alt="codecamp words"]').first()).toBeVisible();

    // Footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('speakers page renders and loads data', async ({ page }) => {
    await page.goto('/speakers');
    await expect(page).toHaveTitle(/Speakers | Boise Code Camp 2026/);

    // Speaker data fetched from Sessionize — wait longer
    await page.waitForSelector('.speaker-deck', { timeout: 15000 });
    const speakers = page.locator('.speaker-deck .card');
    await expect(speakers).not.toHaveCount(0);
  });

  test('sessions page renders and loads data', async ({ page }) => {
    await page.goto('/sessions');
    await expect(page).toHaveTitle(/Sessions | Boise Code Camp 2026/);

    await page.waitForSelector('.row', { timeout: 15000 });
    const sessions = page.locator('.row .session');
    await expect(sessions).not.toHaveCount(0);
  });

  test('navbar links navigate correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('nav.navbar', { timeout: 10000 });

    await page.click('a[href="/speakers"]');
    await expect(page).toHaveURL(/\/speakers/);

    await page.click('a[href="/sessions"]');
    await expect(page).toHaveURL(/\/sessions/);

    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
  });

  test('speakers page: speaker images load or fall back', async ({ page }) => {
    await page.goto('/speakers');
    await page.waitForSelector('.speaker-deck .card', { timeout: 15000 });
    // Give images time to load (they're external from Sessionize)
    await page.waitForTimeout(3000);

    const speakerImgs = await page.locator('.speaker-deck img').all();
    expect(speakerImgs.length).toBeGreaterThan(0);

    for (const img of speakerImgs) {
      // The @error handler falls back to ui-avatars — image should always resolve
      const isLoaded = await img.evaluate(
        (node) => node.complete && node.naturalWidth > 0
      );
      const src = await img.getAttribute('src');
      expect(isLoaded, `Speaker image not loaded: ${src}`).toBeTruthy();
    }
  });

  test('register page renders', async ({ page }) => {
    await page.goto('/register');
    await expect(page).toHaveTitle(/Register | Boise Code Camp 2026/);
    await expect(page.locator('nav.navbar')).toBeVisible();
  });

});

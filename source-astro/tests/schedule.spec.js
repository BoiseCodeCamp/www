import { test, expect } from '@playwright/test';

test.describe('Boise Code Camp Schedule Tests', () => {

  test('schedule page renders and loads data', async ({ page }) => {
    await page.goto('/schedule');
    await expect(page).toHaveTitle(/Schedule | Boise Code Camp 2026/);

    // Wait for data fetch from Sessionize
    await page.waitForSelector('.schedule-grid', { timeout: 15000 });
    
    // Check for days
    const days = page.locator('.day-section');
    await expect(days).not.toHaveCount(0);
    
    // Check for table
    await expect(page.locator('.schedule-table')).toBeVisible();
  });

  test('schedule grid interaction: open session modal', async ({ page }) => {
    await page.goto('/schedule');
    await page.waitForSelector('.session-card', { timeout: 15000 });

    const firstSession = page.locator('.session-card').first();
    const title = await firstSession.locator('h6, h4').textContent();
    
    await firstSession.click();
    
    // Modal should appear
    const modal = page.locator('#session-modal');
    await expect(modal).toBeVisible();
    await expect(modal.locator('h2')).toHaveText(title.trim());
  });

  test('schedule grid interaction: open speaker modal from session card', async ({ page }) => {
    await page.goto('/schedule');
    await page.waitForSelector('.speaker-link', { timeout: 15000 });

    const firstSpeakerLink = page.locator('.speaker-link').first();
    const speakerName = await firstSpeakerLink.textContent();
    
    await firstSpeakerLink.click();
    
    // Speaker modal should appear
    const modal = page.locator('#speaker-modal-schedule');
    await expect(modal).toBeVisible();
    await expect(modal.locator('h3')).toHaveText(speakerName.trim());
  });

  test('navbar includes schedule link', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('nav.navbar', { timeout: 10000 });
    
    const scheduleLink = page.locator('nav.navbar a[href="/schedule"]');
    await expect(scheduleLink).toBeVisible();
    await expect(scheduleLink).toHaveText(/Schedule/i);
    
    await scheduleLink.click();
    await expect(page).toHaveURL(/\/schedule/);
  });

});

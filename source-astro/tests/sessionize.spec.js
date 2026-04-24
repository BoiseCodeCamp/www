import { test, expect } from '@playwright/test';

test.describe('Sessionize Sync Logic Tests', () => {

  test('Sessionize data is cached in localStorage', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('nav.navbar', { timeout: 10000 });
    
    // Give it time to load and cache
    await page.waitForTimeout(5000);
    
    const storageKey = 'BOISECODECAMP26'; // From AppState.js
    const cachedData = await page.evaluate((key) => {
      return localStorage.getItem(key);
    }, storageKey);
    
    expect(cachedData).not.toBeNull();
    const parsed = JSON.parse(cachedData);
    expect(parsed.gridData).not.toBeNull();
    expect(parsed.cached).toBeGreaterThan(Date.now());
  });

  test('Sessionize cache schema migration clears old data', async ({ page }) => {
    // Inject old data without 'gridData'
    const storageKey = 'BOISECODECAMP26';
    await page.goto('/about'); // Go to a safe page first
    await page.evaluate(({ key }) => {
      localStorage.setItem(key, JSON.stringify({ sessions: [], cached: Date.now() + 1000000 }));
    }, { key: storageKey });

    // Reload home page
    await page.goto('/');
    await page.waitForSelector('nav.navbar', { timeout: 10000 });
    
    // The migration hack in App.vue should clear it and refetch
    await page.waitForTimeout(5000);
    
    const cachedData = await page.evaluate((key) => {
      return localStorage.getItem(key);
    }, storageKey);
    
    const parsed = JSON.parse(cachedData);
    expect(parsed.gridData).not.toBeNull();
  });

});

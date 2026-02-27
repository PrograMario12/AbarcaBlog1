import { test, expect } from '@playwright/test';

test.use({
  baseURL: 'http://localhost:3000',
});

test.describe('Mobile Responsive Checks', () => {

  test('Mobile Viewport (320px)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto('/');

    // Check for horizontal scroll
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // Allow 1px buffer

    await page.screenshot({ path: 'screenshots/mobile-320.png', fullPage: true });
  });

  test('Tablet Viewport (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await page.screenshot({ path: 'screenshots/tablet-768.png', fullPage: true });
  });

  test('Desktop Viewport (1280px)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    await page.screenshot({ path: 'screenshots/desktop-1280.png', fullPage: true });
  });
});

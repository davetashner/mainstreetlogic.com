import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Home.*Main Street Logic/);
    await expect(page.locator('h1')).toContainText('technology consulting');
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/about/');
    await expect(page).toHaveTitle(/About.*Main Street Logic/);
  });

  test('services page loads', async ({ page }) => {
    await page.goto('/services/');
    await expect(page).toHaveTitle(/Services.*Main Street Logic/);
  });

  test('pricing page loads', async ({ page }) => {
    await page.goto('/pricing/');
    await expect(page).toHaveTitle(/Pricing.*Main Street Logic/);
  });

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page).toHaveTitle(/Contact.*Main Street Logic/);
  });

  test('blog page loads', async ({ page }) => {
    await page.goto('/blog/');
    await expect(page).toHaveTitle(/Blog.*Main Street Logic/);
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');

    // Click About link
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL(/\/about/);

    // Click Services link
    await page.click('a[href="/services"]');
    await expect(page).toHaveURL(/\/services/);

    // Click logo to go home
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
  });
});

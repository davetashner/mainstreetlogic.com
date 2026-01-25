import { test, expect } from '@playwright/test';

// CloudFront doesn't auto-serve index.html for subdirs, so use explicit paths in CI
const indexPath = process.env.CI ? 'index.html' : '';

test.describe('Smoke Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto(`/${indexPath}`);
    await expect(page).toHaveTitle(/Home.*Main Street Logic/);
    await expect(page.locator('h1')).toContainText('technology consulting');
  });

  test('about page loads', async ({ page }) => {
    await page.goto(`/about/${indexPath}`);
    await expect(page).toHaveTitle(/About.*Main Street Logic/);
  });

  test('services page loads', async ({ page }) => {
    await page.goto(`/services/${indexPath}`);
    await expect(page).toHaveTitle(/Services.*Main Street Logic/);
  });

  test('pricing page loads', async ({ page }) => {
    await page.goto(`/pricing/${indexPath}`);
    await expect(page).toHaveTitle(/Pricing.*Main Street Logic/);
  });

  test('contact page loads', async ({ page }) => {
    await page.goto(`/contact/${indexPath}`);
    await expect(page).toHaveTitle(/Contact.*Main Street Logic/);
  });

  test('blog page loads', async ({ page }) => {
    await page.goto(`/blog/${indexPath}`);
    await expect(page).toHaveTitle(/Blog.*Main Street Logic/);
  });

  test('navigation links exist', async ({ page }) => {
    await page.goto(`/${indexPath}`);

    // Verify navigation links are present
    await expect(page.locator('a[href="/about"]')).toBeVisible();
    await expect(page.locator('a[href="/services"]')).toBeVisible();
    await expect(page.locator('a[href="/pricing"]')).toBeVisible();
    await expect(page.locator('a[href="/contact"]')).toBeVisible();
    await expect(page.locator('a[href="/blog"]')).toBeVisible();
  });
});

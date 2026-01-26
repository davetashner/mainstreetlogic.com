import { test, expect } from '@playwright/test';

// CloudFront doesn't auto-serve index.html for subdirs, so use explicit paths in CI
const suffix = process.env.CI ? 'index.html' : '';

test.describe('Smoke Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto(suffix || './');
    await expect(page).toHaveTitle(/Home.*Main Street Logic/);
    await expect(page.locator('h1')).toContainText('software');
  });

  test('about page loads', async ({ page }) => {
    await page.goto(`about/${suffix}`);
    await expect(page).toHaveTitle(/About.*Main Street Logic/);
  });

  test('services page loads', async ({ page }) => {
    await page.goto(`services/${suffix}`);
    await expect(page).toHaveTitle(/Services.*Main Street Logic/);
  });

  test('pricing page loads', async ({ page }) => {
    await page.goto(`pricing/${suffix}`);
    await expect(page).toHaveTitle(/Pricing.*Main Street Logic/);
  });

  test('contact page loads', async ({ page }) => {
    await page.goto(`contact/${suffix}`);
    await expect(page).toHaveTitle(/Contact.*Main Street Logic/);
  });

  test('blog page loads', async ({ page }) => {
    await page.goto(`blog/${suffix}`);
    await expect(page).toHaveTitle(/Blog.*Main Street Logic/);
  });

  test('hosting discount page loads', async ({ page }) => {
    await page.goto(`resources/hosting-discount/${suffix}`);
    await expect(page).toHaveTitle(/50% Off Hosting.*Main Street Logic/);
    await expect(page.locator('h1')).toContainText('50% Off');
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

  test('navigation links exist', async ({ page }) => {
    await page.goto(suffix || './');

    // Verify navigation links are present (first one in header)
    await expect(page.locator('header a[href="/about"]').first()).toBeVisible();
    await expect(page.locator('header a[href="/services"]').first()).toBeVisible();
    await expect(page.locator('header a[href="/pricing"]').first()).toBeVisible();
    await expect(page.locator('header a[href="/contact"]').first()).toBeVisible();
    await expect(page.locator('header a[href="/blog"]').first()).toBeVisible();
  });
});

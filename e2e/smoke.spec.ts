import { test, expect } from '@playwright/test';

// CloudFront doesn't auto-serve index.html for subdirs, so use explicit paths in CI
const suffix = process.env.CI ? 'index.html' : '';

const pages = [
  { name: 'about', path: 'about/', title: /About.*Main Street Logic/ },
  { name: 'services', path: 'services/', title: /Services.*Main Street Logic/ },
  { name: 'pricing', path: 'pricing/', title: /Pricing.*Main Street Logic/ },
  { name: 'contact', path: 'contact/', title: /Contact.*Main Street Logic/ },
  { name: 'blog', path: 'blog/', title: /Blog.*Main Street Logic/ },
];

test.describe('Smoke Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto(suffix || './');
    await expect(page).toHaveTitle(/Home.*Main Street Logic/);
    await expect(page.locator('h1')).toContainText('software');
  });

  for (const { name, path, title } of pages) {
    test(`${name} page loads`, async ({ page }) => {
      await page.goto(`${path}${suffix}`);
      await expect(page).toHaveTitle(title);
    });
  }

  test('hosting discount page loads', async ({ page }) => {
    await page.goto(`resources/hosting-discount/${suffix}`);
    await expect(page).toHaveTitle(/50% Off Hosting.*Main Street Logic/);
    await expect(page.locator('h1')).toContainText('50% Off');
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

  test('navigation links exist', async ({ page }) => {
    await page.goto(suffix || './');

    // Match on the end of the href so links work under a base path
    // (staging previews are served from /pr-N/)
    await expect(
      page.locator('header a[href$="/about"]').first()
    ).toBeVisible();
    await expect(
      page.locator('header a[href$="/services"]').first()
    ).toBeVisible();
    await expect(
      page.locator('header a[href$="/pricing"]').first()
    ).toBeVisible();
    await expect(
      page.locator('header a[href$="/contact"]').first()
    ).toBeVisible();
    await expect(page.locator('footer a[href$="/blog"]').first()).toBeVisible();
  });

  test('homepage links to the Supply Checkout demo', async ({ page }) => {
    await page.goto(suffix || './');
    await expect(
      page.locator('a[href="https://supplycheckout.com/demo"]').first()
    ).toBeVisible();
  });

  test('no page is wider than a phone screen', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 360, height: 800 },
      isMobile: true,
      hasTouch: true,
    });
    const page = await context.newPage();
    for (const target of [
      suffix || './',
      ...pages.map((p) => `${p.path}${suffix}`),
    ]) {
      await page.goto(target);
      const overflow = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        return [...document.querySelectorAll('body *')]
          .filter((el) => el.getBoundingClientRect().right > vw + 1)
          .map((el) => el.tagName.toLowerCase())
          .slice(0, 3);
      });
      expect(overflow, `elements wider than the screen on ${target}`).toEqual(
        []
      );
    }
    await context.close();
  });
});

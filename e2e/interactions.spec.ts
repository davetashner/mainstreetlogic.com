import { test, expect } from '@playwright/test';

// Browser checks that each page actually wires up its client script.
// The logic itself is unit tested under src/scripts.

// CloudFront doesn't auto-serve index.html for subdirs, so use explicit paths in CI
const suffix = process.env.CI ? 'index.html' : '';

test.describe('Interactions', () => {
  test('mobile menu opens and closes', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto(suffix || './');
    const button = page.locator('#menu-button');
    const menu = page.locator('#mobile-menu');

    await expect(menu).toBeHidden();
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toBeVisible();
    await button.click();
    await expect(menu).toBeHidden();
    await context.close();
  });

  test('theme toggle switches and persists across pages', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto(suffix || './');
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);

    await page.locator('#theme-toggle').click();
    await expect(html).toHaveClass(/dark/);

    await page.goto(`about/${suffix}`);
    await expect(html).toHaveClass(/dark/);
  });

  test('dark system preference applies before any choice is stored', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(suffix || './');
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('stored light choice overrides a dark system preference', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.addInitScript(() => localStorage.setItem('theme', 'light'));
    await page.goto(suffix || './');
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('checklist keeps a live score', async ({ page }) => {
    await page.goto(`resources/tech-friction-checklist/${suffix}`);
    const boxes = page.locator('#checklist input[type="checkbox"]');
    await expect(page.locator('#score-total')).toHaveText(
      String(await boxes.count())
    );

    await boxes.nth(0).check();
    await boxes.nth(1).check();
    await expect(page.locator('#score-live')).toBeVisible();
    await expect(page.locator('#score-count')).toHaveText('2');
  });

  test('contact form responds to a submit', async ({ page }) => {
    // Never reach the real contact API from tests
    await page.route('**/*', (route) =>
      route.request().method() === 'POST'
        ? route.fulfill({ json: { success: true } })
        : route.continue()
    );
    await page.goto(`contact/${suffix}`);
    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Hello');
    await page.locator('#submit-button').click();
    await expect(page.locator('#form-status')).toBeVisible();
  });

  test('hosting discount form validates the email', async ({ page }) => {
    await page.route('**/*', (route) =>
      route.request().method() === 'POST'
        ? route.fulfill({ json: { success: true } })
        : route.continue()
    );
    await page.goto(`resources/hosting-discount/${suffix}`);
    const email = page.locator('input[name="email"]');

    // Skip the browser's own validation to reach the script's check
    await page
      .locator('#discount-form')
      .evaluate((f) => f.setAttribute('novalidate', ''));
    await email.fill('not-an-email');
    await page.locator('#submit-button').click();
    await expect(page.locator('#form-error')).toBeVisible();

    await email.fill('test@example.com');
    await page.locator('#submit-button').click();
    await expect(page.locator('#success-container')).toBeVisible();
  });
});

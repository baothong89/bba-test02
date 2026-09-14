import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("E-commerce site for automation testing – Automation test site");
});

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce.betterbytesvn.com/');

  // Click the get Shop link.
  await page.getByRole('link', { name: 'Shop', exact: true }).click();

  // Expects page to have a heading with the name of Shop.
  await expect(page.getByRole('heading', { name: 'Shop' })).toBeVisible();
});

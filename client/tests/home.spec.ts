import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173/';

test('When the main page loads it should show the search box', async ({ page }) => {
  await page.goto(BASE_URL);

  const search = page.locator('input[name="search"]');
  const value = await search.inputValue();

  expect(value).toEqual('');
});

test('When you do a search you should be redirected to the results view', async ({ page }) => {
  await page.goto(BASE_URL);

  const search = page.locator('input[name="search"]');
  await search.fill('apple');
  await search.dispatchEvent('keyup', { keyCode: 13 });
  await page.waitForTimeout(1000);

  expect(page.url()).toEqual(`${BASE_URL}items?search=apple`);
});

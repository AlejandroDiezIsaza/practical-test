import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173/items?search=apple';

test('When the page loads the search box it must have the value sent by the route', async ({ page }) => {
    await page.goto(BASE_URL);

    const search = page.locator('input[name="search"]');
    const value = await search.inputValue();

    expect(value).toEqual('apple');
});

test('When the page loads it should show the categories', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForTimeout(1000);

    const categories = page.locator('ul.ct-ul');
    const exist = await categories.isVisible();

    expect(exist).toBeTruthy();
});

test('When the page loads it should show 4 results', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForTimeout(1000);

    const products = page.locator('div.product-container');
    const value = await products.count();

    expect(value).toEqual(4);
});

test('When the page loads and I click on a result it should redirect me to the details', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForTimeout(1000);

    const product = page.locator('div.product-container:first-child');
    await product.click();
    await page.waitForTimeout(1000);

    expect(page.url()).toMatch(/^http:\/\/localhost:5173\/items\/\w+$/);
});

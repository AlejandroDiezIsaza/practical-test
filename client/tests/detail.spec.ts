import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173/items/MLA1379378617';

test('When the page loads the search box value should be empty', async ({ page }) => {
    await page.goto(BASE_URL);

    const search = page.locator('input[name="search"]');
    const value = await search.inputValue();

    expect(value).toEqual('');
});

test('When the page loads it should load the product data', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForTimeout(1000);

    const image = page.locator('div.detail-data-picture');
    const description = page.locator('div.detail-description');
    const imageVisible = await image.isVisible();
    const descriptionVisible = await description.isVisible();

    expect(imageVisible).toBeTruthy();
    expect(descriptionVisible).toBeTruthy();
});

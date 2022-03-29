const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('localhost:3000');
  });

  test.describe('first test' , ()=>{

    test('cheking h1 have text robofriends test' , async ({page})=>{
        await expect(page.locator('.test-driver')).toHaveText('roboFriends')
    })

    test('checking ', async ({page})=>{
        await expect(page.locator('.test-driver')).toHaveText('roboFriends')
    })

  })
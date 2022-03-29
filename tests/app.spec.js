const { test, expect } = require('@playwright/test');



  test.describe('first test' , ()=>{

    test('cheking h1 have text robofriends test' , async ({page})=>{
        await expect(page.locator('.test-driver')).toHaveText('roboFriends')
    })

    test.skip('checking ', async ({page})=>{
        await expect(page.locator('.')).toBe()
    })

  })
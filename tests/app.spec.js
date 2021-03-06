const { test, expect } = require("@playwright/test");

test.describe("first test", () => {
  test("cheking h1 have text robofriends test", async ({ page }) => {
    await page.goto("localhost:3000");
    await expect(page.locator(".test-driver")).toHaveText("roboFriends");
  });
});

test.describe("test for url checking", async () => {
  test("url is /counterpage", async ({ page }) => {
    await page.goto("localhost:3000/counterpage");
    await expect(page.locator(".test-button")).toHaveText("Click")
  });
  test("is url /counterpage",async ({page}) =>{
    await page.goto("localhost:3000/counterpage");
    await expect(page.url()).toBe("http://localhost:3000/counterpage")

  })
});

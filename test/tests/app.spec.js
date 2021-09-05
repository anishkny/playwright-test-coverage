const { test } = require("./index");

const BASE_URL = "http://localhost:3000";

test("basic test", async ({ page }) => {
  // Navigate to app
  await page.goto(BASE_URL);

  // Wait for welcome message to appear
  await page.waitForSelector('[test-id="welcome-message"]');
});

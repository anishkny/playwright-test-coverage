const { test } = require("playwright-test-coverage");

const BASE_URL = "http://localhost:3000";

test("basic test", async ({ page }) => {
  // Navigate to app
  await page.goto(BASE_URL);

  // Wait for welcome message to appear
  await page.waitForSelector('[test-id="welcome-message"]');

  // Fail test if enviroment variable is set
  if (process.env.FAIL_TEST) {
    test.fail();
  }
});

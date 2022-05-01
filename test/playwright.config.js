// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: "line",
  forbidOnly: !!process.env.CI,
  workers: 1,
  use: {
    headless: !!process.env.CI,
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },
};

module.exports = config;

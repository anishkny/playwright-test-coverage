const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const baseTest = require("@playwright/test").test;

const istanbulTempDir = process.env.ISTANBUL_TEMP_DIR
  ? path.resolve(process.env.ISTANBUL_TEMP_DIR)
  : path.join(process.cwd(), ".nyc_output");

function generateUUID() {
  return crypto.randomBytes(16).toString("hex");
}

const test = baseTest.extend({
  context: async ({ context }, use) => {
    await context.addInitScript(() =>
      window.addEventListener("beforeunload", () =>
        window.collectIstanbulCoverage(JSON.stringify(window.__coverage__)),
      ),
    );
    await fs.promises.mkdir(istanbulTempDir, { recursive: true });
    await context.exposeFunction("collectIstanbulCoverage", (coverageJSON) => {
      if (coverageJSON)
        fs.writeFileSync(
          path.join(
            istanbulTempDir,
            `playwright_coverage_${generateUUID()}.json`,
          ),
          coverageJSON,
        );
    });
    await use(context);
    for (const page of context.pages()) {
      await page.evaluate(() => {
        window.collectIstanbulCoverage(JSON.stringify(window.__coverage__));
      });
    }
  },
});

const expect = test.expect;

module.exports = { test, expect };

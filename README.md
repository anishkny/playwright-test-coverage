# Playwright Test Coverage

[![CI/CD](https://github.com/anishkny/playwright-test-coverage/actions/workflows/ci.yml/badge.svg)](https://github.com/anishkny/playwright-test-coverage/actions/workflows/ci-cd.yml)
[![Depfu](https://badges.depfu.com/badges/94d21dacdb732bad55583672f138c7eb/overview.svg)](https://depfu.com/github/anishkny/playwright-test-coverage?project_id=32640)
[![npm](https://img.shields.io/npm/v/playwright-test-coverage)](https://www.npmjs.com/package/playwright-test-coverage)
[![npm](https://img.shields.io/npm/dw/playwright-test-coverage)](https://npmtrends.com/playwright-test-coverage)
[![Awesome](https://awesome.re/badge.svg)](https://github.com/mxschmitt/awesome-playwright)

A [Playwright](https://playwright.dev) extension that collects code coverage from running end-to-end tests. Assumes that code has been instrumented with [istanbul-lib-instrument](https://www.npmjs.com/package/istanbul-lib-instrument) during the build process, for example, with [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) or [rollup-plugin-istanbul](https://github.com/artberri/rollup-plugin-istanbul).

## Prerequisites

- Playwright test framework
- A process to instrument your JavaScript code (if you are using babel, `babel-plugin-istanbul` or if you are using `rollup`, `rollup-plugin-istanbul`)
- `nyc` for running tests or for manually generating the reports

#### If you are using babel

```bash
npm i -D @playwright/test babel-plugin-istanbul nyc
```

#### If you are using rollup

```bash
npm i -D @playwright/test rollup-plugin-istanbul nyc
```

## Installation

```bash
npm i -D playwright-test-coverage
```

## Usage

Write your Playwright tests as usual, except `require` `test` and `expect` from this package as follows:

```js
// tests/foo.spec.js
const { test, expect } = require("playwright-test-coverage");

// Use test and expect as usual
test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright");
});
```

Then, instrument your front end source code for coverage using the `babel-plugin-istanbul` or the `rollup-plugin-istanbul`.

Finally, run your server via `nyc` to capture code coverage or manually run `nyc` with the `report` option. For more details see [istanbul/nyc](https://github.com/istanbuljs/nyc).

### Options

- `ISTANBUL_TEMP_DIR` - Set this environment variable to specify where Istanbul coverage files should be output. Defaults to `$CWD/.nyc_output`.

## Demo

See [anishkny/playwright-test-coverage-demo](https://github.com/anishkny/playwright-test-coverage-demo) or accompanying [blog post](https://dev.to/anishkny/code-coverage-for-a-nextjs-app-using-playwright-tests-18n7).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

Inspired by [mxschmitt/playwright-test-coverage](https://github.com/mxschmitt/playwright-test-coverage).

## License

[MIT](https://choosealicense.com/licenses/mit/)

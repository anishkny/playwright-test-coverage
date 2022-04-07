# Playwright Test Coverage

[![CI/CD](https://github.com/anishkny/playwright-test-coverage/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/anishkny/playwright-test-coverage/actions/workflows/ci-cd.yml)
[![Depfu](https://badges.depfu.com/badges/94d21dacdb732bad55583672f138c7eb/overview.svg)](https://depfu.com/github/anishkny/playwright-test-coverage?project_id=32640)
[![npm](https://img.shields.io/npm/v/playwright-test-coverage)](https://www.npmjs.com/package/playwright-test-coverage)

A [Playwright](https://playwright.dev) extension that collects code coverage from running end-to-end tests. Assumes that code has been  instrumented with [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) during the build process.

## Prerequisites

* Playwright test framework
* `babel-plugin-istanbul` plugin
* `nyc` for running tests

```bash
npm i -D @playwright/test babel-plugin-istanbul nyc
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
test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
```

Then, instrument your front end source code for coverage using the `babel-plugin-istanbul` plugin.

Finally, run your server via `nyc` to capture code coverage. For more details see [istanbul/nyc](https://github.com/istanbuljs/nyc).


## Demo

See [anishkny/playwright-test-coverage-demo](https://github.com/anishkny/playwright-test-coverage-demo) or accompanying [blog post](https://dev.to/anishkny/code-coverage-for-a-nextjs-app-using-playwright-tests-18n7).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

Inspired by [mxschmitt/playwright-test-coverage](https://github.com/mxschmitt/playwright-test-coverage).

## License
[MIT](https://choosealicense.com/licenses/mit/)

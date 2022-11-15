const path = require("path");
const { assert } = require("chai");

const actualCoverage = require("./coverage/coverage-summary.json");

const expectedCoverage = {
  total: {
    lines: { total: 1, covered: 1, skipped: 0, pct: 100 },
    statements: { total: 1, covered: 1, skipped: 0, pct: 100 },
    functions: { total: 1, covered: 1, skipped: 0, pct: 100 },
    branches: { total: 0, covered: 0, skipped: 0, pct: 100 },
  },
};
expectedCoverage[path.resolve("./pages/index.js")] = {
  lines: { total: 1, covered: 1, skipped: 0, pct: 100 },
  functions: { total: 1, covered: 1, skipped: 0, pct: 100 },
  statements: { total: 1, covered: 1, skipped: 0, pct: 100 },
  branches: { total: 0, covered: 0, skipped: 0, pct: 100 },
};

assert.deepEqual(actualCoverage, expectedCoverage);
console.log("OK");

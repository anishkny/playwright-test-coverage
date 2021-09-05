#!/usr/bin/env bash
set -euxo pipefail

# Change to script directory
cd "$(dirname "$0")"

# Install dependencies
npm install

# If CI is set, install browsers
if [ -n "${CI-}" ]; then
  npx playwright install
  npx playwright install-deps
fi

# Copy source files to be tested
cp ../index.js tests/

# Clean slate
rm -rf .next/ coverage/ .nyc_output/

# Start server and run tests
npx start-server-and-test 3000

# Verify coverage
node ./verify-coverage.js

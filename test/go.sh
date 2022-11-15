#!/usr/bin/env bash
set -euxo pipefail

# Create tarball from package
cd "$(dirname "$0")"
source ./pack.sh

# If CI is set, install dependencies
if [ -n "${CI-}" ]; then
  npm install
  npx playwright install-deps
  npx playwright install
fi

# For each browser, run test and verify code coverage is generated
for BROWSER in "chromium" "firefox" "webkit"
do
  echo "Testing: $BROWSER"
  sleep 2
  rm -rf .next/ coverage/ .nyc_output/ test-results/
  npx start-server-and-test 3000 "playwright test --browser $BROWSER"
  sleep 2
  find coverage -type f | xargs head -9999
  node ./verify-coverage.js
done

# Test screenshot created in case of failure
echo "Testing: screenshot"
sleep 2
rm -rf test-results/
export FAIL_TEST=1
npx start-server-and-test 3000 "playwright test" || true
sleep 2
find test-results -type f
test -s test-results/*/*.png

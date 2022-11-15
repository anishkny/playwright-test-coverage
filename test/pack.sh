#!/usr/bin/env bash
set -euxo pipefail

# Create tarball from package
cd "$(dirname "$0")"
cd ..
rm -rf dist/
mkdir dist/
npm pack --pack-destination dist/
find dist
mv dist/*.tgz dist/playwright-test-coverage.tgz
find dist

# Install tarball in test folder
cd "$(dirname "$0")"
npm install ../dist/playwright-test-coverage.tgz

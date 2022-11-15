#!/usr/bin/env bash
set -euxo pipefail

# Create tarball from package
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd "$SCRIPT_DIR"
cd ..
rm -rf dist/
mkdir dist/
npm pack --pack-destination dist/
find dist
mv dist/*.tgz dist/playwright-test-coverage.tgz
find dist

# Install tarball in test folder
cd "$SCRIPT_DIR"
npm install ../dist/playwright-test-coverage.tgz

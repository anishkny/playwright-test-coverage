module.exports = {
  header: `# Changelog

All notable changes to this project will be documented in this file.
See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [Unreleased](https://github.com/anishkny/playwright-test-coverage/commits/main) (if any)
`,
  scripts: {
    // Update version number in test/package-lock.json
    postbump: "npm run pack && git add test/package-lock.json",
  },
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "chore", section: "Chores" },
    { type: "docs", section: "Docs" },
    { type: "test", section: "Test" },
  ],
};

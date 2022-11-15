module.exports = {
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

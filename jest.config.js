/**
 * Jest configuration for ESM + Node.js project
 */
export default {
  testEnvironment: "node",           // Node environment
  transform: {},                      // no transform needed
  collectCoverage: true,              // enable coverage
  collectCoverageFrom: ["src/add.js", "src/camelCase.js", "src/ceil.js", "src/compact.js", "src/isEmpty.js", "src/toFinite.js", "src/toNumber.js", "src/reduce.js", "src/filter.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  testMatch: ["**/tests/**/*.test.js"],  // test files pattern
  testPathIgnorePatterns: ["/node_modules/"],
  clearMocks: true,
  verbose: true
};

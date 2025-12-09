/**
 * Jest configuration for ESM + Node.js project
 */
export default {
  testEnvironment: "node",           // Node environment
  transform: {},                      // no transform needed
  collectCoverage: true,              // enable coverage
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  testMatch: ["**/tests/**/*.test.js"],  // test files pattern
  testPathIgnorePatterns: ["/node_modules/"],
  clearMocks: true,
  verbose: true
};

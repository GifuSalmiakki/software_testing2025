/**
 * Jest Configuration for an ESM Node.js project
 *
 * Works with:
 * - ES Modules (import/export)
 * - Jest 30+
 * - Coverage reports for Coveralls
 */

export default {
  // Use Node environment for testing
  testEnvironment: "node",

  // Do not transform files (you can enable Babel if needed)
  transform: {},

  // Collect coverage information
  collectCoverage: true,

  // Collect coverage from source files in src/
  collectCoverageFrom: [
    "src/**/*.js"
  ],

  // Directory to output coverage reports
  coverageDirectory: "coverage",

  // Coverage report formats (Coveralls uses lcov)
  coverageReporters: ["json", "lcov", "text", "clover"],

  // Ignore node_modules for coverage
  coveragePathIgnorePatterns: ["/node_modules/"],

  // Glob patterns for test files
  testMatch: [
    "**/tests/**/*.test.js",
    "**/tests/**/*.spec.js"
  ],

  // Ignore node_modules in test search
  testPathIgnorePatterns: ["/node_modules/"],

  // Reset mocks automatically between tests
  clearMocks: true,

  // Optional: verbose output in CI
  verbose: true
};

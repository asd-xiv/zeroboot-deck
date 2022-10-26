module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  collectCoverageFrom: [
    "./src/components/**/*.{ts,tsx}",
    "./src/core.libs/**/*.{ts,tsx}",
    "./src/core.hooks/**/*.{ts,tsx}",
    "!./src/**/*.test.{ts,tsx}",
    "!./src/**/*.stories.{ts,tsx}",
    "!./src/**/stories/*.{ts,tsx}",
  ],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
  coverageReporters: ["lcov", "text"],
  reporters:
    process.env.CI !== "true"
      ? ["default"]
      : [
          "default",
          [
            "jest-junit",
            {
              suiteName: "Unit tests - UIKit",
              outputDirectory: "./test_reports/uikit_unit_tests",
              outputName: "junit.xml",
            },
          ],
        ],
}

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/prod_node_modules/", "/build/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js}",
    "!src/index.ts",
    "!src/@types/**"
  ],
  coverageDirectory: "test/coverage",
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src$1",
    "^@models(.*)$": "<rootDir>/src/models$1",
    "^@postgresql(.*)$": "<rootDir>/src/postgresql$1",
    "^@repositories(.*)$": "<rootDir>/src/repositories$1",
    "^@implementations(.*)$": "<rootDir>/src/implementations$1",
    "^@protos(.*)$": "<rootDir>/src/protos$1"
  },
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10
    }
  }
};

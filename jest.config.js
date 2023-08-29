module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],
};
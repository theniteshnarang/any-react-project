// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Use jsdom for testing React components
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Adjust if you have a setup file
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files using ts-jest
  },
  verbose: true,
};

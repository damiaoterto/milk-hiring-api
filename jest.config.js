/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
	transform: {
    "^.+\\.js?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$"
  ],
	moduleNameMapper: {
		"^#/(.+)$": "<rootDir>/src/$1"
	}
};

module.exports = config;

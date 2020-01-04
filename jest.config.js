module.exports = {
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  "testMatch": [
    "**/__tests__/**/*.(spec|test).ts"
  ],
  "moduleNameMapper": {
      "^@app/(.+)$": "<rootDir>/src/$1",
      "^@tests/(.+)$": "<rootDir>/__tests__/$1"
  },
  "setupFiles": [
    "./__tests__/jest.setup.ts",
  ]
}

module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/Grammar/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx|js)?$': ['ts-jest', {useESM: true}],
    // '<rootDir>/node_modules/antlr4/*.ts': 'ts-jest',
    //'<rootDir>/src/Grammar/*.js': 'ts-jest',
  },
};

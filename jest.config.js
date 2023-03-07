module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/Grammar/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!antlr4/.*)', '<rootDir>/src/Grammar/*.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    //'<rootDir>/src/Grammar/*.js': 'ts-jest',
  },
};

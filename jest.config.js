module.exports = {
  // setupFiles: ['<rootDir>/test/jest.setup.js'],
  testMatch: ['<rootDir>/components/**/__tests__/**/?(*.)(spec|test).ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/styleMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{ts,tsx}',
    '!<rootDir>/components/**/index.{ts,tsx}',
    '!<rootDir>/components/**/*.stories.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/components/index.tsx', '<rootDir>/components/index.tsx'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};

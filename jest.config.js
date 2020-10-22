module.exports = {
  modulePaths: ['<rootDir>/components/'],
  testMatch: ['<rootDir>/components/**/?(*.)(spec|test).ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/styleMock.js',
  },
  collectCoverage: false,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '<rootDir>/components/',
  coveragePathIgnorePatterns: ['<rootDir>/__test__/'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};

// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: 'node',
  restoreMocks: true,
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

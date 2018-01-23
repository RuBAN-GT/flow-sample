const path = require('path')

module.exports = {
  coverageReporters: ['lcov', 'text'],
  globals: {
    'process.env.NODE_ENV': 'test'
  },
  rootDir: path.resolve(__dirname),
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: { '.*': '<rootDir>/node_modules/babel-jest' },
  verbose: true
}

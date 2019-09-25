module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/example/**',
    '!**/lib/**',
    '!doczrc.js',
    '!jest.config.js',
    '!rollup.config.js'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text-summary', 'html']
}

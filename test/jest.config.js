module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageDirectory: './test/coverage/',
  coverageReporters: [
    'lcov',
    'text-summary',
  ],
  testMatch: [
    '**/*.spec.js',
  ],
  setupFiles: [
    './test/setup/adapter',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    "__isBrowser__": true,
    "__INITIAL_DATA__": {
      city: "Copenhagen",
      temperature: 276,
      humidity: 80,
      windSpeed: 5.1,
      windAngle: 180
    }
  },
}

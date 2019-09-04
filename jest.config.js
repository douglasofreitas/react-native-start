module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/setup-test.js', './jestSetup.js'],
  modulePaths: ['modules'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|natura-design-system|react-native-firebase|react-native-config|react-native-i18n)/)',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/natura-design-system/',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/ios/'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: ['**/src/**/*.{js,}'],
};

module.exports = {
    preset: 'react-native',
    setupFiles: [
      '<rootDir>/setup-test.js',
      './jestSetup.js',
    ],
    modulePaths: ['modules'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|natura-design-system|react-native-share|react-native-globalize)/)',
    ],
    modulePathIgnorePatterns: [
      '<rootDir>/node_modules/natura-design-system/',
      '<rootDir>/node_modules/react-native-share/',
    ],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/ios/',
    ],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
      '^.+\\.jsx?$': 'babel-jest',
    },
    collectCoverageFrom: [
      '**/src/**/*.{js,}',
    ],
  };
  
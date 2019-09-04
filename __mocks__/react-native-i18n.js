export default {
  fallbacks: true,
  translations: {},
  currentLocale: jest.fn(() => 'en'),
  t: jest.fn((term) => term),
};

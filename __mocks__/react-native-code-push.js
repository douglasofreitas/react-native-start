export default {
  getUpdateMetadata: jest.fn(() => new Promise((resolve) => resolve({
    label: '',
    version: '',
    description: '',
  }))),
  CheckFrequency: {
    ON_APP_RESUME: '',
  },
};

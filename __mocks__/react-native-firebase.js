export default {
  analytics: jest.fn(() => ({
    setCurrentScreen: jest.fn(),
    nativeModuleExists: true,
  })),
  admob: { nativeModuleExists: true },
  auth: { nativeModuleExists: true },
  config: jest.fn(() => ({
    fetch: jest.fn(() => ({
      then: jest.fn(() => ({
        then: jest.fn(() => ({
          then: jest.fn(() => ({
            then: jest.fn(),
            catch: jest.fn(),
          })),
          catch: jest.fn(),
        })),
      })),
    })),
  })),
  crashlytics: { nativeModuleExists: true },
  database: { nativeModuleExists: true },
  firestore: { nativeModuleExists: true },
  functions: { nativeModuleExists: true },
  iid: { nativeModuleExists: true },
  links: { nativeModuleExists: true },
  messaging: { nativeModuleExists: true },
  notifications: { nativeModuleExists: true },
  perf: { nativeModuleExists: true },
  storage: { nativeModuleExists: true },
};

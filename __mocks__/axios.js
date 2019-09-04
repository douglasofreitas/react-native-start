export default {
  create: jest.fn(() => ({
    interceptors: {
      request: {
        use: jest.fn(),
      },
    },
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn((url, data) => {
      switch (url) {
        case '/users/authenticate':
          if (data.username === 'test') {
            return Promise.resolve({
              data: {
                id: 1,
                username: 'test',
                firstName: 'Test',
                lastName: 'User',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU2NzUyNzcxN30.ITj3-po7SZErebCQhm15KsofIKApg76CFm8S8zPzD9o',
              },
            });
          }
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject({});
        default:
          return Promise.resolve({ data: {} });
      }
    }),
  })),
};

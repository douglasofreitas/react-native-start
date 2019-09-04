import * as services from './services';

jest.mock('../../navigationRef', require('../../__mocks__/navigationRef'));

describe('Context Auth Services', () => {
  it('Should auth user', async () => {
    const dispatch = jest.fn((data) => {
      expect(data.type).toEqual('signin');
    });

    await services.signin(dispatch)({ username: 'test', password: 'test' });
  });
});

import AsyncStorage from '@react-native-community/async-storage';
import * as services from './services';

describe('Context Auth Services', () => {
  beforeEach(() => {
  });

  it('Should error auth user', async () => {
    const dispatch = jest.fn((data) => {
      expect(data.type).toEqual('add_error');
    });
    const navigate = jest.fn(() => { });

    await services.signin(dispatch, navigate)({ username: 'error', password: 'error' });
    expect(navigate).toHaveBeenCalledTimes(0);
    const token = await AsyncStorage.getItem('token');
    expect(token).toEqual(null);
  });

  it('Should auth user', async () => {
    const dispatch = jest.fn((data) => {
      expect(data.type).toEqual('signin');
    });
    const navigate = jest.fn((data) => {
      expect(data).toEqual('Home');
    });

    await services.signin(dispatch, navigate)({ username: 'test', password: 'test' });
    const token = await AsyncStorage.getItem('token');
    expect(token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU2NzUyNzcxN30.ITj3-po7SZErebCQhm15KsofIKApg76CFm8S8zPzD9o');
  });

  it('Should error auth user', async () => {
    const dispatch = jest.fn((data) => {
      expect(data.type).toEqual('add_error');
    });
    const navigate = jest.fn(() => { });

    await services.signin(dispatch, navigate)({ username: 'error', password: 'error' });
    expect(navigate).toHaveBeenCalledTimes(0);
    const token = await AsyncStorage.getItem('token');
    expect(token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU2NzUyNzcxN30.ITj3-po7SZErebCQhm15KsofIKApg76CFm8S8zPzD9o');
  });


  it('Should signout user', async () => {
    const dispatch = jest.fn((data) => {
      expect(data.type).toEqual('signout');
    });
    const navigate = jest.fn((data) => {
      expect(data).toEqual('Login');
    });

    await services.signout(dispatch, navigate)();
    const token = await AsyncStorage.getItem('token');
    expect(token).toEqual(null);
  });

  it('Should clearErrorMessage', async () => {
    const dispatch = jest.fn((data) => {
      expect(data.type).toEqual('clear_error_message');
    });
    const navigate = jest.fn(() => { });

    await services.clearErrorMessage(dispatch, navigate)();
    expect(navigate).toHaveBeenCalledTimes(0);
  });

  it('Should tryLocalSignin success', async () => {
    const dispatch = jest.fn((data) => {
      expect(data.type).toEqual('clear_error_message');
    });
    const navigate = jest.fn((data) => {
      expect(data).toEqual('Login');
    });

    await services.tryLocalSignin(dispatch, navigate)();
  });
});

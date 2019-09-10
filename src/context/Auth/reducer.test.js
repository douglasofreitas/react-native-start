import { reducer } from './reducer';

describe('Reducer Auth Services', () => {
  it('should be a function', () => {
    expect(typeof reducer).toBe('function');
  });

  it('add_error', () => {
    const state = {
      token: null,
      errorMessage: '',
    };
    const action = {
      type: 'add_error',
      payload: 'Error Message',
    };

    expect(reducer(state, action)).toEqual({
      token: null,
      errorMessage: 'Error Message',
    });
  });

  it('signin', () => {
    const state = {
      token: null,
      errorMessage: '',
    };
    const action = {
      type: 'signin',
      payload: '73d7cb84u8hwhdh8uh8',
    };

    expect(reducer(state, action)).toEqual({
      token: '73d7cb84u8hwhdh8uh8',
      errorMessage: '',
    });
  });

  it('clear_error_message', () => {
    const state = {
      token: null,
      errorMessage: 'Error Message',
    };
    const action = {
      type: 'clear_error_message',
      payload: null,
    };

    expect(reducer(state, action)).toEqual({
      token: null,
      errorMessage: '',
    });
  });

  it('signout', () => {
    const state = {
      token: '87ash8ahsd',
      errorMessage: 'Error Message',
    };
    const action = {
      type: 'signout',
      payload: null,
    };

    expect(reducer(state, action)).toEqual({
      token: null,
      errorMessage: '',
    });
  });
});

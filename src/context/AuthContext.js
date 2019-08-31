import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import authApi from '../api/auth';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('Home');
  } else {
    navigate('Login');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signin = (dispatch) => async ({ username, password }) => {
  try {
    const response = await authApi.post('/users/authenticate', { username, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('Home');
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('Login');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
  },
  {
    token: null,
    errorMessage: '',
  },
);

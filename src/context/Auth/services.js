import AsyncStorage from '@react-native-community/async-storage';
import authApi from '../../api/auth';

export const tryLocalSignin = (dispatch, navigate) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('Home');
  } else {
    navigate('Login');
  }
};

export const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

export const signin = (dispatch, navigate) => async ({ username, password }) => {
  try {
    const response = await authApi.post('/users/authenticate', { username, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('Home');
  } catch (err) {
    // console.log(err); // eslint-disable-line no-console
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

export const signout = (dispatch, navigate) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('Login');
};

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from '../config';

const instance = axios.create({
  baseURL: Config.api_auth_host,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

export default instance;

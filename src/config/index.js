import env from 'react-native-config';

export default {
  env: process.env.NODE_ENV,
  varname1: env.VAR_NAME1 || 'default 1',
  varname2: env.VAR_NAME2 || 'default 2',
  api_auth_host: 'http://localhost:4000',
};

import React from 'react';
import {
  createAppContainer,
} from 'react-navigation';

import { setNavigator } from './navigationRef';
import { switchNavigator } from './Routes';
import { Provider as AuthProvider } from './context/Auth';

const AppContainer = createAppContainer(switchNavigator);

export default () => (
  <AuthProvider>
    <AppContainer ref={(navigator) => { setNavigator(navigator); }} />
  </AuthProvider>
);

import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

const drawerNavigator = createDrawerNavigator({
  Home: HomeScreen
});

const switchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  generalFlow: drawerNavigator
}, {
  initialRouteName: 'Login',
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
}
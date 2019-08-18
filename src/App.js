import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import HealthScreen from './screens/HealthScreen'

const drawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen
});

const switchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  generalFlow: drawerNavigator,
  Health: HealthScreen
}, {
  initialRouteName: 'Health',
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
}
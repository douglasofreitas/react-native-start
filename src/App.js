import React from 'react';
import { createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import codePush from 'react-native-code-push';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import HealthScreen from './screens/HealthScreen';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

const drawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

const switchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    generalFlow: drawerNavigator,
    Health: HealthScreen,
  },
  {
    initialRouteName: 'Health',
  },
);

const App = codePush(codePushOptions)(createAppContainer(switchNavigator));

export default () => <App />;

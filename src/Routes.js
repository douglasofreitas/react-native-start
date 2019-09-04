import React from 'react';
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Dimensions } from 'react-native';

import { Screen as LoginScreen } from './screens/Login';
import { Screen as HomeScreen } from './screens/Home';
import { Screen as ProfileScreen } from './screens/Profile';
import { Screen as Profile2Screen } from './screens/Profile2';
import { Screen as HealthScreen } from './screens/Health';

import SideMenu from './components/sidemenu/SideMenu';
import NavigationDrawerStructure from './components/sidemenu/NavigationDrawerStructure';

const stackNavigatorHome = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const stackNavigatorProfile = createStackNavigator({
  Profile1: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  Profile2: {
    screen: Profile2Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} back />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const stackNavigatorHealth = createStackNavigator({
  Health1: {
    screen: HealthScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Health Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const drawerNavigator = createDrawerNavigator(
  {
    Home: { screen: stackNavigatorHome },
    Profile: { screen: stackNavigatorProfile },
    Health: { screen: stackNavigatorHealth },
  }, {
    contentComponent: SideMenu,
    hideStatusBar: true,
    drawerWidth: Dimensions.get('window').width - 50,
  },
);

export const switchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    mainFlow: drawerNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

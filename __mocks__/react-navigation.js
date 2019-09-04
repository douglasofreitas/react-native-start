/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';

export const createStackNavigator = jest.fn();
export const createDrawerNavigator = jest.fn();
export const createSwitchNavigator = jest.fn();
export const createAppContainer = jest.fn();

export const SafeAreaView = ({ children }) => <View>{children}</View>;
export const NavigationEvents = ({ children }) => <View>{children}</View>;

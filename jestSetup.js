import React from 'react';
import { View, Text } from 'react-native';

jest.mock('./src/App', () => () => (<View><Text>App Component</Text></View>));
jest.useFakeTimers();

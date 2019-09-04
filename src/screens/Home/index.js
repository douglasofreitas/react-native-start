import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export const Screen = () => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>HomeScreen.. v2</Text>
  </SafeAreaView>
);

// const styles = StyleSheet.create({});

Screen.navigationOptions = {
  title: 'HOME',
};

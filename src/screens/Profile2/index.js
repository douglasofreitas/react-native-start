import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

export const Screen = ({ navigation }) => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>Profile2 Screen</Text>

    <TouchableOpacity onPress={() => { navigation.pop(); }} style={styles.button}>
      <Text>Back Navigation</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  button: {
    margin: 50,
    padding: 50,
    backgroundColor: '#EEE',
  },
});

Screen.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import { Context as AuthContext } from '../../context/Auth';

export const Screen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => { navigation.navigate('Profile2'); }} style={styles.button}>
        <Text>Go to Profile Screen 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signout} style={styles.button}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 50,
    padding: 50,
    backgroundColor: '#EEE',
  },
});

Screen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

const LoginScreen = ({ navigation }) => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>Login Screen</Text>
    <TouchableOpacity onPress={() => { navigation.navigate('Home'); }} style={styles.button}>
      <Text>Acessar</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  button: {
    margin: 50,
    backgroundColor: '#AAA',
  },
});

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;

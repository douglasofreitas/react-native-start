import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { services } = this.props;
    const { firebase } = services;
    firebase.analytics().setCurrentScreen('PROFILE');
  }

  render() {
    const { navigation, services } = this.props;
    const { signout } = services;

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
  }
}

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
  services: PropTypes.shape({
    signout: PropTypes.func.isRequired,
    firebase: PropTypes.shape({
      analytics: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

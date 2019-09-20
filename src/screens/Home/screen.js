import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { Dynatrace } from '@dynatrace/react-native-plugin';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { services } = this.props;
    const { firebase } = services;
    firebase.analytics().setCurrentScreen('HOME');
    Dynatrace.identifyUser('douglas');
    // firebase.analytics().setUserId('douglas');
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text>Home Screen</Text>
      </SafeAreaView>
    );
  }
}

Screen.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  services: PropTypes.shape({
    firebase: PropTypes.shape({
      analytics: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

Screen.navigationOptions = {
  title: 'HOME',
};

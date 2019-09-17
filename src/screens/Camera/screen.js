import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import Camera from '../../components/Camera';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { services } = this.props;
    const { firebase } = services;
    firebase.analytics().setCurrentScreen('CAMERA');
    // firebase.analytics().setUserId('douglas');
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} />
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
  title: 'CAMERA',
};

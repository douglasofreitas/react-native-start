import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import Map from '../../components/Map';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { services } = this.props;
    const { firebase } = services;
    firebase.analytics().setCurrentScreen('MAPS');
    // firebase.analytics().setUserId('douglas');
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
        <Map style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }
}

Screen.propTypes = {
  services: PropTypes.shape({
    firebase: PropTypes.shape({
      analytics: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

Screen.navigationOptions = {
  title: 'MAPS',
};

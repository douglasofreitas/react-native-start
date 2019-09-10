import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';

import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';

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
    const { services } = this.props;
    const { state, signin, clearErrorMessage } = services;

    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <Text>Login Screen</Text>
        <AuthForm
          headerText="Login Form"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Login"
        />
        <NavLink
          text="Link to go Home"
          routeName="Home"
        />
      </SafeAreaView>
    );
  }
}

Screen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  services: PropTypes.shape({
    signin: PropTypes.func.isRequired,
    clearErrorMessage: PropTypes.func.isRequired,
    state: PropTypes.shape({
      errorMessage: PropTypes.string,
    }),
    firebase: PropTypes.shape({
      analytics: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

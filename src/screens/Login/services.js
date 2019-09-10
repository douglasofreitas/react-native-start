/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import firebase from 'react-native-firebase';

import { Context as AuthContext } from '../../context/Auth';

export const withServices = (Component) => (props) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const services = {
    state,
    signin,
    clearErrorMessage,
    firebase,
  };
  return (
    <Component
      services={services}
      {...props}
    />
  );
};

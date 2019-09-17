/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import firebase from 'react-native-firebase';

export const withServices = (Component) => (props) => {
  const services = {
    firebase,
  };
  return (
    <Component
      services={services}
      {...props}
    />
  );
};

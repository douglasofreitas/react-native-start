import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Spacer = ({ children }) => <View style={styles.spacer}>{children}</View>;

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

Spacer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

export default Spacer;

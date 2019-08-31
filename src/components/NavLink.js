import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Spacer from './Spacer';
import { navigate } from '../navigationRef';

const NavLink = ({ text, routeName, params }) => (
  <TouchableOpacity onPress={() => navigate(routeName, params)}>
    <Spacer>
      <Text style={styles.link}>{text}</Text>
    </Spacer>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object,
};

NavLink.defaultProps = {
  params: {},
};

export default NavLink;

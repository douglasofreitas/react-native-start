import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const toggleDrawer = (navigationProps) => {
  navigationProps.toggleDrawer();
};

const NavigationDrawer = ({ navigationProps }) => (
  <View>
    <TouchableOpacity onPress={() => { toggleDrawer(navigationProps); }}>
      <Text>Icon:menu</Text>
    </TouchableOpacity>
  </View>
);

// const styles = StyleSheet.create({});

NavigationDrawer.propTypes = {
  navigationProps: PropTypes.shape({
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default NavigationDrawer;

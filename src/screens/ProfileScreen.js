import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

const ProfileScreen = ({ navigation }) => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>Profile Screen</Text>
    <TouchableOpacity onPress={() => { navigation.navigate('Profile2'); }} style={styles.button}>
      <Text>Go to Profile2</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  button: {
    margin: 50,
    backgroundColor: '#AAA',
  },
});

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileScreen;

/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

const SideMenu = ({ navigation }) => {
  const menuOptions = [
    {
      mainHeading: 'Home',
      subOptions: [
        { secondaryHeading: 'Go to Home', navigationPath: 'Home' },
      ],
    },
    {
      mainHeading: 'Profile',
      subOptions: [
        { secondaryHeading: 'Go to Profile', navigationPath: 'Profile1' },
      ],
    },
    {
      mainHeading: 'Health',
      subOptions: [
        { secondaryHeading: 'Go to Health', navigationPath: 'Health' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {menuOptions.map((option) => (
            <View>
              <Text style={styles.mainHeading}>{option.mainHeading}</Text>
              {option.subOptions.map((item, key) => (
                <View style={styles.secondaryHeading} key={key}>
                  <Text onPress={() => { navigation.navigate(item.navigationPath); }}>
                    {item.secondaryHeading}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  secondaryHeading: {
    padding: 10,
  },
  mainHeading: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'lightgrey',
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
});

SideMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(SideMenu);

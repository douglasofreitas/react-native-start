/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { navigate } from '../../navigationRef';

const SideMenu = () => {
  const menuOptions = [
    {
      id: '1',
      mainHeading: 'Menu',
      subOptions: [
        { secondaryHeading: 'Home', navigationPath: 'Home', id: '1.1' },
        { secondaryHeading: 'Profile', navigationPath: 'Profile', id: '1.2' },
        { secondaryHeading: 'Video', navigationPath: 'Video', id: '1.3' },
        { secondaryHeading: 'Camera', navigationPath: 'Camera', id: '1.4' },
        { secondaryHeading: 'Maps', navigationPath: 'Maps', id: '1.5' },
        { secondaryHeading: 'Health', navigationPath: 'Health', id: '1.6' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {menuOptions.map((option) => (
            <View key={option.id}>
              <Text style={styles.mainHeading}>{option.mainHeading}</Text>
              {option.subOptions.map((item) => (
                <View style={styles.secondaryHeading} key={item.id}>
                  <Text onPress={() => { navigate(item.navigationPath); }}>
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

export default SideMenu;

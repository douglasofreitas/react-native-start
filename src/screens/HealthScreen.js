import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';

import Config from '../config';
import Camera from '../components/Camera';
import Map from '../components/Map';

const HealthScreen = () => {
  // FIREBASE ANALYTICS - samples
  firebase.analytics().setCurrentScreen('HEALTH');
  // firebase.analytics().setUserId('douglas');

  const [camera, setCamera] = useState(false);
  const [map, setMap] = useState(false);
  const [remoteConfig, setRemoteConfig] = useState({});
  const [storeData, setStoreData] = useState('');

  useEffect(() => {
    // remote config
    firebase
      .config()
      .fetch()
      .then(() => firebase.config().activateFetched())
      .then(() => firebase.config().getValue('var_teste_1'))
      .then((data) => {
        setRemoteConfig(data.val());
      })
      .catch((error) => console.log(`Error processing config: ${error}`)); // eslint-disable-line no-console

    // async store - set
    setStoreValue('var1', 'value1');

    // async store - get
    getStoreValue('var1');

    return () => {
      // navigator.geolocation.clearWatch(this.watchId);
    };
  }, [0]);

  // ASYNC STORE
  const setStoreValue = async (varName, value) => {
    try {
      await AsyncStorage.setItem(`@${varName}`, value);
    } catch (e) {
      // save error
    }
  };

  const getStoreValue = async (varName) => {
    try {
      const value = await AsyncStorage.getItem(`@${varName}`);
      setStoreData(value);
    } catch (e) {
      // read error
    }
  };

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <ScrollView style={{}}>
        <Text>{`Config: ${JSON.stringify(Config)} `}</Text>
        <Text>{`remoteConfig: ${JSON.stringify(remoteConfig)} `}</Text>
        <Text>{`storeData: ${JSON.stringify(storeData)} `}</Text>
        <Text>Codepush installed: v1.0</Text>

        <View style={styles.modules}>
          <Text style={styles.modulesHeader}>
            The following Firebase modules are pre-installed:
          </Text>
          {firebase.admob.nativeModuleExists && (
            <Text style={styles.module}>admob()</Text>
          )}
          {firebase.analytics.nativeModuleExists && (
            <Text style={styles.module}>analytics()</Text>
          )}
          {firebase.auth.nativeModuleExists && (
            <Text style={styles.module}>auth()</Text>
          )}
          {firebase.config.nativeModuleExists && (
            <Text style={styles.module}>config()</Text>
          )}
          {firebase.crashlytics.nativeModuleExists && (
            <Text style={styles.module}>crashlytics()</Text>
          )}
          {firebase.database.nativeModuleExists && (
            <Text style={styles.module}>database()</Text>
          )}
          {firebase.firestore.nativeModuleExists && (
            <Text style={styles.module}>firestore()</Text>
          )}
          {firebase.functions.nativeModuleExists && (
            <Text style={styles.module}>functions()</Text>
          )}
          {firebase.iid.nativeModuleExists && (
            <Text style={styles.module}>iid()</Text>
          )}
          {firebase.links.nativeModuleExists && (
            <Text style={styles.module}>links()</Text>
          )}
          {firebase.messaging.nativeModuleExists && (
            <Text style={styles.module}>messaging()</Text>
          )}
          {firebase.notifications.nativeModuleExists && (
            <Text style={styles.module}>notifications()</Text>
          )}
          {firebase.perf.nativeModuleExists && (
            <Text style={styles.module}>perf()</Text>
          )}
          {firebase.storage.nativeModuleExists && (
            <Text style={styles.module}>storage()</Text>
          )}
        </View>

        <Text>CAMERA</Text>

        <View style={{ width: 200, height: 100 }}>
          {camera ? <Camera /> : null}
          <TouchableOpacity
            onPress={() => setCamera(true)}
            style={{ border: 1 }}
          >
            <Text style={{ fontSize: 14 }}> Open camera </Text>
          </TouchableOpacity>
        </View>

        <Text>MAP</Text>

        <View style={{ width: 200, height: 300 }}>
          {map ? <Map /> : null}
          <TouchableOpacity onPress={() => setMap(true)} style={{ border: 1 }}>
            <Text style={{ fontSize: 14 }}> Open map </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  modules: {
    margin: 20,
    flex: 1,
  },

  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});

HealthScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HealthScreen;

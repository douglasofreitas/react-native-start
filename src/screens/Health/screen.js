import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import I18n from '../../i18n';

import Config from '../../config';
import Camera from '../../components/Camera';
import Map from '../../components/Map';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      camera: false,
      map: false,
      remoteConfig: {},
      storeData: '',
      deviceLocale: I18n.currentLocale(),
    };
  }

  componentWillMount() {
    const { services } = this.props;
    const { firebase } = services;
    firebase
      .config()
      .fetch()
      .then(() => firebase.config().activateFetched())
      .then(() => firebase.config().getValue('var_teste_1'))
      .then((data) => {
        this.setState({ remoteConfig: data.val() });
      })
      .catch((error) => console.log(`Error processing config: ${error}`)); // eslint-disable-line no-console
  }

  componentDidMount() {
    const { services } = this.props;
    const { firebase } = services;
    firebase.analytics().setCurrentScreen('HEALTH');
  }

  render() {
    const { services } = this.props;
    const { firebase } = services;
    const {
      remoteConfig,
      storeData,
      deviceLocale,
      camera,
      map,
    } = this.state;

    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <ScrollView style={{}}>
          <Text>{`Config: ${JSON.stringify(Config)} `}</Text>
          <Text>{`remoteConfig: ${JSON.stringify(remoteConfig)} `}</Text>
          <Text>{`storeData: ${JSON.stringify(storeData)} `}</Text>
          <Text>Codepush installed </Text>
          <Text>{`Default language ${deviceLocale} `}</Text>
          <Text>{`Example translate ${I18n.t('hi')} `}</Text>

          <View style={styles.modules}>
            <Text style={styles.modulesHeader}>
              The following Firebase modules are pre-installed:
            </Text>
            {firebase.analytics.nativeModuleExists && (
              <Text style={styles.module}>analytics()</Text>
            )}
            {firebase.config.nativeModuleExists && (
              <Text style={styles.module}>config()</Text>
            )}
            {firebase.iid.nativeModuleExists && (
              <Text style={styles.module}>iid()</Text>
            )}
            {firebase.messaging.nativeModuleExists && (
              <Text style={styles.module}>messaging()</Text>
            )}
            {firebase.notifications.nativeModuleExists && (
              <Text style={styles.module}>notifications()</Text>
            )}
          </View>

          <Text>CAMERA</Text>
          <View style={{ width: 200, height: 100 }}>
            {camera ? <Camera /> : null}
            <TouchableOpacity
              onPress={() => this.setState({ camera: true })}
              style={{ border: 1 }}
            >
              <Text style={{ fontSize: 14 }}> Open camera </Text>
            </TouchableOpacity>
          </View>

          <Text>MAP</Text>
          <View style={{ width: 200, height: 300 }}>
            {map ? <Map /> : null}
            <TouchableOpacity onPress={() => this.setState({ map: true })} style={{ border: 1 }}>
              <Text style={{ fontSize: 14 }}> Open map </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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

Screen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  services: PropTypes.shape({
    state: PropTypes.shape({
      errorMessage: PropTypes.string,
    }),
    firebase: PropTypes.shape({
      analytics: PropTypes.func,
      config: PropTypes.func,
      iid: PropTypes.func,
      messaging: PropTypes.func,
      notifications: PropTypes.func,
    }),
  }).isRequired,
};

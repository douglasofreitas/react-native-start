import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import { CachedImage } from 'react-native-cached-images';
import { getBuildNumber } from 'react-native-device-info';
import codePush from 'react-native-code-push';


import I18n from '../../i18n';

import Config from '../../config';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remoteConfig: {},
      storeData: '',
      versionAppId: '',
      codepush: {
        label: '',
        version: '',
        description: '',
      },
      deviceLocale: I18n.currentLocale(),
    };

    this.renderVideo = this.renderVideo.bind(this);
  }

  componentWillMount() {
    const { services } = this.props;
    const { firebase } = services;

    // Firebase: get remoteConfiguration
    firebase
      .config()
      .fetch()
      .then(() => firebase.config().activateFetched())
      .then(() => firebase.config().getValue('var_teste_1'))
      .then((data) => {
        this.setState({ remoteConfig: data.val() });
      })
      .catch((error) => console.log(`Error processing config: ${error}`)); // eslint-disable-line no-console

    // Device Info
    getBuildNumber().then((buildNumber) => {
      this.setState({ versionAppId: buildNumber });
    });

    // Codepush info
    codePush.getUpdateMetadata().then((metadata) => {
      this.setState({
        codepush: {
          label: metadata.label,
          version: metadata.appVersion,
          description: metadata.description,
        },
      });
    });
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
      versionAppId,
      codepush,
    } = this.state;

    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <ScrollView style={{}}>
          <View style={{ marginTop: 20 }}>
            <Text>{`Version number ${versionAppId} `}</Text>
            <Text>{`Config: ${JSON.stringify(Config)} `}</Text>
            <Text>{`storeData: ${JSON.stringify(storeData)} `}</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>Codepush: </Text>
            <Text>{`Version: ${codepush.version} `}</Text>
            <Text>{`Label: ${codepush.label} `}</Text>
            <Text>{`Description: ${codepush.description} `}</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>{`Default language ${deviceLocale} `}</Text>
            <Text>{`Example translate (i18n): ${I18n.t('hi')} `}</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>Cache image:</Text>
            <View style={{ height: 300, width: 300 }}>
              <CachedImage style={{ flex: 1 }} source={{ uri: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }} />
            </View>
          </View>

          <View style={styles.modules}>
            <Text style={styles.modulesHeader}>
              The following Firebase modules are pre-installed:
            </Text>
            <Text>{`Fireabse remoteConfig: ${JSON.stringify(remoteConfig)} `}</Text>
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

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';

import Config from '../config';

const LoginScreen = () => {
    
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>{ `Config ${JSON.stringify(Config)} ` }</Text>
            <Text>{ `process.env ${JSON.stringify(process.env)} ` }</Text>

            <View style={styles.modules}>
                <Text style={styles.modulesHeader}>The following Firebase modules are pre-installed:</Text>
                {firebase.admob.nativeModuleExists && <Text style={styles.module}>admob()</Text>}
                {firebase.analytics.nativeModuleExists && <Text style={styles.module}>analytics()</Text>}
                {firebase.auth.nativeModuleExists && <Text style={styles.module}>auth()</Text>}
                {firebase.config.nativeModuleExists && <Text style={styles.module}>config()</Text>}
                {firebase.crashlytics.nativeModuleExists && <Text style={styles.module}>crashlytics()</Text>}
                {firebase.database.nativeModuleExists && <Text style={styles.module}>database()</Text>}
                {firebase.firestore.nativeModuleExists && <Text style={styles.module}>firestore()</Text>}
                {firebase.functions.nativeModuleExists && <Text style={styles.module}>functions()</Text>}
                {firebase.iid.nativeModuleExists && <Text style={styles.module}>iid()</Text>}
                {firebase.links.nativeModuleExists && <Text style={styles.module}>links()</Text>}
                {firebase.messaging.nativeModuleExists && <Text style={styles.module}>messaging()</Text>}
                {firebase.notifications.nativeModuleExists && <Text style={styles.module}>notifications()</Text>}
                {firebase.perf.nativeModuleExists && <Text style={styles.module}>perf()</Text>}
                {firebase.storage.nativeModuleExists && <Text style={styles.module}>storage()</Text>}
            </View>
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
    logo: {
      height: 120,
      marginBottom: 16,
      marginTop: 64,
      padding: 10,
      width: 135,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    modules: {
      margin: 20,
    },
    modulesHeader: {
      fontSize: 16,
      marginBottom: 8,
    },
    module: {
      fontSize: 14,
      marginTop: 4,
      textAlign: 'center',
    }
  });
  

export default LoginScreen;
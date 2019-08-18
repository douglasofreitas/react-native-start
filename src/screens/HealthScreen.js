import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';

import Config from '../config';
import Camera from '../components/Camera';

const HealthScreen = () => {
  //FIREBASE ANALYTICS - samples  
  //firebase.analytics().setCurrentScreen('HEALTH');
  //firebase.analytics().setUserId('douglas');

  const [camera, setCamera] = useState(false); 

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <ScrollView style={{}}>
        <Text>{ `Config ${JSON.stringify(Config)} ` }</Text>
        
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

        <Text>CAMERA</Text>

        <View style={{width: 200, height: 100}}>
          { camera ? <Camera /> : null }
          <TouchableOpacity onPress={() => setCamera(true)} style={{border: 1}}>
            <Text style={{ fontSize: 14 }}> Open camera </Text>
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
  }
});
  

export default HealthScreen;
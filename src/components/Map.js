import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import MapView, { Circle } from 'react-native-maps';

const Map = ({ position }) => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={
          position.mapRegion
        }
    >
      <Circle
        center={position.mapRegion}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

Map.propTypes = {
  position: {
    mapRegion: {
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      latitudeDelta: PropTypes.number,
      longitudeDelta: PropTypes.number,
    },
  },
};

Map.defaultProps = {
  position: {
    mapRegion: {
      latitude: -23.509609,
      longitude: -46.735154,
      latitudeDelta: 0.013,
      longitudeDelta: 0.013,
    },
  },
};

export default Map;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Map = () => {
  return (
    <View>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;

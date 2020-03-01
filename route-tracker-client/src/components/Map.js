import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={20}
          strokeColor='rgb(98,0,238)'
          fillColor='rgba(98,0,238,.5)'
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%'
  }
});

export default Map;

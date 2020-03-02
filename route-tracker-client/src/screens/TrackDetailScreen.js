import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';

import { TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ route, navigation }) => {
  const { state } = useContext(TrackContext);
  const { _id } = route.params;

  const track = state.find(t => t._id === _id);
  console.log(track);
  const initialCoords = track.locations[0].coords;
  console.log(initialCoords);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.headline}>{track.name}</Text>
      </Spacer>
      <MapView
        initialRegion={{ longitudeDelta: 0.01, latitudeDelta: 0.01, ...initialCoords }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} strokeColor='#6200ee' />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  headline: {
    color: '#6200ee',
    fontSize: 36
  },
  map: {
    height: 400,
    width: '100%'
  }
});

export default TrackDetailScreen;

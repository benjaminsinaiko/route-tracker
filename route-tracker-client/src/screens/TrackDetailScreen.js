import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';

import { TrackContext } from '../context/TrackContext';
import { dateFormat, routeDuration } from '../helpers/dateTime';

const TrackDetailScreen = ({ route, navigation }) => {
  const { state } = useContext(TrackContext);
  const { _id, name } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  const routeTime = () => {
    const firstTrack = track.locations[0].timestamp;
    const lastTrack = track.locations[track.locations.length - 1].timestamp;
    const [hrsDiff, minsDiff, secsDiff] = routeDuration(firstTrack, lastTrack);

    return `${hrsDiff}hrs, ${minsDiff}mins, ${secsDiff}secs`;
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{ longitudeDelta: 0.01, latitudeDelta: 0.01, ...initialCoords }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} strokeColor='#6200ee' />
      </MapView>
      <Spacer>
        <Text style={styles.headline}>{dateFormat(track.locations[0].timestamp)}</Text>
        <Text>Duration: {routeTime()}</Text>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  map: {
    height: 400,
    width: '100%'
  },
  headline: {
    color: '#6200ee',
    fontSize: 24
  }
});

export default TrackDetailScreen;

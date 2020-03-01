// import '../helpers/_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Headline, Caption } from 'react-native-paper';

import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [permissionError, setPermissionError] = useState(null);

  const startWatching = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
        setPermissionError('Permission to access location was denied');
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => {
          console.log(location);
          addLocation(location);
        }
      );
    } catch (err) {
      setPermissionError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Headline>TrackCreateScreen</Headline>
      <Map />
      {!!permissionError && <Caption>{permissionError}</Caption>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // style
});

export default TrackCreateScreen;

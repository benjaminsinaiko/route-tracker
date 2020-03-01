// import '../helpers/_mockLocation';
import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Caption } from 'react-native-paper';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const addLocationCb = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [permissionError] = useLocation(isFocused || recording, addLocationCb);

  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.form}>
        {permissionError ? (
          <Caption style={styles.warning}>{permissionError}</Caption>
        ) : (
          <TrackForm />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    top: 50,
    left: 40,
    right: 40,
    margin: 'auto'
  },
  warning: {
    fontSize: 14,
    color: 'red'
  }
});

export default TrackCreateScreen;

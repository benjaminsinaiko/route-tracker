// import '../helpers/_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Headline, Caption } from 'react-native-paper';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const { state, addLocation } = useContext(LocationContext);
  const [permissionError] = useLocation(isFocused, location =>
    addLocation(location, state.recording)
  );

  return (
    <SafeAreaView style={styles.container}>
      <Headline>TrackCreateScreen</Headline>
      <Map />
      <View style={styles.form}>
        {permissionError ? <Caption>{permissionError}</Caption> : <TrackForm />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    top: 95,
    left: 40,
    right: 40,
    margin: 'auto'
  }
});

export default TrackCreateScreen;

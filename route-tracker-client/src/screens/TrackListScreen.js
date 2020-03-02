import React, { useEffect, useContext } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { List } from 'react-native-paper';

import { TrackContext } from '../context/TrackContext';
import dateFormat from '../helpers/dateFormat';

const TrackListScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { state: tracks, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    if (isFocused) {
      fetchTracks();
    }
  }, [isFocused]);

  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button title='Go to Track Detail' onPress={() => navigation.navigate('Track Detail')} />
      <List.Section>
        {tracks.map(track => (
          <TouchableOpacity
            key={track._id}
            onPress={() => navigation.navigate('Track Detail', { _id: track._id })}
          >
            <List.Item title={track.name} description={dateFormat(track.locations[0].timestamp)} />
          </TouchableOpacity>
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  // style
});

export default TrackListScreen;

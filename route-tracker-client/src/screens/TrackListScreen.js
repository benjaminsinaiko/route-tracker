import React, { useEffect, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { List } from 'react-native-paper';

import { TrackContext } from '../context/TrackContext';
import { dateFormat } from '../helpers/dateTime';

const TrackListScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { state: tracks, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    if (isFocused) {
      fetchTracks();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <List.Section>
        {tracks.map(track => (
          <TouchableOpacity
            key={track._id}
            onPress={() =>
              navigation.navigate('Track Detail', { _id: track._id, name: track.name })
            }
          >
            <List.Item title={track.name} description={dateFormat(track.locations[0].timestamp)} />
          </TouchableOpacity>
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TrackListScreen;

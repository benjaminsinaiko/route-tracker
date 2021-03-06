import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } = useContext(LocationContext);
  const { name, locations, recording } = state;
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          autoCapitalize='words'
          placeholder='Enter Route Name'
          value={name}
          onChangeText={changeName}
          returnKeyType='done'
        />
      </View>
      {recording ? (
        <Button mode='contained' compact onPress={stopRecording} color='red'>
          Stop
        </Button>
      ) : (
        <Button mode='outlined' compact contentStyle={styles.record} onPress={startRecording}>
          Start Recording
        </Button>
      )}
      {!recording && locations.length ? (
        <Button
          disabled={locations.length && !name}
          icon='map-plus'
          mode='contained'
          style={styles.save}
          uppercase={false}
          onPress={saveTrack}
        >
          {locations.length && !name ? 'No Route Name' : 'Save Route'}
        </Button>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    marginBottom: 5,
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'transparent',
    width: '85%',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  record: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: '#6200ee'
  },
  save: {
    backgroundColor: '#03dac4',
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 170
  }
});

export default TrackForm;

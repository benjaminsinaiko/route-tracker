import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } = useContext(LocationContext);

  console.log(state.locations.length);

  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          autoCapitalize='words'
          placeholder='Enter Route Name'
          value={state.name}
          onChangeText={changeName}
          returnKeyType='done'
        />
      </View>
      {state.recording ? (
        <Button mode='contained' compact onPress={stopRecording} color='red'>
          Stop
        </Button>
      ) : (
        <Button mode='contained' compact onPress={startRecording}>
          Start Recording
        </Button>
      )}
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
  }
});

export default TrackForm;

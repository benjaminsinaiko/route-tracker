import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const TrackForm = () => {
  return (
    <>
      <TextInput style={styles.input} autoCapitalize='words' placeholder='Enter Route Name' />
      <Button>Start Recording</Button>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff90'
  }
});

export default TrackForm;

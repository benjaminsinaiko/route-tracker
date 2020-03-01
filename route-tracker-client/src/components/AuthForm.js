import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Headline, Text, TextInput, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText, clearErrorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (errorMessage) {
      clearErrorMessage();
    }
  }, [email, password]);

  return (
    <>
      <Spacer>
        <Headline>
          {headerText}
          <Text style={styles.name}> Route Tracker</Text>
        </Headline>
      </Spacer>
      <TextInput
        error={errorMessage}
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        textContentType='emailAddress'
      />
      <Spacer />
      <TextInput
        error={errorMessage}
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <Spacer>
        <Button mode='contained' onPress={() => onSubmit({ email, password })}>
          {buttonText}
        </Button>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#6200ee'
  },
  error: {
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Headline, Text, TextInput, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Headline>
          {headerText}
          <Text style={styles.name}> Route Tracker</Text>
        </Headline>
      </Spacer>
      <TextInput
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
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;

import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Headline, Text, TextInput, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Headline>
          Sign Up for <Text style={styles.name}>Route Tracker</Text>
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
      {!!state.errorMessage && <Text style={styles.error}>{state.errorMessage}</Text>}
      <Spacer>
        <Button mode='contained' onPress={() => signup({ email, password })}>
          Sign Up
        </Button>
        <Spacer />
        <Button uppercase={false} onPress={() => navigation.navigate('Signin')}>
          <Text>Already have an account?</Text> Sign In
        </Button>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
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

export default SignupScreen;

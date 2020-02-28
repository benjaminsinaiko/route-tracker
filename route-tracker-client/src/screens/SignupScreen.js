import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Headline, Text, TextInput, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
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
        textContentType='newPassword'
      />
      <Spacer>
        <Button mode='contained'>Sign Up</Button>
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
  }
});

export default SignupScreen;

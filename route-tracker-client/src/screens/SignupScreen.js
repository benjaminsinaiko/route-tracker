import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for'
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText='Sign Up'
      />
      <Spacer />
      <Button uppercase={false} onPress={() => navigation.navigate('Signin')}>
        <Text>Already have an account?</Text> Sign In
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;

import React, { useContext, useEffect } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    clearErrorMessage();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        buttonText='Sign In'
      />
      <Spacer />
      <Button uppercase={false} onPress={() => navigation.navigate('Signup')}>
        <Text>Need an account?</Text> Sign Up
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

export default SigninScreen;

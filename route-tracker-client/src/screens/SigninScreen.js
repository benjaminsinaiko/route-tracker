import React, { useContext, useEffect } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

import { AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const clearError = navigation.addListener('blur', clearErrorMessage);

    return clearError;
  }, [navigation, state.errorMessage]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        buttonText='Sign In'
        clearErrorMessage={clearErrorMessage}
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

import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

import { AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const clearError = navigation.addListener('blur', clearErrorMessage);

    return clearError;
  }, [navigation, state.errorMessage]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for'
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText='Sign Up'
        clearErrorMessage={clearErrorMessage}
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

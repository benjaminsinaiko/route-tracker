import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button title='Go to Signin' onPress={() => navigation.navigate('Signin')} />
    </View>
  );
};

const styles = StyleSheet.create({
  // style
});

export default SignupScreen;

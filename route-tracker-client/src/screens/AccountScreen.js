import React, { useContext } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

import { AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button onPress={signout}>Sign Out</Button>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // style
});

export default AccountScreen;

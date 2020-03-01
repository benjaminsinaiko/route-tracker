import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button onPress={signout}>Sign Out</Button>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  // style
});

export default AccountScreen;

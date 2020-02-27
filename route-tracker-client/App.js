import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TrackStack = createStackNavigator();

function LoginNav() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name='Signup' component={SignupScreen} />
      <LoginStack.Screen name='Signin' component={SigninScreen} />
    </LoginStack.Navigator>
  );
}

function MainNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Tracks' component={TrackListNav} />
      <Tab.Screen name='Track Create' component={TrackCreateScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
}

function TrackListNav() {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen name='Track List' component={TrackListScreen} />
      <TrackStack.Screen name='Track Detail' component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
}

const App = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode='none'>
        {isLoggedIn ? (
          <AuthStack.Screen name='Main' component={MainNav} />
        ) : (
          <AuthStack.Screen name='Login' component={LoginNav} />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

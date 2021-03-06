import React, { useEffect, useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { LocationProvider } from './src/context/LocationContext';
import { AuthProvider, AuthContext } from './src/context/AuthContext';
import { TrackProvider } from './src/context/TrackContext';
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
    <LoginStack.Navigator headerMode='none'>
      <LoginStack.Screen name='Signup' component={SignupScreen} />
      <LoginStack.Screen name='Signin' component={SigninScreen} />
    </LoginStack.Navigator>
  );
}

function MainNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Tracks'
        component={TrackListNav}
        options={{
          tabBarLabel: 'Routes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='routes' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Track Create'
        component={TrackCreateScreen}
        options={{
          tabBarLabel: 'Create Route',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='map-plus' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function TrackListNav() {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen name='Routes List' component={TrackListScreen} />
      <TrackStack.Screen name='Track Detail' component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
}

const LoadingScreen = () => {
  return null;
};

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  if (state.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <AuthStack.Navigator headerMode='none'>
        {state.userToken ? (
          <AuthStack.Screen name='Main' component={MainNav} />
        ) : (
          <AuthStack.Screen name='Login' component={LoginNav} />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>
          <App />
        </TrackProvider>
      </LocationProvider>
    </AuthProvider>
  );
};

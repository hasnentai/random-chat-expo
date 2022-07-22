import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login-screen';
import NearByScreen from '../screens/NearByScreen/NearByScreen';
import UserStack from './user-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Nearby" component={UserStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

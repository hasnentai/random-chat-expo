import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login-screen";
import NearByScreen from "../screens/near-by-screen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Nearby" component={NearByScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NearByScreen from "../screens/near-by-screen";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NearByScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

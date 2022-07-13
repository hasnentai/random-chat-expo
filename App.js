import { Button, StyleSheet, Text, View } from 'react-native';

import { useEffect } from 'react';

import Compass from './components/compass';

import ChatScreen from './screens/chat-screen';
import NearByScreen from './screens/near-by-screen';
import { setUpFireBase } from './utils/geoFire';
import LoginScreen from './screens/login-screen';
import RootNavigation from './navigation';
import { NativeBaseProvider } from 'native-base';
import { nativeBaseHackTheme } from './theme/NativeBaseHackTheme';

export default function App() {
  return (
    <NativeBaseProvider theme={nativeBaseHackTheme}>
      <RootNavigation />
    </NativeBaseProvider>
  );
}

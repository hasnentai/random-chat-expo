
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

import RootNavigation from "./navigation";
import { NativeBaseProvider } from "native-base";
import { nativeBaseHackTheme } from "./theme/NativeBaseHackTheme";
import { AuthProvider } from "./utils/firebase-auth/firebase-auth-context";
import { Provider } from "react-redux";
import store from "./redux/near-by-user/near-by-user.store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={nativeBaseHackTheme}>
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
      </NativeBaseProvider>
    </Provider>
  );
}

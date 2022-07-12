import React from "react";
import auth from "@react-native-firebase/auth";

export function useAuthentication() {
  const [user, setUser] = React.useState();
  const auth = auth();
  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = auth().onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
        } else {
          // User is signed out
          setUser(undefined);
        }
      }
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}

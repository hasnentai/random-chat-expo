import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { firebaseConfig } from "../../firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Creates a AuthContext react context using `React.createContext()`
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // Hook for local state to store user
  const [user, setUser] = useState(null);

  // Hook that set user and provide data to provider
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

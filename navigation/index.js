import React, { useEffect, useState } from "react";
import LoadingScreen from "../screens/loading-screen";
import { getData } from "../utils/secure-store";
import AuthStack from "./auth-stack";
import UserStack from "./user-stack";

export default function RootNavigation() {
  const [verificationId, setVerificationId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserVerificationId() {
      let key = await getData("access-token");
      setVerificationId(key);
      setIsLoading(false);
    }
    getUserVerificationId();
  }, []);
  return !isLoading ? (
    verificationId ? (
      <UserStack />
    ) : (
      <AuthStack />
    )
  ) : (
    <LoadingScreen />
  );
}

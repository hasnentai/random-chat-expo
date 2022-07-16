import { getItemAsync } from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { getValueFor } from "../utils/secure-store";
import AuthStack from "./auth-stack";
import UserStack from "./user-stack";

export default function RootNavigation() {
  const [verificationId, setVerificationId] = useState(null);

  useEffect(() => {
    async function getUserVerificationId() {
      let key = await getValueFor("verificationId");
      setVerificationId(key);
    }
    getUserVerificationId();
  }, []);
  return verificationId ? <UserStack /> : <AuthStack />;
}

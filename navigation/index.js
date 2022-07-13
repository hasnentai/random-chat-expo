import React from 'react';
// import { useAuthentication } from "../utils/hooks/useAuthentication";
import AuthStack from './auth-stack';
import UserStack from './user-stack';

export default function RootNavigation() {
  // const { user } = useAuthentication();

  return true ? <UserStack /> : <AuthStack />;
}

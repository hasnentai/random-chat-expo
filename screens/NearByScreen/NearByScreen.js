import React, { useContext, useEffect } from "react";
import { Animated } from "react-native";
import { Box, useColorMode, useDisclose } from "native-base";

//components

import TopButtons from "./components/TopButtons";
import BackgroundImage from "./components/BackgroundImage";
import Rador from "./components/Rador";
import MorePeopleNearBy from "./components/MorePeopleNearBy";
import { AuthContext } from "../../utils/firebase/firebase-auth/firebase-auth-context";
import firebase from "firebase";
import { connect } from "../../utils/geo-fire/geo-fire";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "../../redux/near-by-user/near-by-user.slice";
import {
  addUserInFirestore,
  createChatRoom,
  getUserFromFirestoreById,
} from "../../utils/firebase/firebase-db-service";
import { removeData } from "../../utils/secure-store";
import { signOut } from "../../utils/firebase/firebase-auth/firebase-phone-auth";
export default function NearByScreen() {
  // Hook to get current theme mode from native base
  let { colorMode } = useColorMode();

  // Hook to get logged in user
  let user = useContext(AuthContext);

  //Hook to get the user data from store
  const usersStore = useSelector((state) => state.users.arr);

  //Hook to  dispatch actions to update the store
  const dispatch = useDispatch();

  // Hook to connect user if an only if user is login
  useEffect(() => {
    console.log(user.user);
    if (user.user) {
      connect(firebase?.auth().currentUser.uid, dispatch, usersStore);
      // addUserInFirestore();
      getUserFromFirestoreById(firebase?.auth().currentUser.uid);

      console.log(usersStore);
    }
  }, [user]);

  useEffect(() => {
    console.log(usersStore[0]);
    if (usersStore.length > 0) {
      startChat();
    }
  }, [usersStore]);

  const startChat = () => {
    let senderId = firebase?.auth().currentUser.uid;
    let receiverId = usersStore[0];
    let message = "Hello";
    createChatRoom(senderId, receiverId, message);
  };

  return (
    <Box
      safeAreaTop
      width={"100%"}
      height={"100%"}
      bg={colorMode === "light" ? "primary.300" : "blueGray.900"}
    >
      {/* <--- Background Image --> */}
      <BackgroundImage />
      {/* <---x--x---> */}

      {/* <--- Top buttons --> */}
      <TopButtons />
      {/* <---x--x---> */}

      {/* <--- Rador --> */}
      {/* //TODO:: Component name is having typo. It should be Radar instead of Rador,should be updated by @ammannn  */}
      <Rador />

      {/* <--- More people nearby --> */}
      <MorePeopleNearBy />
      {/* <---x--x---> */}
    </Box>
  );
}

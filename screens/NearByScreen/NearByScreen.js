import React, { useContext, useEffect } from "react";
import { Animated } from "react-native";
import { Box, useColorMode, useDisclose } from "native-base";

//components

import TopButtons from "./components/TopButtons";
import BackgroundImage from "./components/BackgroundImage";
import Rador from "./components/Rador";
import MorePeopleNearBy from "./components/MorePeopleNearBy";
import { AuthContext } from "../../utils/firebase-auth/firebase-auth-context";
import firebase from "firebase";
import { connect } from "../../utils/geo-fire/geo-fire";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "../../redux/near-by-user/near-by-user.slice";
export default function NearByScreen() {
  let { colorMode } = useColorMode();
  let user = useContext(AuthContext);
  const usersStore = useSelector((state) => state.users.arr);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.user) {
      let uid = firebase?.auth().currentUser.uid;
      connect(uid, dispatch);
    }
  }, [user]);

  useEffect(() => {
    console.log(usersStore);
  }, [usersStore]);

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
      <Rador />

      {/* <--- More people nearby --> */}
      <MorePeopleNearBy />
      {/* <---x--x---> */}
    </Box>
  );
}

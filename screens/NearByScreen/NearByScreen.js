import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  Easing,
  xOffset,
  yOffset,
  Image,
} from 'react-native';
import { Box, useColorMode, View, Actionsheet, useDisclose } from 'native-base';

//components

import TopButtons from './components/TopButtons';
import BackgroundImage from './components/BackgroundImage';
import Rador from './components/Rador';
import MorePeopleNearBy from './components/MorePeopleNearBy';

export default function NearByScreen() {
  let { colorMode } = useColorMode();
  let rotateValueHolder = new Animated.Value(0);
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Box
      safeAreaTop
      width={'100%'}
      height={'100%'}
      bg={colorMode === 'light' ? 'primary.300' : 'blueGray.900'}
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

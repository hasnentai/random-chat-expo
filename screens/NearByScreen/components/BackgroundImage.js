import React from 'react';

import { Dimensions } from 'react-native';

import { Image, useColorMode } from 'native-base';

export default function BackgroundImage() {
  let { colorMode } = useColorMode();

  return (
    <Image
      source={require('../../../assets/background.png')}
      style={{
        position: 'absolute',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').width * 0.95,
        transform: [{ rotate: '90deg' }, { scale: 2 }],
        marginTop: 100,
        opacity: 0.05,
      }}
    />
  );
}

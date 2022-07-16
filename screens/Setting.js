import React, { useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
  Dimensions,
  Image,
} from 'react-native';
const { width, height } = Dimensions.get('screen');
const SIZE = width * 0.7;
const Setting = () => {
  let rotateValueHolder = new Animated.Value(0);

  useEffect(() => {
    startImageRotateFunction();
  }, []);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Image
        resizeMode="cover"
        source={{
          uri: 'https://www.kindpng.com/picc/b/236-2369844_radar-png.png',
        }}
        style={{
          position: 'absolute',
          width: 200,
          height: 200,

          //   borderRadius:
          //     Math.round(
          //       Dimensions.get('window').width +
          //         Dimensions.get('window').height,
          //     ) / 2,
          marginTop: 100,
          opacity: 0.05,
        }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(236, 240, 244, 1)',
  },
  mover: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: SIZE / 2,
    borderStyle: 'dotted',
  },
  line: {
    width: 2,
    height: '40%',
    marginTop: '10%',
  },
  seconds: {
    backgroundColor: 'rgba(227, 71, 134, 1)',
    width: 2,
    borderRadius: 2,
  },
  minutes: { backgroundColor: 'rgba(0, 0, 0, .3)', width: 4, borderRadius: 2 },
  hours: { backgroundColor: 'rgba(0, 0, 0, .8)', width: 6, borderRadius: 3 },
});

export default Setting;

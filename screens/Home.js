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
import {
  Box,
  useColorMode,
  View,
  Actionsheet,
  useDisclose,
  Pressable,
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  let { colorMode } = useColorMode();
  let rotateValueHolder = new Animated.Value(0);
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    startImageRotateFunction();
  }, []);
  useEffect(() => {
    startImageRotateFunction();
  }, [isOpen]);

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

  const url =
    'https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1287419511?b=1&k=20&m=1287419511&s=612x612&w=0&h=VkA1WKAPuTygRa-ZisvGwiIo84-gWzB5YMwrO4ErYuI=';

  return (
    <Box
      // safeAreaTop

      width={'100%'}
      height={'100%'}
      bg={colorMode === 'light' ? 'primary.300' : 'blueGray.900'}
    >
      <Box
        style={{
          width: '100%',
          alignItems: 'center',
          marginTop: 100,
          justifyContent: 'center',
          position: 'relative',
          zIndex: 999999999999,
        }}
      >
        {/* this is the image for the backgroun */}
        <Image
          source={{
            uri: 'https://w0.peakpx.com/wallpaper/35/380/HD-wallpaper-map-heart-love-night-sky.jpg',
          }}
          style={{
            position: 'absolute',
            width: Dimensions.get('window').width * 0.95,
            height: Dimensions.get('window').width * 0.95,
            transform: [{ scale: 2 }],
            marginTop: 100,
            opacity: 0.05,
          }}
        />
        {/* images of people discory */}
        <Pressable
          onPress={onOpen}
          style={{
            position: 'absolute',
            zIndex: 99999,
            right: Dimensions.get('window').width * 0.1,
            bottom: '40%',
            alignItems: 'center',
            shadowColor: '#4ebcff',
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            opacity: 0.8,
          }}
        >
          <Image
            source={{
              uri: 'https://decider.com/wp-content/uploads/2019/09/elena-gilbert-.jpg?quality=75&strip=all',
            }}
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#fff',
              borderRadius: 25,
            }}
          />

          <View
            style={{
              marginTop: 5,
              backgroundColor: '#667374',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 10 }}>Elena</Text>
          </View>
        </Pressable>
        <View
          style={{
            position: 'absolute',
            zIndex: 99999,
            left: Dimensions.get('window').width * 0.15,
            bottom: '48%',
            alignItems: 'center',
            shadowColor: '#fff',
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            opacity: 0.8,
          }}
        >
          <Image
            source={{
              uri: 'https://www.cheatsheet.com/wp-content/uploads/2021/03/Klaus-The-Originals-1024x765.png',
            }}
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#fff',
              borderRadius: 25,
            }}
          />
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#667374',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 10 }}>Klaus</Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            zIndex: 99999,
            left: Dimensions.get('window').width * 0.35,
            bottom: '10%',
            alignItems: 'center',
            shadowColor: '#fff',
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            opacity: 0.8,
          }}
        >
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/a7/b7/44/a7b7442530886deee786994b0e56f073.jpg',
            }}
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#fff',
              borderRadius: 25,
            }}
          />
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#667374',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 10 }}>Marcel</Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            zIndex: 99999,
            left: Dimensions.get('window').width * 0.58,
            bottom: '22%',
            alignItems: 'center',
            shadowColor: '#fff',
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            opacity: 0.8,
          }}
        >
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/05/b2/c5/05b2c57f6adc8a6bfc1154d814408c6b.jpg',
            }}
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#fff',
              borderRadius: 25,
            }}
          />
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#667374',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 10 }}>Caroline</Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            zIndex: 99999,
            left: Dimensions.get('window').width * 0.5,
            bottom: '68%',
            alignItems: 'center',
            shadowColor: '#fff',
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            opacity: 0.8,
          }}
        >
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#fff',
              borderRadius: 25,
            }}
          />
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#667374',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 10 }}>Haley</Text>
          </View>
        </View>

        <View style={styles.compassWrapper}>
          <View style={styles.horizontalMiddleLine}></View>
          <View style={styles.verticalMiddleLine}></View>
          <View style={styles.baseMarking205Deg}></View>
          <View style={styles.baseMarking295Deg}></View>
        </View>
        <View
          style={{
            position: 'absolute',
            width: Dimensions.get('window').width * 0.8,
            height: Dimensions.get('window').width * 0.8,
            borderRadius:
              Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ) / 2,
            backgroundColor: colorMode === 'light' ? '#a33043' : '#0f172a',
            opacity: 0.3,
          }}
        />

        <LinearGradient
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            // transform: [{ scale: 1.5 }],
            position: 'absolute',
            marginTop: -220,
            top: 0,
          }}
          colors={[
            'transparent',
            colorMode === 'light' ? '#a33043' : '#0f172a',
          ]}
        ></LinearGradient>
        {/* { transform: [{ rotate: rotateData }] } */}

        <Image
          tintColor="#ffff"
          source={{
            uri: 'https://www.kindpng.com/picc/b/236-2369844_radar-png.png',
          }}
          style={{
            position: 'absolute',
            width: Dimensions.get('window').width * 0.95,
            height: Dimensions.get('window').width * 0.95,

            //   borderRadius:
            //     Math.round(
            //       Dimensions.get('window').width +
            //         Dimensions.get('window').height,
            //     ) / 2,
            opacity: 0.09,
            tintColor: '#608191',
          }}
        />
        <Animated.View
          style={[styles.mover, { transform: [{ rotate: rotateData }] }]}
        >
          <View
            style={{
              width: '50%',
              height: '50%',
              position: 'absolute',
              right: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#4ebcff',
              opacity: 0.3,
            }}
          >
            <LinearGradient
              // Background Linear Gradient
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              colors={['#24201d', 'transparent']}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#4ebcff',
                opacity: 0.2,
              }}
            />
          </View>
        </Animated.View>
      </Box>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content style={{ backgroundColor: '#fff' }}>
          <Box width={'100%'} alignItems={'center'}>
            <Image
              source={{
                uri: 'https://decider.com/wp-content/uploads/2019/09/elena-gilbert-.jpg?quality=75&strip=all',
              }}
              style={{
                width: 150,
                height: 150,
                backgroundColor: '#fff',
                borderRadius: 75,
                marginTop: 15,
              }}
            />
          </Box>
          <Text style={{ fontSize: 30, fontWeight: '600', marginTop: 20 }}>
            Jessica Renart
          </Text>

          <Box borderWidth={1} alignItems={'center'} justifyContent={'center'}>
            <Text>36m from you</Text>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
}

const baseStyle = {
  content: '',
  position: 'absolute',
  width: 0.5,
  height: '100%',
  backgroundColor: '#757f80',
  zIndex: '0',
  left: '50%',
  opacity: 0.5,
};
const baseMarking = {
  ...baseStyle,
  backgroundColor: '#757f80',
  width: 1,
  opacity: 0.07,
};

const baseMarkingPoles = {
  ...baseStyle,
  width: 1,
  opacity: 0.07,
};

const styles = StyleSheet.create({
  mover: {
    position: 'absolute',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
    borderRadius: Dimensions.get('window').width / 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderStyle: 'dotted',
    overflow: 'hidden',
    borderWidth: 1,
  },
  line: {
    width: 1,
    height: '80%',
    marginTop: '20%',
  },
  seconds: {
    backgroundColor: '#4ebcff',
    width: 0.4,
    borderRadius: 2,
  },
  compassWrapper: {
    width: Dimensions.get('window').width * 0.87,
    height: Dimensions.get('window').width * 0.87,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    margin: 20,
    transition: 'all 0.5s ease-in-out',
    transform: [{ rotate: '20deg' }],
    // opacity: 0.3,
  },

  imageView: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  image: {
    height: '30rem',
    width: '30rem',
    filter: 'contrast(0.6)',
    margin: 'auto',
    borderRadius: '50%',
  },
  outerCompass: {
    position: 'relative',
    background: '#282828',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: '100%',
  },

  outerCompassAfter: {
    position: 'absolute',
    WebkitTransform: [{ rotate: '90deg' }],
    MozTransform: [{ rotate: '90deg' }],
    transform: [{ rotate: '71deg' }],
    width: '100%',
    ...baseStyle,
  },

  outerCompassBefore: {
    ...baseStyle,
    transform: [{ rotate: '-20deg' }],
  },

  horizontalMiddleLine: {
    ...baseMarkingPoles,

    WebkitTransform: [{ rotate: '70deg' }],
    MozTransform: [{ rotate: '70deg' }],
    transform: [{ rotate: '70deg' }],
  },
  verticalMiddleLine: {
    ...baseMarkingPoles,
    WebkitTransform: [{ rotate: '160deg' }],
    MozTransform: [{ rotate: '160deg' }],
    transform: [{ rotate: '160deg' }],
  },
  baseMarking170Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '170deg' }],
    MozTransform: [{ rotate: '170deg' }],
    transform: [{ rotate: '170deg' }],
  },
  baseMarking180Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '180deg' }],
    MozTransform: [{ rotate: '180deg' }],
    transform: [{ rotate: '180deg' }],
  },
  baseMarking190Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '190deg' }],
    MozTransform: [{ rotate: '190deg' }],
    transform: [{ rotate: '190deg' }],
  },
  baseMarking200Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '200deg' }],
    MozTransform: [{ rotate: '200deg' }],
    transform: [{ rotate: '200deg' }],
  },
  baseMarking205Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '205deg' }],
    MozTransform: [{ rotate: '205deg' }],
    transform: [{ rotate: '205deg' }],
  },
  baseMarking220Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '220deg' }],
    MozTransform: [{ rotate: '220deg' }],
    transform: [{ rotate: '220deg' }],
  },
  baseMarking230Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '230deg' }],
    MozTransform: [{ rotate: '230deg' }],
    transform: [{ rotate: '230deg' }],
  },
  baseMarking240Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '240deg' }],
    MozTransform: [{ rotate: '240deg' }],
    transform: [{ rotate: '240deg' }],
  },
  baseMarking260Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '260deg' }],
    MozTransform: [{ rotate: '260deg' }],
    transform: [{ rotate: '260deg' }],
  },
  baseMarking270Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '270deg' }],
    MozTransform: [{ rotate: '270deg' }],
    transform: [{ rotate: '270deg' }],
  },
  baseMarking280Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '280deg' }],
    MozTransform: [{ rotate: '280deg' }],
    transform: [{ rotate: '280deg' }],
  },
  baseMarking290Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '290deg' }],
    MozTransform: [{ rotate: '290deg' }],
    transform: [{ rotate: '290deg' }],
  },
  baseMarking295Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '295deg' }],
    MozTransform: [{ rotate: '295deg' }],
    transform: [{ rotate: '295deg' }],
  },
  baseMarking310Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '310deg' }],
    MozTransform: [{ rotate: '310deg' }],
    transform: [{ rotate: '310deg' }],
  },
  baseMarking320Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '320deg' }],
    MozTransform: [{ rotate: '320deg' }],
    transform: [{ rotate: '320deg' }],
  },
  baseMarking330Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '330deg' }],
    MozTransform: [{ rotate: '330deg' }],
    transform: [{ rotate: '330deg' }],
  },
  baseMarking340Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '340deg' }],
    MozTransform: [{ rotate: '340deg' }],
    transform: [{ rotate: '340deg' }],
  },
  baseMarking350Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '350deg' }],
    MozTransform: [{ rotate: '350deg' }],
    transform: [{ rotate: '350deg' }],
  },
  baseMarking360Deg: {
    ...baseMarking,
    WebkitTransform: [{ rotate: '360deg' }],
    MozTransform: [{ rotate: '360deg' }],
    transform: [{ rotate: '360deg' }],
  },

  northPoleIndicator: {
    position: 'absolute',
    // padding: '0px 10px',
    width: 20,
    height: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ebcff',
    borderRadius: 5,
    top: 10,
    left: '68%',
    textAlign: 'center',
    WebkitTransform: [{ rotate: '210deg' }],
    MozTransform: [{ rotate: '210deg' }],
    transform: [{ rotate: '210deg' }],
    opacity: 0.5,
  },
  westPoleIndicator: {
    position: 'absolute',
    // padding: '0px 10px',
    width: 20,
    height: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ebcff',
    borderRadius: 5,
    top: '80%',
    right: 10,
    textAlign: 'center',
    WebkitTransform: [{ rotate: '210deg' }],
    MozTransform: [{ rotate: '210deg' }],
    transform: [{ rotate: '210deg' }],
    opacity: 0.5,
  },

  eastPoleIndicator: {
    position: 'absolute',
    top: '50%',
    right: -15,
    // transform: [{ translateY: -50 }],
  },
  southPoleIndicator: {
    position: 'absolute',
    left: '50%',
    transform: [],
    bottom: -20,
  },
});

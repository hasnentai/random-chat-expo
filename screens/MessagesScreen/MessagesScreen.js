import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  xOffset,
  yOffset,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Box,
  useColorMode,
  View,
  Actionsheet,
  useDisclose,
  Input,
  ScrollView,
  Text,
  HStack,
} from 'native-base';

//icons
import { AntDesign } from '@expo/vector-icons';
import { SearchBar } from 'react-native-screens';

export default function MessagesScreen() {
  let { colorMode } = useColorMode();
  let rotateValueHolder = new Animated.Value(0);
  const { isOpen, onOpen, onClose } = useDisclose();
  const [searchBar, setSearchBar] = useState(false);
  return (
    <Box
      safeAreaTop
      width={'100%'}
      height={'100%'}
      bg={colorMode === 'light' ? 'primary.300' : 'blueGray.900'}
    >
      <Box width={'100%'} alignItems={'center'}>
        <Box
          width={'90%'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          marginTop={5}
        >
          {!searchBar && (
            <TouchableOpacity
              onPress={() => setSearchBar(true)}
              style={{
                width: 55,
                height: 55,
                borderRadius: 60 / 2,
                backgroundColor: 'rgba(255,255,255, 0.1)',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: 0,
              }}
            >
              <AntDesign name="search1" size={28} color="#ffff" />
            </TouchableOpacity>
          )}

          {!searchBar && (
            <Text style={{ color: '#ffff', fontSize: 20 }}>Conversations</Text>
          )}
          {searchBar && (
            <Input
              placeholder="Search chat"
              width={'100%'}
              height={38}
              borderColor={'#696969'}
              borderRadius={10}
              onBlur={() => setSearchBar(false)}
            />
          )}
        </Box>
      </Box>

      {/* conversations top people */}
      <Box
        style={{
          width: '100%',
          marginTop: 30,
          alignItems: 'center',
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            width: '100%',
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
            }}
          >
            <Image
              source={{
                uri: 'https://www.cheatsheet.com/wp-content/uploads/2021/03/Klaus-The-Originals-1024x765.png',
              }}
              style={{
                width: 55,
                height: 55,
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
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Danielle_Campbell_at_PaleyFest_2014.jpg/640px-Danielle_Campbell_at_PaleyFest_2014.jpg',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Davena</Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbfZ5IXRSdzQzWTj-SnVOWsYCs5SovNh13E-OrmffvA&s',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Elizah</Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa04T5t91dxjW4xaOWiHcEIs6VfFehQZT-w3Chy-F_WQ&s',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Hope</Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjSKld1aEffx_uMUEcq0R2jcbga6kqDG7AYQzRS0UuA&s',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Aurora</Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzcvTIm4CdY8kCNEN1eo28uViZZkD113f4wHvHhBNFA&s',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Rebecca</Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65yVWS_bBcwO88yayMuRgLfsOqV5PEyCO1HIOezFMsg&s',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Yusuf</Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR28JXCy91o4uGXMJGIakWJm42eZh9bg-lseoygP_ElA&s',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Madelyn</Text>
            </View>
          </View>
          <View
            style={{
              zIndex: 99999,
              alignItems: 'center',
              shadowColor: '#fff',
              shadowOffset: { width: xOffset, height: yOffset },
              shadowOpacity: 0.09,
              shadowRadius: 5,
              opacity: 0.8,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={{
                width: 55,
                height: 55,
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
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10 }}>Torrance</Text>
            </View>
          </View>
        </ScrollView>
      </Box>
      <Box
        style={{
          width: '100%',
          marginTop: 30,
          height: '60%',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <ScrollView width={'100%'}>
          <Box
            style={{
              width: '100%',
              height: 80,
              backgroundColor: '#fffeff',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa04T5t91dxjW4xaOWiHcEIs6VfFehQZT-w3Chy-F_WQ&s',
              }}
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#fff',
                borderRadius: 30,
              }}
            />
            <Box style={{ marginLeft: 10 }}>
              <Text color={'#000'} style={{ fontSize: 15, fontWeight: '500' }}>
                Hope Mikelson
              </Text>
              <Text color={'#667374'} style={{ fontSize: 14 }}>
                Hey, How are you doing?
              </Text>
            </Box>
            <Text
              color={'#667374'}
              style={{ position: 'absolute', right: 12, top: 7, fontSize: 12 }}
            >
              12:39 PM
            </Text>
          </Box>
          <Box
            style={{
              width: '100%',
              height: 80,
              backgroundColor: 'rgba(255,255,255, 0.1)',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbfZ5IXRSdzQzWTj-SnVOWsYCs5SovNh13E-OrmffvA&s',
              }}
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#fff',
                borderRadius: 30,
              }}
            />
            <Box style={{ marginLeft: 10 }}>
              <Text color={'#ffff'} style={{ fontSize: 15, fontWeight: '500' }}>
                Elizah
              </Text>
              <Text color={'#667374'} style={{ fontSize: 14 }}>
                Will you be there available?
              </Text>
            </Box>
            <Text
              color={'#667374'}
              style={{ position: 'absolute', right: 12, top: 7, fontSize: 12 }}
            >
              12:55 PM
            </Text>
          </Box>
          <Box
            style={{
              width: '100%',
              height: 80,
              backgroundColor: '#fffeff',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAiwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAD0QAAIBAwMCBAMGBAMIAwAAAAECAwAEEQUSITFBBhNRYSJxgRQjMpGhsULB4fAHYtEVJDM0Q1JykhbS8f/EABoBAAEFAQAAAAAAAAAAAAAAAAUAAQIDBAb/xAAnEQACAgEEAQQCAwEAAAAAAAAAAQIDEQQSITFRBSIyQRNhQoGhFP/aAAwDAQACEQMRAD8AuGuAp2K6j5zY3BpMU+kIpCG4rsGudgilmIAHUntWF8SeM5FL22lgA8gzHtz2quyyNayy2qmVrxE11/qljp4H226ihJ6Bm5/Ks9qPjjTYWKWvm3DD+KMAL+ZrzuSVriZpJnZ5W6s5zmo3yOAuB79qwT1s2+AlDQ1r5cm3j8eXIYl9OVo+xEmD+nFFdO8babdSCO4SS1djjL4Kk/MV5mrlT0zmpHTbwB8JGRUI6uxFktHVJYxg9tQh1DKQVPII6GnGvNfCniaTSwbe73y2mcgDkx59Pb2r0Szu7e9t1ntJUljboynP0+ftW+q6Ni/YLv08qn+iWuxzTsVxHNXGcbikFOxXYpCErsUuK7FIcnxXYp1dikIZiuxTqF+JtRGl6PcT7gJCu2P3Y8Cmk1FZZKMXKSSMN4t8RzXd3JbW8zRQI20KvRv8x/kO1ZGQnOCTSyuXl3Elj3Jq7Z6Pf3xxBbs3v0FBbLNzy2dBVUoxxFEFoEL/AB8irXkq64Yc+vrR3T/A2ruFkHlY9GOMfWjUXgW8LAOoUDqwxjPbFZ3bFfZpjTNro8+ktmQ/KulyoAPG1elekTeB7hYSMq3uR0oLc+Cb+eVmjUBfcdaX5YidM/BjEl28nk4xiiOh6xc6TdCW3kwrHEiZ4ce4otceCNQgjJK5I6470Ik0i8tyTcQPHH03YqcLEnmLK51NrElwewWk6XVtFcRHKSKGFSYrH+G/EUcVtb2t1H5aAbFfOR8q2CMJFDKcqeh9aOV2RnHKOdvqlVLlHYrsUtdirColtoo5ZNkknl56HGavnQ5M8Tp+VC8fPPbFaizhkFtGHc7tvOaFeoW2U4cJd/QS0NVduVKPRnsV2KdiuooDhmK8+/xP1FC9rpyH4oz50nt2Ufufyr0PFeP+NLj7R4ru+BiNliAPfA6ms2qnivHk2aGObc+CTwvov224E065TGTkZr0uytIo1jREXAHHFZzwkqC3YIwPArc6ZCGAb2rnNRJt4Or00IqOS3aW5VRkfKiCRfDilhRQBxV2MKFHFZkjS2kUzFwcjrURh6gAYoi5AHSqzuPSnawJME3kGVIwKz2pWqtGyyICD7VrpQrg5GDQXU4h5ZpJtPImkeWa3p62cjGNcxP8Qx2PpRnwhr0bGKynlJ8z4Y2Ychv+0/y9am8RpsjVsDC8geprATTAXRa3LKVbeg/7Tmi+ltlHEkA9ZRGeYs9rrsUO0TU49RtI3DjftG750TxRxPKyc5JOLwxFO1gw6g5qR7iZ2LGRsn3pmK7FM4p9oSlJdMnxXfSlrqcbAleL+NYxF4q1AKCN0gb81BP65r2nFeX/AOKFoIdaguQOLiH9VOP5isurjmBt0LxY15Rd/wAP42KMcHbjrXp2mZEVYTwZbC00YSt+KRc/IUZTxLDERDGwbHoMljQC2O6XB1FL2x5NwgJA5FWI42NYk+INWIBttKmx6suTRnRfEFy7BLyBkbH8S45qv8eOy1WZ6NCYWPFRPakfiFXknDLux2zQDXvEE1t93bw72AOTS2ISnIs3EOxSaDakn3TEY6ZoKdT8TXZ+4svg7kr/ADqF5tZj3ma0YjHIGDj8qTgL8gF8Xo32MOudvfFeZyfBeHac4YEHsa9Xu1+36ZLHIhRiCNp9a8teA+bEDyVyD+da6OsGHU/LJf0zXLrT7nzYmAjDgFMda9Z0y/h1C3WSJwTgFlB/DXj8kCvlgAH7Gtd4Bt70M3kjZHuBkkYdR6CilM5ReHyCNVTFrd0ze12KdXYrcCiaup2K7FMONHWsN/ibCk9nYTRnc8UrIcDsw5/UCt3gVR8SaZHdaDPHFksE8zB52kYIx+orFrbnXFLHYT9O06tcpZ5QI0iyeTR7O1zyUUE47UcMFvoVrtSKSY5yqou7JpujLt8jKjAQftWrh+NBuAJHtQKxvODpK0sGRfUfE0j7IbFUiPRsjj5/2auR/a2VzcKSU5D44b61pBGp42tj58VWvwoj2jqeeKg2iyKwyWxumazDN1xis1KZppppFQNIrlQCQOKK2s3+7OF6JVfTPLkmy4yGbnHY1DJPGOQRc/8AyKORvsTRPEQM7yQR645/v9prG+vXuGgvbWQtjO9V3A/UVrntlXkBHHbBxUaJHGMhAD86m+SCMpqmnpDOJY12iUYYV5Zc6Vcy6zcw20DSFWzhRnANey64QYiByRzWa8PwbtR1VwfLQ7N8gGcDFX12OKyZrKlOW080urdrORkuisLA4Ic16Lp95LpdvoNokULJdcSsVJPUdPzrIf4nxxLrMsVuSVi2A5OTkgn+YrZ6tGEg8NSgcLIi/mFP8qIwsk45BltcVPHYccYdh6Gkp8o+9f8A8j+9NxRRdACXbJ66lxXU4hKtWckJglgmwN3GT8uKrYqxpwQTEyYIAzgisXqEc058BP0mzbqMeVgF6USrOh6p8NamywUGfSs7aQhNWuIxkoX3KfYjNGY2CvJk8RDP6Vz83ydNWuMBOWWKJcHGfSgepXazAgSpCgOMk4JptxdCNWd2+Jhz8vSqEcruH2KNsnBUjIYfLvTPLLUopZClhbD7I+GXgZI9apWCG2uC5wYy27APOPanJDcJERFJ5aMMAYJx8qpJElruxH8T8PI3LN9aW0fcmbGJ4nUFOQRmobkAA4x7UBsb9DiPJGPw47URlmdrd2OCVJBIpm3gZRWewLrUuIJSeoFVfC80EGlandTKAWL8k/whRx+dWPEKGOFwe64oJqV1b6d/h3NLuVZ3jk25HLFy3H8/pVkOUkUTeG34PLtRvjfW5up5Q08su9snnOTW9i1ePVNG0kD8UE8IOflivNhaxf7M87DeYO+eOvpXofgrRpbzw5E6MiuZY5F3nAwrHNFIpvgDza7ZuZh99J/5mmVLNzM/T8R5HemYorHpAKXyZPikxT8UhFSGG4rsehp2KTFM+RJtPKILacrrWJmJBVef0o95C/bJo8/DPF8PzHH+lZjVVaJortRxGcMfY96MJeiayinQ5ltzuIHUr3rn9dTstzjg6n06/wDJSsvlFfU4pI41aNR1wcjOB+fWls7ayZQ3+2VUFsjcgBHXqKv3eyWPcuCG5U9qox6fbPLvcFWB6gcVii/IUSTXeArFCDEqx6raMzdCSBih17ap8XmapZZG44xnp8jV6G2sRGQVQt67BVCfTLVX3AFj1AI71bLCRFYb+X+FG0gzfDymWVecOoKjOfT5UamQR2qw4w0rY+nSorKII24AU2S6VrySUkeVCNq5/v51TltiklHoGeKJgqSluAF5rx29vr28spUvZmdVRhDGeiL249a3njbUyLWRN3xScV59gMGDN+JSM0S0tOYNsFaq3EsIqQ86NJntu/cV6n4WguJ/AlhFY3P2S4b/AKmOwbkcfOsHomiteIbRHdkbhnC9M16ro9hDpWlW9jBJJIIgSXcAHn5Vtqqk3yuAfqL4xXD5LeDhd7b2CgM2MbiByaTilrsVuSwsAlvLyT1xpcUhFOISkrqSkMNlVZI3RxlWGCPagunXT2LiGXo4yjHow/1o2x2qW9ATQx7NbmwWOQngBlYdQaFeptLaG/SE2p/0EbC5BQIzf8M8Z9D0ogl6kZHwk56Vi4557KTZP1U/iH8QrTaVdQzKpbBOcYPWhLg+0HY2pLDCiXIOWWHn1qOa9WQ4YYq3iAgFCACPTFDdTktlTcpXJGc5p5Qk0OrknkZeXqW9u7KegoNc3otrPlsNjLGhV/q0anLNlFPbqzemKrxWVzq7ma/BjtQciLPJ+ftSUNvZBzcnwZPXr8311uX/AIY/D7+9DKJ+I9v+15Qo2qoAAHpiqFvE00yIoyWOBRulexYAl797bN/4CtQmmvMyjLvkGtTVHRLQWemxQ4xhefnV6t8eFgCze6TZ1TC2nIyImI9hUNWY/P2DbPtHYbqrtlKK4J1RjJ8nUhpaQ1ZkgNpKdio3kRPxsq/M4pm0uxJN9EN+2yzlPfGB9eKfaKPLAYcUNvL6O6lW2hycHLN2PXGKNaeoZQCKBeo2KdiS+jpfS6XCpuXbKWoWAZtxQEEdxxVJNBBcPZ3b2xxjafiX/X9a1Mtt918XIqvDbCQEDI5wOKwKTQS2oB3Gla5bRAx3lrKvbcXUn9DQy40XWblSZrm2hTHYs/8A9a3UkMkyRpJwsfOfWo2tlb4e2euKlvY2xGU0nwxBC/2iUvPMP+pJ2+Q6DrRS8jAjKrgKBgYo20QRNqj4aFaiPhJqEm2WRikeReI1xqs3uBiifgfT0vNQeVxkRAECofE9nI12Z4kLBV+LHbmjH+HAH++HvxXQaRqUUc3r04ORtQMCuxS11bgOJikx70tdSETMyqMswHzNVp76CNM7ww/y0Avru4njRnwAzYB25BGOw7VA4aSFMkiN5CWPIBA68de31+tYZat59qCkdCv5MKNqctyXWJvL25HuP761GluTGWLEkkEn1qCxw0bkjbuBZApwMHvjHHSiUKHy9o+Ir1Pc9s1hvnOUW8hHT1whNYQOsYNt3I3q3H04rV6eoC0G0+HHxdcMy/kxo/ZrtHNDpdhWPxL5X7r6VFboFPv3qyBlRXIoyaYccyADmmRwryT3qVhkU4bAvrTjFS574XpQHUydhFHrg5GM0C1BTnHaoMkjLtAJNTijxnerZHtj/wDKpX1pdaJbz3OmyCJWYGUAds9j2rRWcStfSz9do8sfTr+v7UM8eXkdvpkVoh+9nbJH+Uf1/atFdk4zSgzNdCudcnNZCmi6tBqlokke5H/CyOcnI6896Idqx/hG1eHR2lI4mckA9cdMj9T9KOR3c8WA4BQY+FjyR2x/WjdWq+pHO3aF9wCldUUNxHMSqNll6j+tS1sjJS5RglBxeGjIzuSzYVhsgGMA5JPuoI7/AJ026kXmPbwuyEbguB3I7H+xTxmS5dgu9WuEQkjdyDzzsb19R8xSxyss5kEcgAeVvwv2HA6D2oMdEJa3OL7KFDHIxGAeirwOdxxznnpR2CQhslRtGMFm6Vno3k8poyDnZEiFm6Fuc/i/v3otp04uFOSoPOEB3bgDjr9aTEF9DXfFKG/ELiXP/u1HUQBRWd0uQwxsCSrCd8n54P5c0agumc4AOe49Kw3VuL3II6exSjt+wnDnv0p3Q59abByM9D704g8GqUXtcig01zkgClQgnr0qKSRVJJ6UmOo5YrqMGg+oMsMMkxx8PAHqT0H50QlvFAOAT9KyniTW0tZ0Eq7hEdwjHVnxx9AP3p4R3SwQn7I5ZbvnttF0wT3Lfh7Y+J2PPHua89jivPE2sOzAjOC5HSNPQUZbTtW8R3S3WpO0FuM7AB0H+UH9zRm2tbeytxBZARxKeSeSx9T69q21V7eX2D7bd3tXRKvlx2yQW4AVDsCgkgDoP2FDtRuCIxEqneSRuzjJPT3/ACqW/u2t/ulhX8JYnJC9O56Z6cHHWhjSufsrldqrGXyE+Eceo4x82/pcUFm3dIlmcZREbbgZ4x6/3mrR1e6U4CIceq/1oeyLstPhKq43nG3jqevTpUttp008Ky+TGd+TkBjnmpRnKPTITrhP5LI0gNchZHb/AJpjuOOOPdz6dh9BVOBIRbDbFEqrbk4+66F+uMn+Y/ajgt4VAKwxg7nOQo67aFknymGTgQqAPT46iWDAyRzbd6L9+OjrwFX5e9PikbEQWRs7E+JZVPLPu/YfWkZmN2wLEjzJO/sKtW3OM88xdfYGmyIuWN2rvcqwMWJSy5BwAAAORx2otFIylC2/aRwQQf61lJfu4NS8v4cR5G3jBz1o7pDGS3n3ktiWTG7nHBpxdcoP22oM+GY7sn4dylcj2/WpTqOcjkYPJ7ChfQRY7nn3+IV1uT5eMnBZs/ktUypgy6OpsiGFukA5b2PFIZ4m7kj5GhFwf+X92Gfeoi7CAkMQfMHQ+xqP/NAsesn4CN7dJHayOGMIUHLMvIwM8Z7/ANaD2VrAkMUsieZeMMtJIMncxzye3bn5VY1gD7BLwOev/vThy8mf74q2FcYdFE7ZT7IpX+MmVviA5P8ACTQjUNQZRIICpAXDvITwx6Y4I9evtVjVGJmkQk7fJB29s715oTqfwafPMnwym4GXHDdT3qZWV7hwZrgqoMiwJGSFQtn04Kt69/l6U+72pcu4x5kUAXJI79skq3r/ABfrViONJ4roTosg83+MZ7ihrySC7ulDtt82MYzxz1pCLt9vhIZhjybdRv2kckDuf231ehVY4kVwQ20E7YSRzz15/c0L1YmFpTCfLJKZKcZ4NX57eB5NzwxsSq5JUHsKQj//2Q==',
              }}
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#fff',
                borderRadius: 30,
              }}
            />
            <Box style={{ marginLeft: 10 }}>
              <Text color={'#000'} style={{ fontSize: 15, fontWeight: '500' }}>
                Michael Malarkey{' '}
              </Text>
              <Text color={'#667374'} style={{ fontSize: 14 }}>
                Can you send me your location?{' '}
              </Text>
            </Box>
            <Text
              color={'#667374'}
              style={{ position: 'absolute', right: 12, top: 7, fontSize: 12 }}
            >
              11:59 PM
            </Text>
          </Box>
          <Box
            style={{
              width: '100%',
              height: 80,
              backgroundColor: '#fffeff',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8g-vrTBIOEfJ2IGip9Dogs3J6Wby53eQPoOGpFuP&s=36',
              }}
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#fff',
                borderRadius: 30,
              }}
            />
            <Box style={{ marginLeft: 10 }}>
              <Text color={'#000'} style={{ fontSize: 15, fontWeight: '500' }}>
                Paul Wesley
              </Text>
              <Text color={'#667374'} style={{ fontSize: 14 }}>
                everything good there?{' '}
              </Text>
            </Box>
            <Text
              color={'#667374'}
              style={{ position: 'absolute', right: 12, top: 7, fontSize: 12 }}
            >
              11:40 PM
            </Text>
          </Box>
          <Box
            style={{
              width: '100%',
              height: 80,
              backgroundColor: 'rgba(255,255,255, 0.1)',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              marginBottom: 15,
            }}
          >
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#fff',
                borderRadius: 30,
              }}
            />
            <Box style={{ marginLeft: 10 }}>
              <Text color={'#fff'} style={{ fontSize: 15, fontWeight: '500' }}>
                Phoebe Tonkin
              </Text>
              <Text color={'#667374'} style={{ fontSize: 14 }}>
                why are you not replying?
              </Text>
            </Box>
            <Text
              color={'#667374'}
              style={{ position: 'absolute', right: 12, top: 7, fontSize: 12 }}
            >
              10:39 PM
            </Text>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}

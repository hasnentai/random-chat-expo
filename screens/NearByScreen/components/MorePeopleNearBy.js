import React, { useEffect } from 'react';
import { Text, Image } from 'react-native';
import { Box, useColorMode, View, Actionsheet, useDisclose } from 'native-base';

export default function MorePeopleNearBy() {
  let { colorMode } = useColorMode();

  return (
    <Box width={'100%'} padding={10}>
      <Text
        style={{
          fontSize: 18,
          color: '#ffff',
          zIndex: 9999999999999999999999999999,
          marginTop: 7,
        }}
      >
        More people nearby
      </Text>
      <Box flexDirection={'row'} marginTop={5}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Danielle_Campbell_at_PaleyFest_2014.jpg/640px-Danielle_Campbell_at_PaleyFest_2014.jpg',
          }}
          style={{
            width: 45,
            height: 45,
            backgroundColor: '#fff',
            borderRadius: 25,
          }}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbfZ5IXRSdzQzWTj-SnVOWsYCs5SovNh13E-OrmffvA&s',
          }}
          style={{
            width: 45,
            height: 45,
            backgroundColor: '#fff',
            borderRadius: 25,
            marginLeft: 10,
          }}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa04T5t91dxjW4xaOWiHcEIs6VfFehQZT-w3Chy-F_WQ&s',
          }}
          style={{
            width: 45,
            height: 45,
            backgroundColor: '#fff',
            borderRadius: 25,
            marginLeft: 10,
          }}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjSKld1aEffx_uMUEcq0R2jcbga6kqDG7AYQzRS0UuA&s',
          }}
          style={{
            width: 45,
            height: 45,
            backgroundColor: '#fff',
            borderRadius: 25,
            marginLeft: 10,
          }}
        />

        <Box
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            marginLeft: 10,
            borderWidth: 0.2,
            borderColor: '#696969',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#696969' }}>25+</Text>
        </Box>
      </Box>
    </Box>
  );
}

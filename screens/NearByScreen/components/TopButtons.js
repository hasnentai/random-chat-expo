import React from 'react';

import { Box, useColorMode } from 'native-base';

//icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopButtons() {
  let { colorMode } = useColorMode();

  return (
    <Box width={'100%'} alignItems={'center'}>
      <Box
        width={'90%'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        marginTop={3}
      >
        <Box
          style={{
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            backgroundColor: 'rgba(255,255,255, 0.1)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MaterialCommunityIcons
            name="access-point-network"
            size={30}
            color="#696969"
            style={{ marginTop: 15 }}
          />{' '}
        </Box>
        <Box
          style={{
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            backgroundColor: 'rgba(255,255,255, 0.1)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="ios-location-outline" size={30} color="#696969" />
        </Box>
      </Box>
    </Box>
  );
}

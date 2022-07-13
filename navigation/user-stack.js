import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Home from '../screens/Home';
import Setting from '../screens/Setting';

//icons
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

//custom tabbar button

const CustomTabBarButton = ({ children, onPress }) => (
  <View
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ rotate: '45deg' }],
    }}
  >
    <View
      style={{
        borderRadius: 23,
        backgroundColor: '#0f172a',
        padding: 5,
        zIndex: -2,
        // ...styles.shadow,
      }}
    >
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          borderRadius: 23,
          backgroundColor: 'rgb(81, 189, 255);',
        }}
      >
        {children}
      </TouchableOpacity>
    </View>
  </View>
);

const UserStack = () => {
  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.2,
          duration: 700,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarComponent: {},
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: 'rgba(255,255,255, 0.1)',
            borderRadius: 25,
            height: 80,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 12,
                }}
              >
                <MaterialCommunityIcons
                  name="home-flood"
                  size={30}
                  color={focused ? '#ffff' : '#696969'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 12,
                }}
              >
                <Ionicons
                  name="chatbubble-ellipses"
                  size={30}
                  color={focused ? '#ffff' : '#696969'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Check"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Animated.View style={{ transform: [{ scale: anim.current }] }}>
                <Ionicons name="ios-locate-outline" size={30} color="#ffff" />
              </Animated.View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Check1"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 12,
                }}
              >
                <MaterialIcons
                  name="settings"
                  size={30}
                  color={focused ? '#ffff' : '#696969'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Check2"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 12,
                }}
              >
                <FontAwesome
                  name="user"
                  size={30}
                  color={focused ? '#ffff' : '#696969'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#ffff',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default UserStack;

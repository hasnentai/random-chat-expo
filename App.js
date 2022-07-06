import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GeoFire } from "geofire";
import firebase from "firebase";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const uid = uuidv4();
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAYL85a8H6c-_9fU4OtDE6LLTkVOJJIqAg",
      authDomain: "native-base-hack.firebaseapp.com",
      databaseURL: "https://native-base-hack-default-rtdb.firebaseio.com",
      projectId: "native-base-hack",
      storageBucket: "native-base-hack.appspot.com",
      messagingSenderId: "600550657392",
      appId: "1:600550657392:web:2431af57f1ac899cd613b5",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    var ref = firebase.database().ref();
    const geofireRef = new GeoFire(firebase.database().ref("getData"));
    let lat = 12.8832182;
    let long = 77.6048333;
    let users = [
      [40.73061, -73.935242],
      [2.8832182, 77.6048333],
    ];

    geofireRef.set(uid, users[0]);
    var geoQuery = geofireRef.query({
      center: users[0],
      radius: 10.5,
    });

    var onReadyRegistration = geoQuery.on("ready", function () {
      console.log(
        "GeoQuery has loaded and fired all other events for initial data"
      );
    });

    var onKeyEnteredRegistration = geoQuery.on(
      "key_entered",
      function (key, location, distance) {
        console.log(
          key +
            " entered query at " +
            location +
            " (" +
            distance +
            " km from center)"
        );
      }
    );

    var onKeyExitedRegistration = geoQuery.on(
      "key_exited",
      function (key, location, distance) {
        console.log(
          key +
            " exited query to " +
            location +
            " (" +
            distance +
            " km from center)"
        );
      }
    );

    return () => {
      geoFire.remove(uid).then(
        function () {
          console.log("Provided key has been removed from GeoFire");
        },
        function (error) {
          console.log("Error: " + error);
        }
      );

      var onKeyEnteredRegistration = geoQuery.on(
        "key_entered",
        function (key, location, distance) {
          console.log(
            key +
              " entered query at " +
              location +
              " (" +
              distance +
              " km from center)"
          );
        }
      );

      var onKeyExitedRegistration = geoQuery.on(
        "key_exited",
        function (key, location, distance) {
          console.log(
            key +
              " exited query to " +
              location +
              " (" +
              distance +
              " km from center)"
          );

          // Cancel all of the query's callbacks
          geoQuery.cancel();
        }
      );
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>I am from BLR</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

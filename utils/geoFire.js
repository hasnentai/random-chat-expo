import { GeoFire } from "geofire";
import firebase from "firebase";

const uid = "11edc52b-2918-4d71-9058-f7285e29d894";
var ref;
var geofireRef;
let geoQuery;
let users = [
  [40.73061, -73.935242],
  [12.888728, 77.601411],
];

/**
 * Connecting to firebase by supplying required params
 * it creates a connection to the realtime db and returns a ref.
 */
const setUpFireBase = () => {
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

  ref = firebase.database().ref();
  geofireRef = new GeoFire(firebase.database().ref("getData"));
};

const connect = () => {
  setUpFireBase();
  geofireRef.set(uid, users[1]);
  geoQuery = geofireRef.query({
    center: users[1],
    radius: 100, // No Decimal Values to be provided
  });

  geoQuery.on("ready", function () {
    console.log(
      "GeoQuery has loaded and fired all other events for initial data"
    );
  });

  geoQuery.on("key_entered", function (key, location, distance) {
    console.log(
      key +
        " entered query at " +
        location +
        " (" +
        distance +
        " km from center)"
    );
  });

  geoQuery.on("key_exited", function (key, location, distance) {
    console.log(
      key +
        " exited query to " +
        location +
        " (" +
        distance +
        " km from center)"
    );
  });
};

const disconnect = () => {
  geofireRef.remove(uid).then(() => {
    console.log("delete");
  });
};

export { connect, disconnect };
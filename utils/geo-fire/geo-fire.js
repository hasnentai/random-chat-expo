import { GeoFire } from "geofire";
import firebase from "firebase";
import { addUsers } from "../../redux/near-by-user/near-by-user.slice";

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

const connect = (uid, dispatch) => {
  geofireRef = new GeoFire(firebase?.database().ref("getData"));
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
    dispatch(addUsers(key));
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

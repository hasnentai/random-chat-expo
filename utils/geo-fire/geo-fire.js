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
 * @description Connect as per the radius parameter and will be display to
 * the all near by user by updating a user store
 * @param {*} uid
 * @param {*} dispatch
 * @param {*} usersStore
 * @hasnentai
 *
 */
const connect = (uid, dispatch, usersStore) => {
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
    // Avoid duplicate push in the userStore
    if (usersStore.indexOf(key) === -1) {
      dispatch(addUsers(key));
    }
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
/**
 * @todo : Need to figure out what exact actions should be taking when user disconnect from the app.
 */
const disconnect = () => {
  geofireRef.remove(uid).then(() => {
    console.log("delete");
  });
};

export { connect, disconnect };

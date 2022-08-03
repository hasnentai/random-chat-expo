import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { removeData, storeData } from "../../secure-store";
import { addUserInFirestore } from "../firebase-db-service";

/**
 *
 * @param {*} phoneNumber
 * @param {*} recaptchaVerifier
 * @param {*} setVerificationId
 * @param {*} showMessage
 * @description sendVerificationCode callback will authenticate user using recaptcha and sends a OTP code on
 * user mobile phone.
 */
const sendVerificationCode = async (
  phoneNumber,
  recaptchaVerifier,
  setVerificationId,
  showMessage
) => {
  try {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptchaVerifier.current
    );
    setVerificationId((prev) => ({ ...prev, verificationId: verificationId }));
    showMessage({
      text: "Verification code has been sent to your phone.",
    });
  } catch (err) {
    showMessage({ text: `Error: ${err.message}`, color: "red" });
  }
};

/**
 *
 * @param {*} verificationId
 * @param {*} verificationCode
 * @param {*} showMessage
 * @description verifyCode callback will authenticate user by verifying the OTP code and returns the Auth user object
 * Auth user objects basically holds user information such as name , email and accessToken.
 */
const verifyCode = async (
  verificationId,
  verificationCode,
  showMessage,
  navigation
) => {
  try {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    const creds = await firebase.auth().signInWithCredential(credential);
    const accessToken = await creds.user.getIdToken();
    const uid = await firebase?.auth().currentUser.uid;
    //TODO:: @ammannn should be sending this data from UI
    const user = {
      firstName: "Klaus",
      lastName: "K R",
      photoURL: [],
      email: "Klauskr@gmail.com",
      phone: "+918618723986",
      uid: uid,
    };
    await addUserInFirestore(user);
    storeData("access-token", accessToken);
    navigation.replace("Nearby");
  } catch (err) {
    showMessage({ text: `Error: ${err.message}`, color: "red" });
  }
};

/**
 * @description getUser call back is used to get the logged in user.
 * @returns Login In user using useAuthState hook.
 */
const getUser = () => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return user;
};

/**
 * @description Sign out user form the app.
 * TODO : // Needs to call disconnect for geoFire to Update user info.
 */
const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      removeData("access-token");
    });
};

export { sendVerificationCode, verifyCode, getUser, signOut };

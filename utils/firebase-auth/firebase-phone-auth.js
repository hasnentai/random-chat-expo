import * as firebase from "firebase";
import { save } from "../secure-store";

const sendVerificationCode = async (
  phoneNumber,
  recaptchaVerifier,
  setVerificationId,
  showMessage
) => {
  // The FirebaseRecaptchaVerifierModal ref implements the
  // FirebaseAuthApplicationVerifier interface and can be
  // passed directly to `verifyPhoneNumber`.
  try {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptchaVerifier.current
    );
    setVerificationId(verificationId);
    showMessage({
      text: "Verification code has been sent to your phone.",
    });
  } catch (err) {
    showMessage({ text: `Error: ${err.message}`, color: "red" });
  }
};

const verifyCode = async (verificationId, verificationCode, showMessage) => {
  try {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    let creds = await firebase.auth().signInWithCredential(credential);
  
    showMessage({ text: "Phone authentication successful 👍" });

    // save("verificationId", credential.Object.verificationId);
  } catch (err) {
    showMessage({ text: `Error: ${err.message}`, color: "red" });
  }
};

export { sendVerificationCode, verifyCode };

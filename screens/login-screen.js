import * as React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import {
  sendVerificationCode,
  verifyCode,
} from "../utils/firebase-auth/firebase-phone-auth";
import { firebaseConfig } from "../utils/firebaseConfig";

export default function LoginScreen({ navigation }) {
  // useRef to get Dom element while verifying captcha
  const recaptchaVerifier = React.useRef(null);

  // local state for all state variables
  const [state, setState] = React.useState({
    phoneNumber: undefined,
    verificationId: undefined,
    verificationCode: undefined,
  });

  //TODO:: Should be removed soon may be @mandeep can take care while developing a UI for phone auth

  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === "web"
      ? {
          text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
        }
      : undefined
  );

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      {firebaseRecaptchaNode()}
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) =>
          setState((prev) => ({ ...prev, phoneNumber: phoneNumber }))
        }
      />
      <Button
        title="Send Verification Code"
        disabled={!state.phoneNumber}
        onPress={() => {
          sendVerificationCode(
            state.phoneNumber,
            recaptchaVerifier,
            setState,
            showMessage
          );
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!state.verificationId}
        placeholder="123456"
        onChangeText={(data) =>
          setState((prev) => ({ ...prev, verificationCode: data }))
        }
      />
      <Button
        title="Confirm Verification Code"
        disabled={!state.verificationId}
        onPress={() =>
          verifyCode(
            state.verificationId,
            state.verificationCode,
            showMessage,
            navigation
          )
        }
      />
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );

  function firebaseRecaptchaNode() {
    return (
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
    );
  }
}

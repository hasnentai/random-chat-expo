import { View, Text, Button } from "react-native";
import { connect, disconnect } from "../utils/geoFire";

function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Connect" onPress={connect}></Button>
      <Button title="DisConnect" onPress={disconnect}></Button>
    </View>
  );
}

export default ChatScreen;

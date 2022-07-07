import { Button, StyleSheet, Text, View } from "react-native";

export default function Compass() {
  return (
    <View>
      <View style={styles.compass}>
        <View style={styles.outerCompass}>
          <View style={styles.outerCompassAfter}></View>
          <View style={styles.outerCompassBefore}></View>
          <View style={styles.baseMarking30Deg}></View>
          <View style={styles.baseMarking60Deg}></View>
          <View style={styles.baseMarking120Deg}></View>
          <View style={styles.baseMarking150Deg}></View>
          <View style={styles.innerCompass}>
            <View style={styles.innerCompassBefore}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const baseStyle = {
  content: "",

  position: "absolute",
  width: "5px",
  height: "100%",
  backgroundColor: "#1df52f",
  zIndex: "0",
  left: "49%",
};
const baseMarking = {
  ...baseStyle,
  backgroundColor: "#bdbdcb",
  width: "3px",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  compass: {
    width: "30rem",
    height: "30rem",
    position: "relative",
    border: "3px solid #282828",
    borderRadius: "50%",
    margin: "50px auto",
    padding: "1rem",
    margin: "1rem",
  },
  outerCompass: {
    position: "relative",
    background: "#282828",
    overflow: "hidden",
    width: "101%",
    height: "100%",
    borderRadius: "100%",
  },

  outerCompassAfter: {
    position: "absolute",
    WebkitTransform: "rotate(90deg)",
    MozTransform: "rotate(90deg)",
    transform: "rotate(90deg)",
    width: "100%",
    ...baseStyle,
  },

  outerCompassBefore: baseStyle,

  outerCompassMarking: baseStyle,

  baseMarking30Deg: {
    ...baseMarking,
    WebkitTransform: "rotate(30deg)",
    MozTransform: "rotate(30deg)",
    transform: "rotate(30deg)",
  },
  baseMarking60Deg: {
    ...baseMarking,
    WebkitTransform: "rotate(60deg)",
    MozTransform: "rotate(60deg)",
    transform: "rotate(60deg)",
  },
  baseMarking120Deg: {
    ...baseMarking,
    WebkitTransform: "rotate(120deg)",
    MozTransform: "rotate(120deg)",
    transform: "rotate(120deg)",
  },
  baseMarking150Deg: {
    ...baseMarking,
    WebkitTransform: "rotate(150deg)",
    MozTransform: "rotate(150deg)",
    transform: "rotate(150deg)",
  },
  innerCompass: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    WebKitBorderRadius: "100%",
    MozBorderRadius: "100%",
    borderRadius: "100%",
    zIndex: "1",
  },
  innerCompassBefore: {
    content: "",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "16px",
    height: "16px",
    borderRadius: "18px",
    marginLeft: "-9px",
    marginTop: "-6px",
    backgroundColor: "#4d4b63",
    zIndex: "11",
  },
});

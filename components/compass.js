import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Compass() {
  const url =
    "https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1287419511?b=1&k=20&m=1287419511&s=612x612&w=0&h=VkA1WKAPuTygRa-ZisvGwiIo84-gWzB5YMwrO4ErYuI=";

  return (
    <View>
      <View style={styles.compassWrapper}>
        <View style={styles.outerCompassBefore}></View>
        <View style={styles.outerCompassAfter}></View>
        <View style={styles.baseMarking30Deg}></View>
        <View style={styles.baseMarking45Deg}></View>
        <View style={styles.baseMarking60Deg}></View>
        <View style={styles.baseMarking75Deg}></View>
        <View style={styles.baseMarking105Deg}></View>
        <View style={styles.baseMarking120Deg}></View>
        <View style={styles.baseMarking135Deg}></View>
        <View style={styles.baseMarking150Deg}></View>
        <View style={styles.baseMarking165Deg}></View>
        <View style={styles.baseMarking195Deg}></View>
        <Text style={styles.northPoleIndicator}>N</Text>
        <Text style={styles.westPoleIndicator}>W</Text>
        <Text style={styles.eastPoleIndicator}>E</Text>
        <Text style={styles.southPoleIndicator}>S</Text>
      </View>
      <ImageBackground
        source={url}
        style={styles.imageView}
        imageStyle={styles.image}
      ></ImageBackground>
    </View>
  );
}

{
  /* <View style={styles.outerCompassAfter}></View>
        <View style={styles.outerCompassBefore}></View>
        <View style={styles.baseMarking30Deg}></View>
        <View style={styles.baseMarking60Deg}></View>
        <View style={styles.baseMarking120Deg}></View>
        <View style={styles.baseMarking150Deg}></View> */
}
{
  /* <View style={styles.innerCompass}>
              <View style={styles.innerCompassBefore}></View>
            </View> */
}

{
  /* <View style={styles.northPoleIndicator}>N</View>
          <View style={styles.westPoleIndicator}>W</View>
          <View style={styles.eastPoleIndicator}>E</View>
          <View style={styles.southPoleIndicator}>S</View> */
}

const baseStyle = {
  content: "",
  position: "absolute",
  width: "5px",
  height: "100%",
  backgroundColor: "#1df52f",
  zIndex: "0",
  left: "50%",
};
const baseMarking = {
  ...baseStyle,
  backgroundColor: "#bdbdcb",
  width: "3px",
};

const styles = StyleSheet.create({
  compassWrapper: {
    width: "32rem",
    height: "32rem",
    border: "2px solid #cfcfcf",
    position: "relative",
    borderRadius: "50%",
    margin: "20px",
    transition: "all 0.5s ease-in-out",
    transform: "rotate(20deg)",
  },
  imageView: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  image: {
    height: "30rem",
    width: "30rem",
    filter: "contrast(0.6)",
    margin: "auto",
    borderRadius: "50%",
  },
  outerCompass: {
    position: "relative",
    background: "#282828",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },

  outerCompassAfter: {
    position: "absolute",
    WebkitTransform: "translateX(-50%) rotate(90deg)",
    MozTransform: " translateX(-50%) rotate(90deg)",
    transform: "translateX(-50%) rotate(90deg)",
    width: "100%",
    ...baseStyle,
  },

  outerCompassBefore: {
    ...baseStyle,
    transform: "translateX(-50%)",
  },

  baseMarking30Deg: {
    ...baseMarking,
    WebkitTransform: " translateX(-50%) rotate(30deg)",
    MozTransform: " translateX(-50%) rotate(30deg)",
    transform: "translateX(-50%) rotate(30deg)",
  },
  baseMarking45Deg: {
    ...baseMarking,
    WebkitTransform: " translateX(-50%) rotate(45deg)",
    MozTransform: " translateX(-50%) rotate(45deg)",
    transform: "translateX(-50%) rotate(45deg)",
  },
  baseMarking60Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(60deg)",
    MozTransform: "translateX(-50%) rotate(60deg)",
    transform: "translateX(-50%) rotate(60deg)",
  },
  baseMarking75Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(75deg)",
    MozTransform: "translateX(-50%) rotate(75deg)",
    transform: "translateX(-50%) rotate(75deg)",
  },
  baseMarking105Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(105deg)",
    MozTransform: "translateX(-50%) rotate(105deg)",
    transform: "translateX(-50%) rotate(105deg)",
  },
  baseMarking120Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(120deg)",
    MozTransform: "translateX(-50%) rotate(120deg)",
    transform: "translateX(-50%) rotate(120deg)",
  },
  baseMarking135Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(135deg)",
    MozTransform: "translateX(-50%) rotate(135deg)",
    transform: "translateX(-50%) rotate(135deg)",
  },
  baseMarking150Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(150deg)",
    MozTransform: "translateX(-50%) rotate(150deg)",
    transform: "translateX(-50%) rotate(150deg)",
  },
  baseMarking165Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(165deg)",
    MozTransform: "translateX(-50%) rotate(165deg)",
    transform: "translateX(-50%) rotate(165deg)",
  },
  baseMarking195Deg: {
    ...baseMarking,
    WebkitTransform: "translateX(-50%) rotate(195deg)",
    MozTransform: "translateX(-50%) rotate(195deg)",
    transform: "translateX(-50%) rotate(195deg)",
  },

  northPoleIndicator: {
    position: "absolute",
    padding: "0px 10px",

    top: -20,
    left: "50%",
    textAlign: "center",
    transform: "translateX(-50%)",
  },
  westPoleIndicator: {
    position: "absolute",
    top: "50%",
    left: -20,
    transform: "translateY(-50%)",
  },
  eastPoleIndicator: {
    position: "absolute",
    top: "50%",
    right: -15,
    transform: "translateY(-50%)",
  },
  southPoleIndicator: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: -20,
  },
});

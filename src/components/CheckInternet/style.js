import { StyleSheet, Dimensions } from "react-native";

//
const { width } = Dimensions.get("window");

export default styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: "#b52424",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width,
    // position: "absolute",
    // top:30
  },
  offlineText: { color: "#fff" },
  onlineContainer: {
    backgroundColor: "green",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width,
    // top:30

    // position: "absolute"
  },
  onlineText: { color: "#fff" }
});
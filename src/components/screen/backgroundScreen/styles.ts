import { StyleSheet } from "react-native"
import colors from "@theme/color"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  tattoo1: {
    position: "absolute",
    top: -19,
    right: -15,
    width: 230,
    height: 189,
    resizeMode: "contain",
  },
  tattoo2: {
    position: "absolute",
    left: -38,
    bottom: -7,
    width: 307,
    height: 180,
    resizeMode: "contain",
  },
})

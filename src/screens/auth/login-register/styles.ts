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
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignSelf: "stretch",
    padding: 20,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
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
  agreement: {
    marginTop: 40,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFacebook: {
    height: 48,
    backgroundColor: "#1778F2",
    color: colors.white,
  },
  buttonApple: {
    height: 48,
    backgroundColor: "#000",
    color: colors.white,
    borderColor: colors.white,
    borderWidth: 1,
  },
  buttonGoogle: {
    height: 48,
    backgroundColor: "#DB4437",
    color: colors.white,
  },
  buttonTwitter: {
    height: 48,
    backgroundColor: "#1DA1F2",
    color: colors.white,
  },
})

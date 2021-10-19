import { StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

export default StyleSheet.create({
  lblGrNameStyle: {
    fontFamily: fonts.NotoSansBold,
    fontSize: 21,
    color: colors.white,
    fontWeight: "700",
  },
  lblGrNumStyle: {
    fontFamily: fonts.NotoSansBold,
    fontSize: 11,
    color: colors.white,
    fontWeight: "400",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  viewAbsolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {},
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
})

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
  container: {},
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
})

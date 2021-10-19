import { StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

export default StyleSheet.create({
  lblStyle: {
    fontFamily: fonts.NotoSansBold,
    fontSize: 11,
    color: colors.white,
  },
  container: {
    backgroundColor: "transparent",
    padding: 3,
    alignSelf: "baseline",
    alignItems: "center",
  },
})

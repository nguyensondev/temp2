import { Dimensions, StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

const windowWidth = Dimensions.get("window").width
const buttonWidth = windowWidth * 0.893
const buttonHeight = buttonWidth * 0.135
const buttonRadius = buttonHeight / 2

export default StyleSheet.create({
  touchableStyles: {
    width: buttonWidth,
    height: buttonHeight,
    backgroundColor: "red",
    borderRadius: buttonRadius,
  },
  buttonStyles: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  labelStyles: {
    fontFamily: fonts.NotoSansBold,
    color: colors.primary.white,
    fontWeight: "700",
    fontSize: 14,
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 16,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})

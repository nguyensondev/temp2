import { Dimensions, StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

// const windowWidth = Dimensions.get("window").width
// const buttonSize = 56
// const buttonRadius = buttonSize / 2

const styles = (buttonSize?: number) =>
  StyleSheet.create({
    touchableStyles: { width: buttonSize, height: buttonSize },
    buttonStyles: {
      width: buttonSize,
      height: buttonSize,
      backgroundColor: "white",
      borderRadius: buttonSize / 2,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonBorderStyles: {
      width: buttonSize,
      height: buttonSize,
      backgroundColor: "transparent",
      borderRadius: buttonSize / 2,
      borderColor: colors.primary.yellow,
      borderWidth: 1,
      position: "absolute",
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
export default styles

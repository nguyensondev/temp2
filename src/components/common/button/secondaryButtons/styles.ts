import { StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

const styles = (buttonSize?: number) =>
  StyleSheet.create({
    touchableStyles: { width: buttonSize, height: buttonSize },
    buttonStyles: {
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2,
      justifyContent: "center",
      alignItems: "center",
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

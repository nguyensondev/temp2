import { StyleSheet } from "react-native"
import colors from "@theme/color"

const styles = (size?: number) =>
  StyleSheet.create({
    imgStyles: {
      borderColor: colors.white,
      borderWidth: 1,
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  })
export default styles

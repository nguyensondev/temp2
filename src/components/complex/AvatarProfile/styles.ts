import { StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

const styles = (index?: number) =>
  StyleSheet.create({
    content: {
      position: "absolute",
      right: -index,
      top: 0,
      bottom: 0,
      justifyContent: "center",
    },
    container: {
      backgroundColor: "transparent",
      padding: 3,
      alignSelf: "baseline",
      alignItems: "center",
    },
    lblName: {
      color: colors.white,
      fontFamily: fonts.NotoSansBold,
      fontSize: 14,
      fontWeight: "700",
      marginLeft: index + 7,
    },
  })
export default styles

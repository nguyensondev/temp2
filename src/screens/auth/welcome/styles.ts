import { StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"
import { SCREEN_HEIGHT } from "@config/constants"

const styles = (active?: boolean) =>
  StyleSheet.create({
    container: { backgroundColor: colors.black },
    dot: {
      width: 20,
      height: 20,
      backgroundColor: active ? colors.white : colors.alpha.white50,
      borderRadius: 10,
      marginHorizontal: 10,
    },
    dotActived: {
      width: 20,
      height: 20,
      marginHorizontal: 10,
      backgroundColor: "transparent",
      borderRadius: 10,
      borderColor: colors.primary.yellow,
      borderWidth: 1,
      position: "absolute",
      left: -3,
      top: -3,
    },
    bgImage: { width: "100%", height: "100%" },
    topImage: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    viewText: {
      position: "absolute",
      alignItems: "center",
      top: SCREEN_HEIGHT * 0.57,
      left: 0,
      right: 0,
    },
    svg: {
      height: 34,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    viewLogin: {
      position: "absolute",
      flexDirection: "row",
      top: 50,
      left: 20,
      right: 20,
      justifyContent: "space-between",
    },
    pagitation: { position: "absolute", bottom: 50, left: 0, right: 0 },
    lblLogin: {
      fontFamily: fonts.NotoSansBold,
      fontWeight: "400",
      fontSize: 13,
      color: colors.white,
    },
    lblTitle: {
      fontFamily: fonts.NotoSansBold,
      fontWeight: "700",
      fontSize: 28,
      color: colors.white,
    },
    lblDescriptrion: {
      fontFamily: fonts.NotoSansBold,
      fontWeight: "700",
      fontSize: 14,
      color: colors.white,
      textAlign: "center",
      marginTop: 20,
    },
  })

export default styles

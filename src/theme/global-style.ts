import { StyleSheet } from "react-native"
import colors from "./color"
import fonts from "./fonts"

export const basicStyles = StyleSheet.create({
  flex1: { flex: 1 },
  flex1o5: { flex: 1.5 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  lblYellow: { color: colors.primary.yellow, fontFamily: fonts.NotoSansBold },
  lblWhite: { color: colors.white, fontFamily: fonts.NotoSansBold },
})

export default StyleSheet.create({
  flex1Transparent: { ...basicStyles.flex1, backgroundColor: "transparent" },

  lblYellow_14_600: {
    ...basicStyles.lblYellow,
    fontWeight: "600",
    fontSize: 14,
  },

  lblYellow_28_700: {
    ...basicStyles.lblYellow,
    fontWeight: "700",
    fontSize: 28,
  },

  lblYellow_11_400: {
    ...basicStyles.lblYellow,
    fontWeight: "400",
    fontSize: 11,
  },

  lblWhite_28_700: {
    ...basicStyles.lblWhite,
    fontWeight: "700",
    fontSize: 28,
  },

  lblWhite_14_700: {
    ...basicStyles.lblWhite,
    fontWeight: "700",
    fontSize: 14,
  },

  lblWhite_14_600: {
    ...basicStyles.lblWhite,
    fontWeight: "600",
    fontSize: 14,
  },

  lblWhite_13_400: {
    ...basicStyles.lblWhite,
    fontWeight: "400",
    fontSize: 13,
  },

  lblWhite_12_600: {
    ...basicStyles.lblWhite,
    fontWeight: "600",
    fontSize: 12,
  },

  lblWhite_11_400: {
    ...basicStyles.lblWhite,
    fontWeight: "400",
    fontSize: 11,
  },

  btnAreaClick: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  },
})

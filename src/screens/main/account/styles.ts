import { StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  content: { padding: 10 },
  btnTerm: { marginBottom: 30, marginTop: 10, marginLeft: 10 },
  lblSupUserName: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 17,
    fontWeight: "700",
  },
  lblNumFollow: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },
  lblFollow: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 15,
    fontWeight: "600",
  },
  lblUser: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 14,
    fontWeight: "700",
  },
  lblPolicyTerm: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 11,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  lblAnd: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 11,
    fontWeight: "400",
    textDecorationLine: "none",
  },
  lblDes: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 13,
    fontWeight: "400",
  },
  btnLogOut: {
    color: colors.primary.yellow,
    fontFamily: fonts.NotoSansBold,
    fontSize: 14,
    fontWeight: "700",
  },
  lblProjectName: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 14,
    fontWeight: "600",
  },
  btnProject: {
    color: colors.black,
    fontFamily: fonts.NotoSansBold,
    fontSize: 14,
    fontWeight: "700",
  },
  itemTransparent: {
    backgroundColor: "transparent",
  },
  btnItem: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  viewHistory: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flex3: { flex: 3, justifyContent: "center" },
  flex1: { flex: 1 },
  btnSetting: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  flex1Center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default styles

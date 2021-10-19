import { StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  content: { padding: 10, flex: 1 },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  viewProject: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  lblUserName: {
    color: colors.black,
    fontFamily: fonts.NotoSansBold,
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "700",
    overflow: "hidden",
    // backgroundColor: "#CDDC39",
    // padding: 3,
    borderTopColor: "#e5e6e9",
    borderLeftColor: "#dfe0e4",
    borderRightColor: "#dfe0e4",
    borderBottomColor: "#d0d1d5",
    borderWidth: 1,
  },
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
  lblJob: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 11,
    fontWeight: "400",
    marginVertical: 10,
  },
  lblDes: {
    color: colors.white,
    fontFamily: fonts.NotoSansBold,
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
  },
  btnMoreLess: {
    color: colors.primary.yellow,
    fontFamily: fonts.NotoSansBold,
    fontSize: 14,
    fontWeight: "700",
    alignSelf: "flex-end",
  },
  btnSize: { top: 10, bottom: 10, left: 10, right: 10 },
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
  separator: {
    backgroundColor: "transparent",
    height: 20,
  },
  btnGoToAccount: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  viewName: { flexDirection: "row", paddingHorizontal: 10, marginTop: 20, marginBottom: 10 },
  viewAvatar: { flexDirection: "row", paddingLeft: 10 },
  contentAvatar: { flex: 1, justifyContent: "center", alignItems: "flex-start" },
  viewFollowers: {
    flex: 1.3,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
  },
  viewFollowing: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  viewDisplayName: {
    marginHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    borderColor: colors.white,
  },
  itemContainer: {
    backgroundColor: colors.alpha.white10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContent: {
    backgroundColor: colors.white,
    width: "30%",
    paddingVertical: 7,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default styles

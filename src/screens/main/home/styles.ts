import { Dimensions, StyleSheet } from "react-native"
import colors from "@theme/color"
import fonts from "@theme/fonts"

const SCREEN_WIDTH = Dimensions.get("screen").width

const styles = (height?: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    safeArea: {
      flex: 1,
      backgroundColor: colors.black,
    },
    content: {
      flex: 1,
    },
    item: {
      backgroundColor: "#f9c2ff",
      height: height,
      width: SCREEN_WIDTH,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 32,
    },
    item2: {
      height: "100%",
      width: Dimensions.get("window").width,
      overflow: "hidden",
    },
    video: { flex: 1 },
    upVoteReplay: {
      position: "absolute",
      bottom: 0,
      right: 15,
      top: 0,
      justifyContent: "center",
    },
    avatarProfile: {
      position: "absolute",
      left: 10,
      top: 35,
    },
    itemContainer: { flex: 1, backgroundColor: "transparent" },

    lblLoading: {
      color: colors.white,
      fontFamily: fonts.NotoSansBold,
      fontSize: 17,
      fontWeight: "700",
    },

    viewPoster: {
      height: height,
      overflow: "hidden",
    },

    viewBlur: { position: "absolute", height, backgroundColor: "#00000090" },

    viewPaused: {
      position: "absolute",
      top: height,
      left: 0,
      right: 0,
      justifyContent: "center",
      alignItems: "center",
    },

    viewExpanded: {
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      backgroundColor: "transparent",
      paddingVertical: 30,
      left: 0,
      right: 0,
      paddingHorizontal: 20,
      height,
      overflow: "hidden",
    },

    viewTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    viewAvatar: { marginTop: 22, marginLeft: -10, flex: 1 },

    viewRight: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      flex: 1,
    },

    btnSize: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    },

    viewCollapsed: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 25,
    },
    viewContentCollapsed: { flexDirection: "row", marginTop: 30 },

    imgAvatar: {
      width: 84,
      height: 84,
      borderColor: colors.primary.white,
      borderWidth: 0.5,
      borderRadius: 5,
    },

    viewDescription: { marginVertical: 30 },

    viewDisccuss: { paddingHorizontal: 10 },

    viewButtonBot: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: height,
    },

    btnButtonBot: { alignSelf: "center", backgroundColor: "white", marginTop: 20 },
  })
export default styles

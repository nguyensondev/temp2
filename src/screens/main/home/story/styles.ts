import { StyleSheet } from "react-native"
import colors from "@theme/color"
import { basicStyles } from "@theme/global-style"

export default StyleSheet.create({
  viewUpVote: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  imgAvatar: {
    width: 84,
    height: 84,
    borderColor: colors.primary.white,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  viewBuyNFT: {
    ...basicStyles.flex1,
    justifyContent: "flex-end",
  },
})

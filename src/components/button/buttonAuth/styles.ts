import { StyleSheet } from "react-native"
import colors from "@theme/color"
import headers from "@theme/typography"

enum ButtonSizes {
  Small = 24,
  Default = 44,
}

export const DefaultButtonStyles = StyleSheet.create({
  outlined: {
    height: ButtonSizes.Default + 8,
  },
  button: {
    height: ButtonSizes.Default,
  },
  label: {
    ...headers.subhead,
  },
})

export const SmallButtonStyles = StyleSheet.create({
  outlined: {
    height: ButtonSizes.Small + 8,
  },
  button: {
    height: ButtonSizes.Small,
  },
  label: {
    ...headers.subhead,
  },
})

export default StyleSheet.create({
  outline: {
    borderWidth: 0,
    padding: 0,
    borderColor: "transparent",
  },
  outlined: {
    borderWidth: 0,
    padding: 0,
    borderColor: colors.primary.yellow,
  },
  outlinedDisabled: {
    borderColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
  button: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary.white,
    color: colors.primary.white,
    //borderRadius: 25
  },
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
    opacity: 0.5,
  },
  label: {
    paddingHorizontal: 15,
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

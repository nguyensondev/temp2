// import * as Font from "expo-font"

import { Platform } from "react-native"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  // await Font.loadAsync({
  //   Montserrat: require("./Montserrat-Regular.ttf"),
  //   "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
  // })
}

export default {
  GTAmericaMedium: "GTAmerica-Expanded-Medium",
  GTAmericaBold: "GTAmerica-Expanded-Bold",
  NotoSansRegular: "NotoSans-Regular",
  NotoSansBold: Platform.OS === "android" ? "notosans_bold" : "NotoSans-Bold",
  Fallback: "sans-serif",
} as const

import { Platform, TextStyle } from "react-native"
import fonts from './fonts';
/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ ios: "Helvetica", android: "normal" }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: "Courier", android: "monospace" }),
}

export default {
  h1: <TextStyle>{
    fontFamily: fonts.GTAmericaBold,
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.56
  },
  h2: <TextStyle>{
    fontFamily: fonts.GTAmericaBold,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.4
  },
  h3: <TextStyle>{
    fontFamily: fonts.GTAmericaBold,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.32
  },
  h4: <TextStyle>{
    fontFamily: fonts.GTAmericaMedium,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28
  },
  title: <TextStyle>{
    fontFamily: fonts.NotoSansBold,
    fontWeight: 'normal',
    fontSize: 28,
    lineHeight: 33.6
  },
  subhead: <TextStyle>{
    fontFamily: fonts.NotoSansBold,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20
  },
  subtitle: <TextStyle>{
    fontFamily: fonts.NotoSansBold,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 28
  },
  body: <TextStyle>{
    fontFamily: fonts.NotoSansRegular,
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 23.4,
    letterSpacing: 0.56
  },
  overline: <TextStyle>{
    fontFamily: fonts.NotoSansRegular,
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 17.6
  },
  action: <TextStyle>{
    fontFamily: fonts.NotoSansBold,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 28
  }
} as const;

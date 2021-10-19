import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.orange,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.white,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
}

export default {
  black: '#000000',
  silver: '#DDDDDD',
  white: '#FFFFFF',
  unselectedWhite: '#B8B5B5',
  headerLine: '#C4C4C4',
  primary: {
    blue: '#316EEB',
    yellow: '#F2FF67',
    black: '#121212',
    white: '#FFFFFF'
  },
  roleInChannel: {
    supporter: '#A56A43',
    fan: '#4CAF50',
    moderator: '#FEDB41',
    host: '#FD003A'
  },
  albumMembership: {
    gold: '#F2FF67',
    silver: '#FFFFFF',
    bronze: '#FEA832'
  },
  accent: {
    pink: '#E72E66',
    yellow: '#FFD401',
    green: '#2BA63A',
    brown: '#935E3B'
  },
  gradient: {
    darkBlue: '#001746'
  },
  alpha: {
    white10: 'rgba(255, 255, 255, 0.1)',
    white20: 'rgba(255, 255, 255, 0.2)',
    white30: 'rgba(255, 255, 255, 0.3)',
    white40: 'rgba(255, 255, 255, 0.4)',
    white50: 'rgba(255, 255, 255, 0.5)',
    white70: 'rgba(255, 255, 255, 0.7)',
    white80: 'rgba(255, 255, 255, 0.8)',
    black05: 'rgba(0, 0, 0, 0.05)',
    black20: 'rgba(0, 0, 0, 0.2)',
    black30: 'rgba(0, 0, 0, 0.3)',
    black40: 'rgba(0, 0, 0, 0.4)',
    black50: 'rgba(0, 0, 0, 0.5)',
    black70: 'rgba(0, 0, 0, 0.7)',
    black85: 'rgba(0, 0, 0, 0.85)',
    black90: 'rgba(0, 0, 0, 0.9)',
    blue80: 'rgba(49, 110, 235, 0.8)',
    blue60: 'rgba(49, 110, 235, 0.6)', // primary.blue
    blue10: 'rgba(49, 110, 235, 0.1)',
    blue30: 'rgba(49, 110, 235, 0.3)',
    blue08: 'rgba(49, 110, 235, 0.08)'
  }
} as const;

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { Dimensions, Platform, StatusBar } from "react-native"

export const APP_NAME = "Op3n"
export const APP_VERSION = "0.0.1"
export const APP_BUILD = "1"
export const APP_ENV = process.env.APP_ENV

// Video recording max duration (in seconds)
export const VIDEO_MAX_DURATION = 180
export const AVA_TITLE_LENGTH_LIMIT = 120

export const CREATE_LIVE_TIME_FORMAT = "h:mm A, MMM D, yyyy"
export const LIVE_TIME_FORMAT_TODAY = "h:mm A"
export const LIVE_TIME_FORMAT = "h:mm A, MMM D, yyyy"

export const LIVE_COUNT_DOWN_SCHEDULE_AT_TODAY = "MMM D @ h:mm A"
export const LIVE_COUNT_DOWN_SCHEDULE_AT_ANOTHER_DAY = "dddd, MMM D @ h:mm A"

export const MAX_AVATAR_MEMBER_JOINED = 3

export const SCREEN_HEIGHT = Dimensions.get("window").height
export const SCREEN_WIDTH = Dimensions.get("window").width

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 45 : StatusBar.currentHeight

export const HEIGHTBAR = () => {
  return SCREEN_HEIGHT - useBottomTabBarHeight() + STATUSBAR_HEIGHT
}

export const WELCOME = [
  {
    title: {
      primary: "Welcome To",
      secondary: "OP3N",
    },
    description: "A storytelling platform for\n Asian youth around the world",
  },
  {
    title: {
      primary: "Stories",
      secondary: "You’ll Love",
    },
    description: "Watch stories curated just for you,\n share them with friends",
  },
  {
    title: {
      primary: "Tell",
      secondary: "Your Story",
    },
    description: "Create and reply to stories with\n our easy-to-use editing tools",
  },
]

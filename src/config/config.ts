import RNConfig from "react-native-config"
import type { DeepReadonly } from "ts-essentials"
import { APP_NAME, APP_VERSION, APP_ENV, APP_BUILD } from "./constants"

type Config = DeepReadonly<{
  app: {
    name: string
    version: string
    build: string
    env: "production" | "staging" | "development"
  }
  localStorage: {
    name: string
    version: string
    storeName: string
  }
  firebase: {
    emulator: {
      enabled: boolean
    }
  }
  stream: {
    appId: string
    apiKey: string
  }
  mux: {
    envKey: string
  }
  amplitude: {
    apiKey: string
  }
  agora: {
    apiKey: string
  }
  algolia: {
    apiKey: string
    appId: string
  }
}>

const app: Config["app"] = {
  name: APP_NAME,
  version: APP_VERSION,
  build: APP_BUILD,
  env: APP_ENV,
} as const

const localStorage: Config["localStorage"] = {
  name: "est",
  version: "v1",
  storeName: "db",
} as const

const firebase: Config["firebase"] = {
  emulator: {
    enabled: process.env.FIREBASE_EMULATOR_ENABLED === "true",
  },
} as const

const stream: Config["stream"] = {
  appId: RNConfig.STREAM_APP_ID,
  apiKey: RNConfig.STREAM_API_KEY,
} as const

const mux: Config["mux"] = {
  envKey: RNConfig.MUX_DATA_ENV_KEY,
} as const

const amplitude: Config["amplitude"] = {
  apiKey: RNConfig.AMPLITUDE_API_KEY,
} as const

const agora: Config["agora"] = {
  apiKey: process.env.AGORA_TOKEN_ID,
} as const

const algolia: Config["algolia"] = {
  apiKey: RNConfig.ALGOLIA_API_KEY,
  appId: RNConfig.ALGOLIA_APP_ID,
} as const

export { app, localStorage, firebase, stream, mux, amplitude, agora, algolia }

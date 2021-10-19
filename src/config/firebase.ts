import firebase from "@react-native-firebase/app"
import { firebase as config } from "./config"

import "@react-native-firebase/auth"
import "@react-native-firebase/firestore"
import "@react-native-firebase/functions"
import "@react-native-firebase/storage"
import "@react-native-firebase/crashlytics"
import "@react-native-firebase/perf"
import "@react-native-firebase/messaging"

const app = firebase.app()
////console.log(app)
const auth = app.auth()
///console.log(auth)
const firestore = app.firestore()
const storage = app.storage()
const functions = app.functions()
const messaging = app.messaging()
const perf = app.perf()
const crashlytics = app.crashlytics()

if (__DEV__) {
  void perf.setPerformanceCollectionEnabled(false)
}

if (__DEV__ && config.emulator.enabled) {
  auth.useEmulator("http://localhost:5001")
  functions.useFunctionsEmulator("http://localhost:5002")

  void firestore.settings({
    host: "http://localhost:5003",
    ssl: false,
    persistence: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
  })
}

export default firebase
export { app, auth, firestore, storage, functions, messaging, crashlytics, perf }

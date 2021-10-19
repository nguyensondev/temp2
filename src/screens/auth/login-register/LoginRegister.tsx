import React, { FC, useEffect } from "react"
import { View, SafeAreaView, Platform, NativeModules } from "react-native"
import { AccessToken, LoginManager } from "react-native-fbsdk-next"
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin"
const { RNTwitterSignIn } = NativeModules
import AppleAuth from "@invertase/react-native-apple-authentication"

import Button from "@components/button/buttonAuth"
import FacebookIcon from "@components/icon/Facebook"
import AppleIcon from "@components/icon/Apple"
import GoogleIcon from "@components/icon/Google"
import TwitterIcon from "@components/icon/Twitter"
import BackgroundScreen from "@components/screen/backgroundScreen"
import Logo from "@components/icon/Logo"
import firebase, { auth } from "@config/firebase"
import { useStores } from "@models/root-store"

import styles from "./styles"

enum SignInResult {
  Success,
  Cancel,
}

interface ErrorWithCode extends Error {
  code: string
}

type SignInReturnType = Promise<SignInResult>

const Constants = {
  //Dev Parse keys
  TWITTER_COMSUMER_KEY: "kTqBQfJ3yTvyxzhFBlwKghxUG",
  TWITTER_CONSUMER_SECRET: "yj6BYIpzBEBGiF4QcKCE3IdgSOqygcG2fTcf0oliIGMbPXCjYh",
}

const LoginRegister: FC = () => {
  const { userStore, authStore } = useStores()

  useEffect(() => {
    _configureGoogleSignIn()
  }, [])

  const _configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: "229533239030-6g2t8ae9ikh50o8odndhtnve52p6lqgn.apps.googleusercontent.com",
      offlineAccess: false,
    })
  }

  const handleSignInWithTwitter = () => {
    RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
    RNTwitterSignIn.logIn()
      .then(async (loginData) => {
        const { authToken, authTokenSecret } = loginData
        if (authToken && authTokenSecret) {
          const credential = firebase.auth.TwitterAuthProvider.credential(
            authToken,
            authTokenSecret,
          )
          const { user } = await auth.signInWithCredential(credential)
          authStore.saveAuth(authToken)
          userStore.saveUser(user)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSignInWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      async function (result) {
        if (result.isCancelled) {
          __DEV__ && console.log("Login cancelled")
        } else {
          __DEV__ &&
            console.log("Login success with permissions: " + result.grantedPermissions.toString())
          try {
            const result = await AccessToken.getCurrentAccessToken()
            const credential = firebase.auth.FacebookAuthProvider.credential(result.accessToken)
            const { user } = await auth.signInWithCredential(credential)
            if (user) {
              //save data to mobx
              authStore.saveAuth(result.accessToken)
              userStore.saveUser(user)
            }
          } catch (error) {
            __DEV__ && console.log(error)
          }
        }
      },
      function (error) {
        __DEV__ && console.log("Login fail with error: " + error)
      },
    )
  }

  const handleSignInWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        offlineAccess: true,
        webClientId: "229533239030-ssvvci9tu407maul3vreonjfcg8888cr.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      })

      await GoogleSignin.hasPlayServices()
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken)
      // Sign-in the user with the credential
      const { user } = await auth.signInWithCredential(googleCredential)
      if (user) {
        //save data to mobx
        authStore.saveAuth(idToken)
        userStore.saveUser(user)
      }
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  async function handleSignInWithApple(): SignInReturnType {
    try {
      const { fullName } = await AppleAuth.performRequest({
        requestedOperation: AppleAuth.Operation.LOGIN,
        requestedScopes: [AppleAuth.Scope.EMAIL, AppleAuth.Scope.FULL_NAME],
      })
      let displayName = [fullName?.givenName, fullName?.familyName].filter(Boolean).join(" ")
      __DEV__ && console.log(displayName)
      return SignInResult.Success
    } catch (error) {
      if ((error as ErrorWithCode).code === AppleAuth.Error.CANCELED) {
        return SignInResult.Cancel
      }
      throw error
    }
  }

  return (
    <BackgroundScreen>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={styles.body}>
            {Platform.OS === "ios" && (
              <Button
                title="continueAppleId"
                icon={AppleIcon}
                onPress={handleSignInWithApple}
                disabled={false}
                outlined={false}
                style={styles.buttonApple}
              />
            )}
            <Button
              title="continueGoogle"
              icon={GoogleIcon}
              onPress={handleSignInWithGoogle}
              disabled={false}
              outlined={false}
              style={styles.buttonGoogle}
            />
            <Button
              title="continueTwitter"
              icon={TwitterIcon}
              onPress={handleSignInWithTwitter}
              disabled={false}
              outlined={false}
              style={styles.buttonTwitter}
            />
            <Button
              title="continueFacebook"
              icon={FacebookIcon}
              onPress={handleSignInWithFacebook}
              disabled={false}
              outlined={false}
              style={styles.buttonFacebook}
            />
          </View>
        </View>
      </SafeAreaView>
    </BackgroundScreen>
  )
}

export default LoginRegister

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen, LoginRegister } from "@screens/auth"
import { StackNavigationProp } from "@react-navigation/stack"

type NavigatorParamList = {
  welcome: undefined
  login: undefined
}
export type authScreenProp = StackNavigationProp<NavigatorParamList>

const Stack = createNativeStackNavigator<NavigatorParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcome"
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginRegister} />
    </Stack.Navigator>
  )
}

export default AuthStack

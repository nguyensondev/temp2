import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackNavigationProp } from "@react-navigation/stack"

import { AccountScreen } from "@screens/main"
import HomeTabs from "./tabnavigator"

type NavigatorParamList = {
  home: undefined
  account: undefined
}

export type mainScreenProp = StackNavigationProp<NavigatorParamList>

const Stack = createNativeStackNavigator<NavigatorParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={HomeTabs}
      />
      <Stack.Screen name="account" component={AccountScreen} />
    </Stack.Navigator>
  )
}

export default MainStack

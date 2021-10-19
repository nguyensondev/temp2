import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import TabIcon from "@components/icon/tabIcon"
import HomeTab from "@components/icon/HomeTab"
import ChatTab from "@components/icon/ChatTab"
import SearchTab from "@components/icon/SearchTab"
import { ProfileTabIcon } from "@assets/images"
import colors from "@theme/color"
import { ComingSoon, ProfileScreen, HomeScreen } from "@screens/index"
const Tab = createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeTab color={focused ? colors.primary.yellow : colors.primary.white} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <ChatTab color={focused ? colors.primary.yellow : colors.primary.white} />
          ),
        }}
        name="Home1"
        component={ComingSoon}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchTab color={focused ? colors.primary.yellow : colors.primary.white} />
          ),
        }}
        name="Home2"
        component={ComingSoon}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon={ProfileTabIcon.imageSource} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

export default HomeTabs

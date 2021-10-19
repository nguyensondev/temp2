import React, { FC } from "react"
import { View, Image, ImageSourcePropType } from "react-native"
import { useStores } from "@models/root-store"
import colors from "@theme/color"

import styles from "./styles"

interface TabIconProps {
  icon: ImageSourcePropType
  isFocused: boolean
}

const TabIcon: FC<TabIconProps> = ({ icon, isFocused }) => {
  const { userStore } = useStores()

  return (
    <View>
      <Image
        style={[
          styles.viewIcon,
          { borderColor: isFocused ? colors.primary.yellow : colors.primary.white },
        ]}
        source={
          userStore &&
          userStore.user &&
          userStore.user.photoURL &&
          userStore.user.photoURL.length > 0
            ? { uri: userStore.user.photoURL }
            : icon
        }
      ></Image>
    </View>
  )
}

export default TabIcon
export type { TabIconProps }

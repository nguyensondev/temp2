import React, { FC } from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { BlurView } from "@react-native-community/blur"

import Text from "@components/text/index"
import LockedIcon from "@components/icon/Locked"

import styles from "./styles"

interface ViewProps {
  style?: StyleProp<ViewStyle>
}

const LockedArea: FC<ViewProps> = ({ style }) => {
  return (
    <TouchableOpacity disabled style={[styles.container, style]}>
      <View style={{}}>
        <Text>
          {
            "Lists are one of the common scrollable components to display similar types of data objects. A list is like an enhanced version of a ScrollView component to display data. React Native provides a FlatList component to create a list"
          }
        </Text>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.viewAbsolute}>
          <LockedIcon />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LockedArea

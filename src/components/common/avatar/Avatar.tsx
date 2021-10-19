import React, { FC } from "react"
import { View, ViewStyle, StyleProp, Image } from "react-native"
import styles from "./styles"

interface ViewProps {
  style?: StyleProp<ViewStyle>
  url: string
  size?: number
}

const Avatar: FC<ViewProps> = ({ style, url, size = 48 }) => {
  return (
    <View style={style}>
      {url && <Image style={styles(size).imgStyles} source={{ uri: url }} />}
    </View>
  )
}

export default Avatar

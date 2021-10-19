import React, { FC } from "react"
import { Image, ViewStyle, View } from "react-native"
import { PorcelainTattooImage1, PorcelainTattooImage2 } from "@assets/images"

import styles from "./styles"

interface IProps {
  children: React.ReactNode
  customStyle?: ViewStyle
}

const BackgroundScreen: FC<IProps> = ({ children, customStyle }) => {
  return (
    <View style={[styles.container, customStyle]}>
      <Image source={PorcelainTattooImage1.imageSource} style={styles.tattoo1} />
      <Image source={PorcelainTattooImage2.imageSource} style={styles.tattoo2} />
      {children}
    </View>
  )
}

export default BackgroundScreen

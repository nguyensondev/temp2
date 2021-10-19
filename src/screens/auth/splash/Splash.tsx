import React from "react"
import { View, Text, ImageBackground } from "react-native"

import { ImgSplash } from "@assets/images"

import styles from "./styles"

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImgSplash.imageSource} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Op3n</Text>
      </ImageBackground>
    </View>
  )
}

export default SplashScreen

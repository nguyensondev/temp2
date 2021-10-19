import React from "react"
import { View, Text, ImageBackground } from "react-native"
import { ImgSplash } from "@assets/images"
import styles from "./styles"

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImgSplash.imageSource} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Coming Soon</Text>
      </ImageBackground>
    </View>
  )
}

export default ComingSoon

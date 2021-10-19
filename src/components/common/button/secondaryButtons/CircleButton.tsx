import React, { FC, ElementType, useMemo } from "react"
import { View, ViewStyle, StyleProp, TouchableHighlight } from "react-native"
import colors from "@theme/color"
import styles from "./styles"

interface ButtonProps {
  onPress?: () => void
  children: React.ReactNode
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  buttonSize?: number
  btnColor?: string
}

const CircleButton: FC<ButtonProps> = ({
  children,
  onPress,
  disabled = false,
  style,
  buttonSize = 40,
  btnColor = colors.primary.blue,
}) => {
  return (
    <TouchableHighlight
      style={styles(buttonSize).touchableStyles}
      disabled={disabled}
      activeOpacity={0.8}
      underlayColor="black"
      onPress={onPress}
    >
      <View style={[styles(buttonSize).buttonStyles, { backgroundColor: btnColor }, style]}>
        {children}
      </View>
    </TouchableHighlight>
  )
}

export default CircleButton

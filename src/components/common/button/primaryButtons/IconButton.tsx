import React, { FC, ElementType, useMemo } from "react"
import { View, ViewStyle, StyleProp, TouchableHighlight } from "react-native"

import colors from "@theme/color"

import styles from "./styles"

interface ButtonProps {
  onPress: () => void
  children: React.ReactNode
  disabled?: boolean
  showBorder?: boolean
  style?: StyleProp<ViewStyle>
  topPosition?: boolean
  buttonSize?: number
}

const OFFSET = 10

const IconButton: FC<ButtonProps> = ({
  onPress,
  children,
  disabled = false,
  showBorder = false,
  style,
  topPosition = true,
  buttonSize = 56,
}) => {
  const index = -(buttonSize / OFFSET)

  const bgDisable = disabled && showBorder

  const top = {
    left: index,
    top: index,
  }

  const bottom = {
    right: index,
    bottom: index,
  }

  const backgroundDisable = {
    backgroundColor: colors.alpha.white80,
  }

  return (
    <TouchableHighlight
      style={[styles(buttonSize).touchableStyles, style]}
      disabled={disabled}
      onPress={onPress}
    >
      <View>
        <View style={[styles(buttonSize).buttonStyles, bgDisable && backgroundDisable]}>
          {children}
        </View>
        {!bgDisable && (
          <View style={[styles(buttonSize).buttonBorderStyles, topPosition ? top : bottom]} />
        )}
      </View>
    </TouchableHighlight>
  )
}

export default IconButton

import React, { FC, ElementType } from "react"
import { View, ViewStyle, StyleProp, TextStyle, TouchableHighlight } from "react-native"
import { isElement } from "react-is"
import Text from "@components/text/text"
import styles from "./styles"
import { TxKeyPath } from "@i18n/index"

interface ButtonProps {
  content: TxKeyPath
  onPress: () => void
  icon?: ElementType
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
}

const RoundedButton: FC<ButtonProps> = ({
  content,
  onPress,
  icon: Icon,
  disabled = false,
  labelStyle,
  style,
}) => {
  return (
    <TouchableHighlight
      style={[styles.touchableStyles, style]}
      disabled={disabled}
      activeOpacity={0.8}
      underlayColor="black"
      onPress={onPress}
    >
      <View style={styles.buttonStyles}>
        {Icon && <View style={styles.icon}>{isElement(Icon) ? Icon : <Icon />}</View>}
        <Text tx={content} style={[styles.labelStyles, labelStyle]} />
      </View>
    </TouchableHighlight>
  )
}

export default RoundedButton

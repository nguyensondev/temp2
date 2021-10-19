import React, { FC, ElementType, useMemo } from "react"
import {
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from "react-native"
import { isElement } from "react-is"
import Text from "@components/text/index"
import styles, { SmallButtonStyles, DefaultButtonStyles } from "./styles"
import { TxKeyPath } from "@i18n/index"

const windowWidth = Dimensions.get("window").width
const buttonWidth = windowWidth * 0.893
type ButtonSize = "small" | "default"

interface ButtonProps {
  title: TxKeyPath
  onPress: () => void
  icon?: ElementType
  size?: ButtonSize
  disabled?: boolean
  outlined?: boolean
  style?: StyleProp<ViewStyle>
}

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  icon: Icon,
  disabled: isDisabled = false,
  outlined: isOutlined = true,
  size,
  style,
}) => {
  const sizeStyles = useMemo(() => (size === "small" ? SmallButtonStyles : DefaultButtonStyles), [
    size,
  ])

  const touchableStyles = useMemo<StyleProp<ViewStyle>>(
    () => [
      styles.outline,
      sizeStyles.outlined,
      isOutlined && !isDisabled && styles.outlined,
      isOutlined && isDisabled && styles.outlinedDisabled,
      { width: buttonWidth, marginBottom: 10 },
    ],
    [sizeStyles, isOutlined, isDisabled],
  )

  const buttonStyles = useMemo<StyleProp<ViewStyle & Pick<TextStyle, "color">>>(
    () => [styles.button, sizeStyles.button, style],
    [sizeStyles, style],
  )

  const labelStyles = useMemo<StyleProp<TextStyle>>(() => {
    const { color } = StyleSheet.flatten(buttonStyles)

    return [styles.label, sizeStyles.label, { color, fontWeight: "bold" }]
  }, [sizeStyles, buttonStyles])

  return (
    <TouchableHighlight
      style={touchableStyles}
      disabled={isDisabled}
      activeOpacity={0.8}
      underlayColor="black"
      onPress={onPress}
    >
      <View style={buttonStyles}>
        {Icon && <View style={styles.icon}>{isElement(Icon) ? Icon : <Icon />}</View>}
        <Text tx={title} style={labelStyles} />
        {isDisabled && <View style={styles.disabledOverlay} />}
      </View>
    </TouchableHighlight>
  )
}

export default Button
export type { ButtonProps }

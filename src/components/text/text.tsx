import * as React from "react"
import { Text as ReactNativeText } from "react-native"
import { presets } from "./text.presets"
import { TextProps } from "./text.props"
import { translate } from "@i18n/index"
import { FC } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "@models/root-store"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
const Text: FC<TextProps> = (props: TextProps) => {
  // grab the props
  const { settingStore } = useStores()
  const { preset = "default", tx, txOptions, text, children, style: styleOverride, ...rest } = props

  // figure out which content to use
  const i18nText = tx && translate(tx, { locale: settingStore.Setting.currentLocale })
  const content = i18nText || text || children

  const style = presets[preset] || presets.default
  const styles = [style, styleOverride]

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  )
}

export default observer(Text)

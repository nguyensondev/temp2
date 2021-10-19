import i18n from "i18n-js"
import { TxKeyPath } from "./i18n"
import { useObserver } from "mobx-react-lite"
import { useStores } from "../models"
/**
 * Translates text.
 *
 * @param key The i18n key.
 */

// export function translate(key: TxKeyPath, options?: i18n.TranslateOptions) {
//   const { settingStore } = useStores()
//   return useObserver(() => {
//     return key ? i18n.t(key, { locale: settingStore.Setting.currentLocale }) : null
//   })
// }

export function translate(key: TxKeyPath, options?: i18n.TranslateOptions) {
  return key ? i18n.t(key, options) : null
}

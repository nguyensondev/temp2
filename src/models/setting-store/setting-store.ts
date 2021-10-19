import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { SettingModel } from "../setting/setting"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty Settings
 */
export const SettingStoreModel = types
  .model("SettingStore")
  .props({
    Setting: types.optional(SettingModel, { currentLocale: "en" }),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    changeLocale: (locale: string) => {
      self.Setting.currentLocale = locale
    },
  }))

type SettingStoreType = Instance<typeof SettingStoreModel>
export interface SettingStore extends SettingStoreType {}
type SettingStoreSnapshotType = SnapshotOut<typeof SettingStoreModel>
export interface SettingStoreSnapshot extends SettingStoreSnapshotType {}
export const createSettingStoreDefaultModel = () => types.optional(SettingStoreModel, {})

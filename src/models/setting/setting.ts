import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Setting model.
 */

export const SettingModel = types.model("Setting").props({
  currentLocale: types.maybe(types.string),
})

type SettingType = Instance<typeof SettingModel>
export interface Setting extends SettingType {}
type SettingSnapshotType = SnapshotOut<typeof SettingModel>
export interface SettingSnapshot extends SettingSnapshotType {}

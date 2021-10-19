import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"
import { UserStoreModel } from "../user-store/user-store"
import { AuthStoreModel } from "../auth-store/auth-store"
import { SettingStoreModel } from "../setting-store/setting-store"
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  userStore: types.optional(UserStoreModel, {} as any),
  authStore: types.optional(AuthStoreModel, {} as any),
  settingStore: types.optional(SettingStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

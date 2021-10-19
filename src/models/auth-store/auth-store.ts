import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthModel, AuthSnapshot } from "../auth/auth"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty Auths
 */
export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    Auth: types.optional(AuthModel, {}),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveAuth: (token: string) => {
      self.Auth.accessToken = token
    },
  }))
  .actions((self) => ({
    resetAuth: () => {
      self.Auth.accessToken = ""
    },
  }))

type AuthStoreType = Instance<typeof AuthStoreModel>
export interface AuthStore extends AuthStoreType {}
type AuthStoreSnapshotType = SnapshotOut<typeof AuthStoreModel>
export interface AuthStoreSnapshot extends AuthStoreSnapshotType {}
export const createAuthStoreDefaultModel = () => types.optional(AuthStoreModel, {})

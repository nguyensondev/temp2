import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserModel } from "../user/user"
import { CharacterApi } from "@services/api/character-api"
import { withEnvironment } from "../extensions/with-environment"
import { FirebaseAuthTypes } from "@react-native-firebase/auth"

/**
 * Example store containing Rick and Morty characters
 */
export const UserStoreModel = types
  .model("UserStore")
  .props({
    user: types.optional(UserModel, {}),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveUser: (userSnapshots: FirebaseAuthTypes.User) => {
      console.log(userSnapshots.displayName)
      self.user.displayName = userSnapshots.displayName
      self.user.photoURLThumbnail = userSnapshots.photoURL
      self.user.photoURL = userSnapshots.photoURL
      self.user.id = userSnapshots.uid
      console.log(self.user.id)
    },
  }))
  .actions((self) => ({
    getUser: async () => {
      const characterApi = new CharacterApi(self.environment.api)
      const result = await characterApi.getCharacters()

      if (result.kind === "ok") {
        //self.saveUser(new UserStoreModel)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))
  .actions((self) => ({
    resetUser: () => {
      self.user.displayName = ""
      self.user.photoURL = ""
      self.user.isVerified = undefined
      self.user.photoURLThumbnail = ""
      self.user.id = ""
    },
  }))

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})

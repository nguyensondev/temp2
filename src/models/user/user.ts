import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * User model.
 */
export enum UserState {
  AWAITING = 0,
  COMPLETED = 1,
}

export enum LivestreamState {
  UNAVAILABLE = "unavailable",
  LIVE = "live",
  SCHEDULE = "schedule",
}

export interface AuthUser {
  id: string
  email?: string
  displayName?: string
  isAdmin?: boolean
}

export const UserModel = types.model("User").props({
  id: types.maybe(types.string),
  displayName: types.maybe(types.string),
  status: types.maybe(types.string),
  image: types.maybe(types.string),
  photoURL: types.maybe(types.string),
  photoURLThumbnail: types.maybe(types.string),
  backgroundURL: types.maybe(types.string),
  username: types.maybe(types.string),
  about: types.maybe(types.string),
  referral: types.maybe(types.string),
  referrer: types.maybe(types.string),
  state: types.optional(types.model(UserState), {}),
  livestreamState: types.optional(types.model(LivestreamState), {}),
  objectID: types.maybe(types.string),
  followingsCount: types.maybe(types.number),
  followersCount: types.maybe(types.number),
  isVerified: types.maybe(types.boolean),
})

type UserType = Instance<typeof UserModel>
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () => types.optional(UserModel, {})

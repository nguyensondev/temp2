import React, { FC, useCallback } from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"

import Text from "@components/text/index"
import Avatar from "@components/common/avatar/Avatar"
import colors from "@theme/color"
import IconButton from "@components/common/button/primaryButtons/IconButton"
import PlusIcon from "@components/icon/Plus"
import { useStores } from "@models/root-store"

import styles from "./styles"
interface ViewProps {
  onPress?: () => void
  url?: string
  style?: StyleProp<ViewStyle>
  userName?: string
}

const BUTTON_SIZE = 24
const INDEX_POSTION = BUTTON_SIZE / 2

const AvatarProfile: FC<ViewProps> = ({
  style,
  onPress,
  userName,
  url,
  //url = "https://i.picsum.photos/id/590/200/200.jpg?hmac=Z5g54UWkuML96A-q7x7wX6LDuVGFdHQrEYEsU2CIM1U",
}) => {
  const { userStore } = useStores()

  const memoizedCallback = useCallback(() => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Avatar url={userStore.user.photoURL} />
          <View style={styles(INDEX_POSTION).content}>
            <IconButton
              buttonSize={BUTTON_SIZE}
              topPosition={false}
              disabled={true}
              showBorder={false}
              onPress={() => {}}
            >
              <PlusIcon color={colors.primary.blue} />
            </IconButton>
          </View>
        </View>
        <Text style={styles(INDEX_POSTION).lblName}>{userStore.user.displayName}</Text>
      </View>
    )
  }, [userStore.user])

  return (
    <TouchableOpacity onPress={onPress} style={[styles(INDEX_POSTION).container, style]}>
      {memoizedCallback()}
    </TouchableOpacity>
  )
}

export default AvatarProfile

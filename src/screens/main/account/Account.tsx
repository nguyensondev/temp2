import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, TouchableOpacity, SafeAreaView, Alert } from "react-native"
import I18n from "i18n-js"
import { observer } from "mobx-react-lite"
import { useStores } from "@models/root-store"

import { mainScreenProp } from "@navigators/main"
import Text from "@components/text/text"

import AccountItem from "./AccountItem"

import styles from "./styles"
import globalStyle from "@theme/global-style"

const AccountScreen = observer(() => {
  const { settingStore, authStore } = useStores()
  const navigation = useNavigation<mainScreenProp>()

  const showAlert = () =>
    Alert.alert(
      "",
      I18n.t("confirmLogout", { locale: settingStore.Setting.currentLocale }),
      [
        {
          text: I18n.t("common.ok", { locale: settingStore.Setting.currentLocale }),
          onPress: () => {
            logOut()
          },
          style: "default",
        },
        {
          text: I18n.t("common.cancel", { locale: settingStore.Setting.currentLocale }),
          onPress: () => {},
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      },
    )

  const logOut = () => {
    try {
      authStore.resetAuth()
    } catch (error) {
      __DEV__ && console.log(error)
    }
  }

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={goBack}>
        <Text tx={"common.accountSettings"} style={styles.lblUser} />
      </TouchableOpacity>
      <View style={styles.content}>
        <AccountItem />
      </View>
      <TouchableOpacity
        style={styles.btnTerm}
        hitSlop={globalStyle.btnAreaClick}
        onPress={() => {}}
      >
        <Text>
          <Text tx={"common.privacyPolicy"} style={styles.lblPolicyTerm} />
          <Text tx={"common.and"} style={styles.lblAnd} />
          <Text tx={"common.termsService"} style={styles.lblPolicyTerm} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        hitSlop={globalStyle.btnAreaClick}
        onPress={showAlert}
      >
        <Text tx={"common.logout"} style={styles.btnLogOut} />
      </TouchableOpacity>
    </SafeAreaView>
  )
})

export default AccountScreen

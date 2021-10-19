import React, { useState } from "react"
import { View, TouchableOpacity, Switch } from "react-native"

import HistoryIcon from "@components/icon/History"
import WalletIcon from "@components/icon/Wallet"
import ForwardArrowIcon from "@components/icon/ForwardArrow"
import ProfileIcon from "@components/icon/Profile"
import LanguageIcon from "@components/icon/Language"
import PictureIcon from "@components/icon/Picture"
import TermIcon from "@components/icon/Term"
import Text from "@components/text/text"
import { useStores } from "@models/root-store"

import styles from "./styles"

const AccountItem = (props) => {
  const { settingStore } = useStores()
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  const switchLang = () => {
    if (settingStore.Setting.currentLocale === "vi") settingStore.changeLocale("en")
    else settingStore.changeLocale("vi")
  }

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: "gray",
        height: 1,
      }}
    />
  )

  return (
    <View style={styles.itemTransparent}>
      <TouchableOpacity style={styles.btnItem}>
        <View style={styles.viewHistory}>
          <HistoryIcon color="white" />
        </View>
        <View style={styles.flex3}>
          <Text tx={"common.viewTransHistory"} style={styles.lblDes} />
        </View>
        <View style={styles.flex1} />
      </TouchableOpacity>
      {renderSeparator()}
      <TouchableOpacity style={styles.btnSetting}>
        <View style={styles.flex1Center}>
          <WalletIcon color="white" />
        </View>
        <View style={styles.flex3}>
          <Text tx={"common.editWallet"} style={styles.lblDes} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
          <ForwardArrowIcon color="white" />
        </View>
      </TouchableOpacity>
      {renderSeparator()}
      <TouchableOpacity style={styles.btnSetting}>
        <View style={styles.flex1Center}>
          <ProfileIcon color="white" />
        </View>
        <View style={styles.flex3}>
          <Text tx={"common.profile"} style={styles.lblDes} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
          <ForwardArrowIcon color="white" />
        </View>
      </TouchableOpacity>
      {renderSeparator()}
      <TouchableOpacity style={styles.btnSetting} onPress={switchLang}>
        <View style={styles.flex1Center}>
          <LanguageIcon color="white" />
        </View>
        <View style={styles.flex3}>
          <Text tx={"common.switchAppLang"} style={styles.lblDes} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
          <ForwardArrowIcon color="white" />
        </View>
      </TouchableOpacity>
      {renderSeparator()}
      <TouchableOpacity style={styles.btnSetting}>
        <View style={styles.flex1Center}>
          <PictureIcon color="white" />
        </View>
        <View style={styles.flex3}>
          <Text tx={"common.pictureInPicture"} style={styles.lblDes} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </TouchableOpacity>
      {renderSeparator()}
      <TouchableOpacity style={styles.btnSetting}>
        <View style={styles.flex1Center}>
          <TermIcon color="white" />
        </View>
        <View style={styles.flex3}>
          <Text tx={"common.viewTerms&Conditions"} style={styles.lblDes} />
        </View>
        <View style={styles.flex1} />
      </TouchableOpacity>
      {renderSeparator()}
    </View>
  )
}

export default AccountItem

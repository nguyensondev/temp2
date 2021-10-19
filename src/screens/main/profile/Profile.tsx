import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import Svg, { Text as SText } from "react-native-svg"
import { mainScreenProp } from "@navigators/main"

import { SettingsIcon } from "@assets/images"
import Avatar from "@components/common/avatar/Avatar"
import ViewMoreText from "@components/more-text"
import { useStores } from "@models/root-store"
import Text from "@components/text/text"
import colors from "@theme/color"

import ProjectItem from "./ProjectItem"

import styles from "./styles"
import globalStyle from "@theme/global-style"

const ProfileScreen = () => {
  const { userStore } = useStores()
  const [tabIndex, setTabIndex] = useState(0)
  const navigation = useNavigation<mainScreenProp>()

  const renderViewMore = (onPress) => {
    return <Text tx={"common.more"} style={styles.btnMoreLess} onPress={onPress} />
  }
  const renderViewLess = (onPress) => {
    return <Text tx={"common.less"} style={styles.btnMoreLess} onPress={onPress} />
  }

  const loadSupProject = () => {
    if (tabIndex !== 0) setTabIndex(0)
  }

  const loadProject = () => {
    if (tabIndex !== 1) setTabIndex(1)
  }

  const loadCollection = () => {
    if (tabIndex !== 2) setTabIndex(2)
  }

  const MOCKDATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ]

  const renderItem = ({ item }) => <ProjectItem />

  const renderSeparator = () => <View style={styles.separator} />

  const gotoAccount = () => {
    navigation.navigate("account")
  }

  return (
    <SafeAreaView style={styles.container}>
      {/*  Account Setting button */}
      <View hitSlop={globalStyle.btnAreaClick} style={styles.btnGoToAccount}>
        <TouchableOpacity onPress={gotoAccount} hitSlop={globalStyle.btnAreaClick}>
          <Image source={SettingsIcon.imageSource} />
        </TouchableOpacity>
      </View>
      {/*  Account name */}
      <View style={styles.viewName}>
        <Text style={styles.lblSupUserName}>{"@"}</Text>
        <Svg>
          <SText
            fill="black"
            strokeWidth={1.5}
            stroke="white"
            fontSize="20"
            fontWeight="1000"
            y="20"
          >
            {userStore.user.displayName}
          </SText>
        </Svg>
      </View>
      {/* Avatar && Followers */}
      <View style={styles.viewAvatar}>
        <View style={styles.contentAvatar}>
          <Avatar size={72} url={userStore.user.photoURL} />
        </View>
        <View style={styles.viewFollowers}>
          <Text style={styles.lblNumFollow}>{"324"}</Text>
          <Text tx={"common.followers"} style={styles.lblFollow} />
        </View>
        <View style={styles.viewFollowing}>
          <Text style={styles.lblNumFollow}>{"324"}</Text>
          <Text tx={"common.following"} style={styles.lblFollow} />
        </View>
      </View>
      {/* Display Name && Description */}
      <View style={styles.viewDisplayName}>
        <Text style={styles.lblUser}>{userStore.user.displayName}</Text>
        <Text style={styles.lblJob}>{"Music Lover"}</Text>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={{ textAlign: "left" }}
        >
          <Text style={styles.lblDes}>
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu.
            Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea
            ipsum antiopam definitionem eos.
          </Text>
        </ViewMoreText>
      </View>
      {/* Projects Tab */}
      <View style={styles.viewProject}>
        <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={loadSupProject}>
          <Text
            tx={"supportingProjects"}
            style={[styles.lblUser, tabIndex === 0 ? { color: colors.white } : { color: "gray" }]}
          />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={loadProject}>
          <Text
            tx={"common.projects"}
            style={[styles.lblUser, tabIndex === 1 ? { color: colors.white } : { color: "gray" }]}
          />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={loadCollection}>
          <Text
            tx={"common.collection"}
            style={[styles.lblUser, tabIndex === 2 ? { color: colors.white } : { color: "gray" }]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={MOCKDATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

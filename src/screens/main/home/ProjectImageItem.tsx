import React, { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react"
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"

import Text from "@components/text/text"
import UpVoteReply from "@components/complex/UpVoteReply"
import AvatarProfile from "@components/complex/AvatarProfile/AvatarProfile"
import RoundedButton from "@components/common/button/roundedButtons/RoundedButton"
import color from "@theme/color"
import { useStores } from "@models/root-store"
import { PlayerPauseIcon } from "@assets/images"
import CloseIcon from "@components/icon/Close"
import DiscussGroup from "@components/complex/DiscussGroup"
import LockedArea from "@components/complex/LockedArea"

import styles from "./styles"
import globalStyle, { basicStyles } from "@theme/global-style"

const SCREEN_HEIGHT = Dimensions.get("window").height
const width = Dimensions.get("window").width
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 45 : StatusBar.currentHeight

export interface RefItemProjectObject {
  resetVideo: () => void
  tooglePlay: (i: number, uri: string) => void
}

const ProjectImageItem = forwardRef(
  (props: { item; onPress; url: string }, ref: Ref<RefItemProjectObject>) => {
    const [expanded, setExpanded] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)

    const { userStore } = useStores()
    const opacity = useRef(new Animated.Value(1)).current
    const HEIGHTBAR =
      SCREEN_HEIGHT -
      useBottomTabBarHeight() +
      (Platform.OS == "android" ? STATUSBAR_HEIGHT : -STATUSBAR_HEIGHT)
    const BOTTOM_SPACE = Platform.OS === "android" ? 10 : useBottomTabBarHeight()

    const tooglePlay = (i: number, uri: string) => {
      try {
        opacity.setValue(0)
      } catch (error) {}
    }

    const changeLayout = () => {
      setImmediate(() => LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut))
      setExpanded(!expanded)
    }

    const onPressItem = () => {
      setModalVisible(!isModalVisible)
    }

    const resetVideo = () => {}

    useImperativeHandle(ref, () => ({ tooglePlay, resetVideo }))

    return (
      <TouchableOpacity onPress={onPressItem} style={styles().itemContainer}>
        <Image
          resizeMode={"stretch"}
          style={[styles(HEIGHTBAR).viewPoster, { width }]}
          source={{ uri: props.item.poster }}
        />
        {isModalVisible && <View style={[styles(HEIGHTBAR).viewBlur, { width }]} />}
        {isModalVisible && (
          <View style={styles(SCREEN_HEIGHT / 4).viewPaused}>
            {!expanded && (
              <TouchableOpacity onPress={onPressItem}>
                <Image source={PlayerPauseIcon.imageSource} />
              </TouchableOpacity>
            )}
          </View>
        )}
        {(!expanded || !isModalVisible) && <AvatarProfile style={styles().avatarProfile} />}
        {!isModalVisible && <UpVoteReply isVetical={true} style={styles().upVoteReplay} />}
        {/* view expanded */}
        {isModalVisible && (
          <View style={styles(expanded ? SCREEN_HEIGHT : null).viewExpanded}>
            {expanded ? (
              <View style={styles().viewTop}>
                <View style={styles().viewAvatar}>
                  <AvatarProfile />
                </View>
                <View style={styles().viewRight}>
                  <View>
                    <UpVoteReply numVote={"300"} numReply={"400"} isVetical={false} />
                  </View>
                  <View>
                    <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={changeLayout}>
                      <CloseIcon color={color.primary.white} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles().viewCollapsed}>
                <UpVoteReply numVote={"400"} isVetical={false} />
                <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={changeLayout}>
                  <Text
                    tx={"common.viewMore"}
                    style={[globalStyle.lblYellow_14_600, { textDecorationLine: "underline" }]}
                  />
                </TouchableOpacity>
              </View>
            )}

            <View>
              <Text style={[globalStyle.lblWhite_28_700, { marginTop: 10 }]}>
                {props.item && props.item.title ? props.item.title : "Title Test"}
              </Text>
              <Text style={globalStyle.lblWhite_11_400}>{"Distributed by 24 Aug 2021"}</Text>
            </View>

            <View style={styles().viewContentCollapsed}>
              <View style={basicStyles.flex1}>
                <Image style={styles().imgAvatar} source={{ uri: userStore.user.photoURL }} />
              </View>
              <View style={[basicStyles.flex2, { flexDirection: "row" }]}>
                <View style={basicStyles.flex2}>
                  <Text tx={"tracklist"} style={globalStyle.lblWhite_12_600} />
                  <Text style={globalStyle.lblWhite_11_400}>{"1. Sky Green"}</Text>
                  <Text style={globalStyle.lblWhite_11_400}>{"1. Sky Green"}</Text>
                  <Text style={globalStyle.lblWhite_11_400}>{"1. Sky Green"}</Text>
                  <Text style={globalStyle.lblWhite_11_400}>{"1. Sky Green"}</Text>
                </View>
                <View style={basicStyles.flex1o5}>
                  <Text />
                  <Text style={globalStyle.lblWhite_11_400}>{"1. Sky Green"}</Text>
                  <Text style={globalStyle.lblWhite_11_400}>{"1. Sky Green"}</Text>
                </View>
              </View>
            </View>

            {expanded && (
              <View>
                <View style={styles().viewDescription}>
                  <Text tx={"common.description"} style={globalStyle.lblWhite_14_700} />
                  <Text style={globalStyle.lblWhite_13_400}>
                    {props.item && props.item.description
                      ? props.item.description
                      : "Lists are one of the common scrollable components to display similar types of data objects. A list is like an enhanced version of a ScrollView component to display data. React Native provides a FlatList component to create a list"}
                  </Text>
                </View>
                <View>
                  <DiscussGroup style={styles().viewDisccuss} grMember={[]} grName="Group Name" />
                </View>
                <View style={styles().viewDisccuss}>
                  <LockedArea />
                </View>
              </View>
            )}
            {/* button NFT */}
            <View style={styles(BOTTOM_SPACE).viewButtonBot}>
              <RoundedButton
                labelStyle={{ color: "black" }}
                style={styles().btnButtonBot}
                content={"buyMemNFT"}
                onPress={() => {}}
              />
            </View>
          </View>
        )}
      </TouchableOpacity>
    )
  },
)

export default ProjectImageItem

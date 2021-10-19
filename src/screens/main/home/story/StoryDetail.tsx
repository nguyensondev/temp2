import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import React, { forwardRef, Ref, useImperativeHandle, useState } from "react"
import { Image, View, Button, SafeAreaView, TouchableOpacity } from "react-native"
import Modal from "react-native-modal"

import RoundedButton from "@components/common/button/roundedButtons/RoundedButton"
import UpVoteReply from "@components/complex/UpVoteReply"
import Text from "@components/text/text"
import { useStores } from "@models/root-store"

import styles from "./styles"
import globalStyle, { basicStyles } from "@theme/global-style"

export interface RefModalObject {
  toggleModal: () => void
}

const StoryDetail = forwardRef((props: {}, ref: Ref<RefModalObject>) => {
  const { userStore } = useStores()
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  useImperativeHandle(ref, () => ({ toggleModal }))

  return (
    <SafeAreaView style={basicStyles.flex1}>
      <Modal isVisible={isModalVisible} animationIn={"lightSpeedIn"}>
        <View style={basicStyles.flex1}>
          <View style={globalStyle.flex1Transparent}>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
          <View style={basicStyles.flex1}>
            <View style={styles.viewUpVote}>
              <UpVoteReply numVote={"400"} isVetical={false} />
              <TouchableOpacity>
                <Text
                  tx={"common.viewMore"}
                  style={[globalStyle.lblYellow_14_600, { textDecorationLine: "underline" }]}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={globalStyle.lblWhite_28_700}>{"Esprit"}</Text>
              <Text style={globalStyle.lblWhite_11_400}>{"Distributed by 24 Aug 2021"}</Text>
            </View>
            <View style={[basicStyles.flex1, { marginTop: 30 }]}>
              <View style={basicStyles.flex1}>
                <Image style={styles.imgAvatar} source={{ uri: userStore.user.photoURL }} />
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
            <View style={[styles.viewBuyNFT, { marginBottom: useBottomTabBarHeight() }]}>
              <RoundedButton
                labelStyle={{ color: "black" }}
                style={{ alignSelf: "center", backgroundColor: "white" }}
                content={"buyMemNFT"}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
})

export default StoryDetail

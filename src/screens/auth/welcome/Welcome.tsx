import React, { FC, useState } from "react"
import { View, Image, TouchableOpacity } from "react-native"
import Carousel, { Pagination } from "react-native-snap-carousel"
import { useNavigation } from "@react-navigation/native"
import Svg, { Text as SText } from "react-native-svg"

import {
  WelcomeTopImage1,
  WelcomeBotImage2,
  WelcomeBotImage3,
  WelcomeBotImage1,
  WelcomeTopImage2,
  WelcomeTopImage3,
} from "@assets/images"
import { SCREEN_HEIGHT, SCREEN_WIDTH, WELCOME } from "@config/constants"
import color from "@theme/color"
import O3pnIcon from "@components/icon/O3pn"
import { authScreenProp } from "@navigators/auth"
import Text from "@components/text/text"

import styles from "./styles"
import globalStyle from "@theme/global-style"

const WelComeScreen: FC = (props) => {
  const [entries] = useState(WELCOME)
  const [activeSlide, setActiveSlide] = useState(0)
  const navigation = useNavigation<authScreenProp>()

  const goToLoginRegister = () => {
    navigation.navigate("login")
  }

  const activedDot = (activeIndex: number, key: number) => {
    return (
      <View key={key}>
        <View style={styles(activeIndex === key).dot}></View>
        {activeIndex === key && <View style={styles().dotActived}></View>}
      </View>
    )
  }

  const paginationView = () => {
    return (
      <View style={styles().pagitation}>
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: "transparent" }}
          renderDots={(activeIndex) => entries.map((screen, i) => activedDot(activeIndex, i))}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text tx={"common.alreadyHaveAcc"} style={styles().lblLogin} />
          <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={goToLoginRegister}>
            <Text
              tx={"common.login"}
              style={[styles().lblLogin, { textDecorationLine: "underline" }]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderItem = ({ item, index }) => {
    const sourceTop =
      index === 0
        ? WelcomeTopImage1.imageSource
        : index === 1
        ? WelcomeTopImage2.imageSource
        : WelcomeTopImage3.imageSource
    const sourceBot =
      index === 0
        ? WelcomeBotImage1.imageSource
        : index === 1
        ? WelcomeBotImage2.imageSource
        : WelcomeBotImage3.imageSource
    return (
      <View>
        <Image resizeMode={"stretch"} style={styles().bgImage} source={sourceTop} />
        <Image source={sourceBot} resizeMode={"contain"} style={styles().topImage} />
        <View style={styles().viewText}>
          <Svg style={styles().svg}>
            <SText
              x="50%"
              y="75%"
              textAnchor="middle"
              fill="black"
              strokeWidth={1}
              stroke="white"
              fontSize="32"
            >
              {item.title.primary}
            </SText>
          </Svg>
          <Text style={styles().lblTitle}>{item.title.secondary}</Text>
          <Text style={styles().lblDescriptrion}>{item.description}</Text>
        </View>
        <View style={styles().viewLogin}>
          <O3pnIcon color={color.white} />
          <TouchableOpacity hitSlop={globalStyle.btnAreaClick} onPress={goToLoginRegister}>
            <Text tx={"common.skip"} style={styles().lblDescriptrion} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles().container}>
      <Carousel
        data={entries}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        sliderHeight={SCREEN_HEIGHT}
        itemHeight={SCREEN_HEIGHT}
        layout={"default"}
      />
      {paginationView()}
    </View>
  )
}

export default WelComeScreen

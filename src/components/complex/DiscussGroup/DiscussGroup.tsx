import React, { FC } from "react"
import { StyleProp, View, ViewStyle } from "react-native"

import Text from "@components/text/index"
import FacePile from "./FacePile.js"

import styles from "./styles"

interface ViewProps {
  grMember: Array<string>
  grName: string
  style?: StyleProp<ViewStyle>
}

const DiscussGroup: FC<ViewProps> = ({ grMember = [], grName = "", style }) => {
  const FACES = [
    {
      id: 0,
      imageUrl:
        "https://i.picsum.photos/id/590/200/200.jpg?hmac=Z5g54UWkuML96A-q7x7wX6LDuVGFdHQrEYEsU2CIM1U",
    },
    {
      id: 1,
      imageUrl:
        "https://i.picsum.photos/id/590/200/200.jpg?hmac=Z5g54UWkuML96A-q7x7wX6LDuVGFdHQrEYEsU2CIM1U",
    },
    {
      id: 2,
      imageUrl:
        "https://i.picsum.photos/id/590/200/200.jpg?hmac=Z5g54UWkuML96A-q7x7wX6LDuVGFdHQrEYEsU2CIM1U",
    },
    {
      id: 3,
      imageUrl:
        "https://i.picsum.photos/id/590/200/200.jpg?hmac=Z5g54UWkuML96A-q7x7wX6LDuVGFdHQrEYEsU2CIM1U",
    },
  ]
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <View style={{ marginRight: 15 }}>
          <FacePile numFaces={3} faces={FACES} />
        </View>
        <Text style={styles.lblGrNameStyle}>{grName}</Text>
      </View>
      <Text style={styles.lblGrNumStyle}>
        <Text style={styles.lblGrNumStyle}>{"45"}</Text>
        {" members"}
      </Text>
    </View>
  )
}

export default DiscussGroup

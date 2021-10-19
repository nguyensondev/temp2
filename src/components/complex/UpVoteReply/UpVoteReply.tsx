import React, { FC } from "react"
import { StyleProp, View, ViewStyle } from "react-native"

import UpVoteIcon from "@components/icon/UpVote"
import Text from "@components/text/index"
import CircleButton from "@components/common/button/secondaryButtons/CircleButton"
import ShareIcon from "@components/icon/Share"
import colors from "@theme/color"

import styles from "./styles"

interface ViewProps {
  isVoted?: boolean
  isReplied?: boolean
  numVote?: string
  numReply?: string
  isVetical?: boolean
  style?: StyleProp<ViewStyle>
}

const UpVoteReply: FC<ViewProps> = ({
  isVoted = true,
  isReplied = true,
  numVote = "",
  numReply = "",
  isVetical = false,
  style,
}) => {
  return (
    <View style={[styles.container, { flexDirection: isVetical ? "column" : "row" }, style]}>
      {isVoted && (
        <>
          <CircleButton btnColor={colors.alpha.black40} disabled={true}>
            <UpVoteIcon color={colors.primary.yellow} />
          </CircleButton>
          <Text style={[styles.lblStyle, isVetical ? { marginTop: 4 } : { marginLeft: 4 }]}>
            {numVote}
          </Text>
          <View style={isVetical ? { marginTop: 18 } : { marginLeft: 18 }} />
        </>
      )}
      {isReplied && (
        <>
          <CircleButton btnColor={colors.alpha.black50} disabled={true}>
            <ShareIcon color={colors.primary.yellow} />
            {/* <ReplyIcon color={colors.primary.yellow} /> */}
          </CircleButton>
          <Text style={[styles.lblStyle, isVetical ? { marginTop: 4 } : { marginLeft: 4 }]}>
            {numReply}
          </Text>
        </>
      )}
    </View>
  )
}

export default UpVoteReply

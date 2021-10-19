import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface UpVoteIconProps {
  color: string
}
const UpVoteIcon: FC<UpVoteIconProps> = ({ color }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 2L6 4V22L12 15L18 22V4L16 2H8Z"
      fill={color}
    />
  </Svg>
)
export default UpVoteIcon

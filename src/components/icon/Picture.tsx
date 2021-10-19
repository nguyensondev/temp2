import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface PictureIconProps {
  color: string
}
const PictureIcon: FC<PictureIconProps> = ({ color }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 3H3L1 5V19L3 20.98H21L23 19V5L21 3ZM3 19.01H21V4.98H3V19.01Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 12V8V7H18H12H11V8V12V13H12H18H19V12ZM18 8V12H12V8H18Z"
      fill={color}
    />
  </Svg>
)
export default PictureIcon

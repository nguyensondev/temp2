import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface PlusIconProps {
  color: string
}
const PlusIcon: FC<PlusIconProps> = ({ color }) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 7V2H9V7H14V9H9V14H7V9H2V7H7Z"
      fill={color}
    />
  </Svg>
)
export default PlusIcon

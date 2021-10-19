import React, { FC } from "react"
import Svg, { Path, G } from "react-native-svg"

interface TermIconProps {
  color: string
}
const TermIcon: FC<TermIconProps> = ({ color }) => (
  <Svg width="28" height="30" viewBox="0 0 28 30" fill="none">
    <G>
      <Path
        d="M14 2C8.48 2 4 6.48 4 12C4 17.52 8.48 22 14 22C19.52 22 24 17.52 24 12C24 6.48 19.52 2 14 2ZM15 17H13V15H15V17ZM15 13H13V7H15V13Z"
        fill="white"
      />
    </G>
  </Svg>
)
export default TermIcon

import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface CameraIconProps {
  color: string
}
const CameraIcon: FC<CameraIconProps> = ({ color }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 6H22V12.3935C23.3564 12.1151 24.7315 11.3264 25.9 10.45C26.609 9.91826 27.2024 9.38443 27.6184 8.9833C27.8258 8.78328 27.9876 8.61767 28.0962 8.50372C28.1504 8.44678 28.1912 8.40285 28.2176 8.37409L28.2463 8.34264L28.2523 8.33599L28.2535 8.33601L30 9.00002V23L28.2526 23.6644L28.2463 23.6574L28.2176 23.6259C28.1912 23.5972 28.1504 23.5533 28.0962 23.4963C27.9876 23.3824 27.8258 23.2168 27.6184 23.0167C27.2024 22.6156 26.609 22.0818 25.9 21.55C24.7315 20.6736 23.3564 19.8849 22 19.6065V26H2V6ZM11 11V15H7V17H11V21H13V17H17V15H13V11H11Z"
      fill={color}
    />
  </Svg>
)
export default CameraIcon
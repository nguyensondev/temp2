import React, { FC } from "react"
import Svg, { Path, Mask, Circle, G, Rect, Defs, Pattern, Use } from "react-native-svg"

interface PlayerPauseIconProps {
  color: string
}
const PlayerPauseIcon: FC<PlayerPauseIconProps> = ({ color }) => (
  <Svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <Mask id="mask0_7665:95349" x="0" y="0" width="60" height="60">
      <Circle cx="30" cy="30" r="30" fill="white" />
    </Mask>
    <G mask="url(#mask0_7665:95349)">
      <G>
        <Mask id="mask1_7665:95349" x="-65" y="-62" width="215" height="215">
          <Rect x="-65" y="-62" width="215" height="215" fill="url(#pattern0)" />
        </Mask>
        <G mask="url(#mask1_7665:95349)">
          <Mask x="-2" y="-46" width="161" height="108" fill="url(#pattern1)" />
        </G>
      </G>
    </G>
    <G>
      <Path
        d="M39.0001 28.9891C35.7979 28.4859 32.2797 26.3982 29.4694 24.321C28.0622 23.2809 26.8674 22.27 26.0246 21.5192C25.6037 21.1442 25.2717 20.835 25.0461 20.6208C24.9333 20.5137 24.8472 20.4304 24.79 20.3746C24.7613 20.3466 24.74 20.3256 24.7261 20.3119L24.7109 20.2968L24.7076 20.2935L24.7065 20.2935L23.0195 21.1967L23.0219 21.2084L23.0297 21.2486C23.0367 21.2845 23.0471 21.3383 23.0604 21.4088C23.0871 21.5496 23.1254 21.7565 23.1715 22.0178C23.2638 22.5405 23.3869 23.2795 23.5101 24.1416C23.7576 25.8745 24 28.0702 24 30.0002C24 31.9302 23.7576 34.1259 23.5101 35.8588C23.3869 36.7209 23.2638 37.4599 23.1715 37.9827C23.1254 38.2439 23.0871 38.4508 23.0604 38.5917C23.0471 38.6621 23.0367 38.716 23.0297 38.7519L23.0219 38.792L23.0197 38.8043L24.7065 39.707L24.7076 39.7069L24.7109 39.7036L24.7261 39.6886C24.74 39.6748 24.7613 39.6538 24.79 39.6259C24.8472 39.57 24.9333 39.4868 25.0461 39.3797C25.2717 39.1655 25.6037 38.8563 26.0246 38.4813C26.8674 37.7304 28.0622 36.7195 29.4694 35.6794C32.2797 33.6022 35.7979 31.5145 39.0001 31.0114V28.9891Z"
        fill="white"
      />
    </G>
    <Defs>
      <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use transform="scale(0.000833333)" />
      </Pattern>
      <Pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use transform="translate(-0.00310559) scale(0.00164414 0.00245098)" />
      </Pattern>
    </Defs>
  </Svg>
)
export default PlayerPauseIcon

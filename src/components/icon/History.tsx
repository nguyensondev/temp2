import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface HistoryIconProps {
  color: string
}
const HistoryIcon: FC<HistoryIconProps> = ({ color }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M5.83447 18.8889L3.81378 18.8889C3.81378 16.5267 3.03402 15.2128 2.34159 14.4894C1.98445 14.1163 1.62991 13.8793 1.37164 13.738C1.24286 13.6675 1.13966 13.6217 1.07459 13.5954C1.04214 13.5822 1.01945 13.574 1.00813 13.5701L1 13.5673L1.00278 13.5682L1.00596 13.5692L1.00813 13.5701C1.00813 13.5701 1.00936 13.5702 1.01127 13.5637L1.28791 11.5L3.81378 11.5C3.81378 6.2533 7.8849 2 12.9069 2C17.9289 2 22 6.2533 22 11.5C22 16.7467 17.9289 21 12.9069 21L12.9069 18.8889C16.8129 18.8889 19.9793 15.5808 19.9793 11.5C19.9793 7.41923 16.8129 4.11111 12.9069 4.11111C9.0009 4.11111 5.83447 7.41923 5.83447 11.5L8.36033 11.5L8.63698 13.5637C8.63888 13.5702 8.63911 13.5701 8.63911 13.5701L8.64025 13.5698L8.64229 13.5692L8.64547 13.5682L8.64824 13.5673L8.64025 13.5698C8.62893 13.5737 8.60611 13.5822 8.57365 13.5954C8.50859 13.6217 8.40539 13.6675 8.27661 13.738C8.01833 13.8793 7.66379 14.1163 7.30665 14.4894C6.61422 15.2129 5.83447 16.5268 5.83447 18.8889Z"
      fill={color}
    />
    <Path
      d="M11.5 12.7269L11.5 7.55195L12.9831 7.55195L12.9831 11.9507L16.4438 14.1035L15.7319 15.3558L11.5 12.7269Z"
      fill={color}
    />
  </Svg>
)
export default HistoryIcon

import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface StreamTabProps {
  color: string
}
const StreamTab: FC<StreamTabProps> = ({ color }) => (
  <Svg width="25" height="22" viewBox="0 0 25 22" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.9995 0.846161H4.53801C2.49881 0.846161 0.845703 2.49926 0.845703 4.53847V19.3077C0.845703 19.8495 0.962395 20.364 1.17202 20.8275C1.63553 21.0372 2.15007 21.1539 2.69186 21.1539H21.1534C23.1926 21.1539 24.8457 19.5008 24.8457 17.4615V2.69231C24.8457 2.15053 24.729 1.63599 24.5194 1.17247C24.0559 0.962853 23.5413 0.846161 22.9995 0.846161ZM11.9995 10V5.00001H13.9995V10H18.9995V12H13.9995V17H11.9995V12H6.99955V10H11.9995Z"
      fill={color}
    />
  </Svg>
)
export default StreamTab

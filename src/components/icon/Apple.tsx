import React, { FC } from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Apple: FC<SvgProps> = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#ffffff" {...props}>
    <Path d="M21.188 18.082c-.171.42-.362.815-.572 1.187-.21.372-.439.73-.687 1.073-.324.458-.62.85-.887 1.173a7.509 7.509 0 01-.715.773 3.435 3.435 0 01-.987.658 2.68 2.68 0 01-1.073.229c-.267 0-.558-.038-.872-.115a7.776 7.776 0 01-1.045-.343 5.374 5.374 0 00-1.058-.329 5.104 5.104 0 00-.973-.1c-.343 0-.687.033-1.03.1a6.048 6.048 0 00-1.087.329 10.37 10.37 0 01-1.03.358 3.012 3.012 0 01-.801.128 2.29 2.29 0 01-1.045-.2 4.04 4.04 0 01-1.073-.715 13.85 13.85 0 01-1.66-2.031 11.394 11.394 0 01-.986-1.631 19.056 19.056 0 01-.816-1.889 14.243 14.243 0 01-.557-2.145 11.897 11.897 0 01-.186-2.06c0-.783.085-1.507.257-2.175.172-.667.43-1.287.773-1.86.267-.438.572-.839.915-1.201a4.985 4.985 0 011.173-.916c.458-.267.92-.467 1.388-.6.467-.134.958-.21 1.473-.23.286 0 .615.043.987.13.372.085.787.214 1.245.385.439.172.806.3 1.101.387.296.086.51.128.644.128.096 0 .305-.047.63-.143.324-.095.763-.248 1.316-.457a8.2 8.2 0 011.43-.4c.439-.077.84-.096 1.202-.058.973.076 1.826.305 2.56.687.735.381 1.35.925 1.846 1.63-.877.515-1.53 1.145-1.96 1.889-.429.744-.644 1.592-.644 2.546 0 .744.139 1.421.415 2.031.277.61.673 1.164 1.188 1.66.248.229.505.429.772.6.267.172.544.325.83.458-.057.172-.12.349-.186.53a8.698 8.698 0 01-.215.529z" />
    <Path d="M16.725.486c0 .573-.11 1.13-.33 1.674a5.74 5.74 0 01-.958 1.56c-.515.59-1.073 1.048-1.673 1.373-.601.324-1.236.458-1.903.4a.886.886 0 01-.029-.214v-.215c0-.572.115-1.144.344-1.717a5.124 5.124 0 011.001-1.573c.21-.248.453-.477.73-.687.276-.21.576-.39.9-.543.344-.172.668-.3.974-.387.305-.085.61-.138.915-.157 0 .076.005.157.014.243.01.086.015.167.015.243z" />
  </Svg>
)

export default Apple
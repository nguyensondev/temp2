import React, { FC } from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Google: FC<SvgProps> = (props) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.5199 12.2729C23.5199 11.422 23.4436 10.6038 23.3018 9.81836H12V14.4602H18.4581C18.18 15.9601 17.3345 17.231 16.0636 18.082V21.0928H19.9418C22.2109 19.0038 23.5199 15.9274 23.5199 12.2729Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0009 24C15.2409 24 17.9573 22.9254 19.9427 21.0927L16.0645 18.0818C14.99 18.8018 13.6155 19.2273 12.0009 19.2273C8.87549 19.2273 6.23004 17.1164 5.28641 14.28H1.27734V17.3891C3.25188 21.3109 7.31004 24 12.0009 24Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.28543 14.2801C5.04543 13.5601 4.90906 12.7911 4.90906 12.0001C4.90906 11.2092 5.04543 10.4402 5.28543 9.72016V6.61108H1.27636C0.463634 8.23108 0 10.0638 0 12.0001C0 13.9365 0.463634 15.7692 1.27636 17.3892L5.28543 14.2801Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0009 4.77294C13.7627 4.77294 15.3445 5.3784 16.5882 6.56748L20.03 3.12568C17.9518 1.18933 15.2354 0.000244141 12.0009 0.000244141C7.31004 0.000244141 3.25188 2.68932 1.27734 6.61112L5.28641 9.72019C6.23004 6.88384 8.87548 4.77294 12.0009 4.77294Z"
      fill="white"
    />
  </Svg>
)

export default Google

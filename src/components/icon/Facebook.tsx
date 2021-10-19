import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Facebook: FC<SvgProps> = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#fff" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12c0 5.933 4.333 10.867 10 11.867l.067-.054A7.9 7.9 0 0110 23.8v-8.467H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V23.8a7.9 7.9 0 01-.067.013l.067.054c5.667-1 10-5.934 10-11.867 0-6.6-5.4-12-12-12S0 5.4 0 12z"
    />
  </Svg>
);

export default Facebook;

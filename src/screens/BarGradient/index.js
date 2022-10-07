import React from 'react';
import {Defs, LinearGradient, Rect, Stop, Svg} from 'react-native-svg';

const BarGradient = () => (
  <Svg height="10" width="251">
    <Defs>
      <LinearGradient id="barGradient" x1="0%" x2="100%" y1="0%" y2="0%">
        <Stop offset="0%" stopColor="red" stopOpacity="1" />
        <Stop offset="50%" stopColor="pink" stopOpacity="1" />
        <Stop offset="100%" stopColor="white" stopOpacity="1" />
      </LinearGradient>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#barGradient)" />
    </Defs>
  </Svg>
);

export default BarGradient;

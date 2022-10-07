import React from 'react';
import {Defs, LinearGradient, Stop, Svg} from 'react-native-svg';
import {string, node} from 'prop-types';

const PolygonGradient = ({fillColor, children}) => (
  <Svg>
    <Defs>
      <LinearGradient id="fillGradient" x1="0%" x2="0%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor={fillColor} stopOpacity={0.5} />
        <Stop offset="100%" stopColor={fillColor} stopOpacity="0" />
      </LinearGradient>
    </Defs>
    {children}
  </Svg>
);

PolygonGradient.propTypes = {
  fillColor: string,
  children: node,
};

export default PolygonGradient;

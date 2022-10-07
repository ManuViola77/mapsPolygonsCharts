import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polygon} from 'react-native-maps';
import {Defs, LinearGradient, Rect, Stop, Svg} from 'react-native-svg';

import {initialRegion, borderPolygonObject} from '../../data/mapData';
import styles from './styles';

const MapGradientNotWorking = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
      rotateEnabled={false}
      scrollEnabled={false}
      zoomEnabled={false}>
      <Svg height="10" width="251">
        <Defs>
          <LinearGradient id="barGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <Stop offset="0%" stopColor="yellow" stopOpacity="1" />
            <Stop offset="50%" stopColor="grey" stopOpacity="1" />
            <Stop offset="100%" stopColor="blue" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#barGradient)" />
      </Svg>
      <Polygon
        coordinates={borderPolygonObject}
        strokeWidth={3}
        strokeColor="purple"
        fillColor="#barGradient"
      />
    </MapView>
  </View>
);

export default MapGradientNotWorking;

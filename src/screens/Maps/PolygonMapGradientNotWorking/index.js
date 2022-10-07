import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polygon} from 'react-native-maps';
import {Defs, LinearGradient, Rect, Stop, Svg} from 'react-native-svg';

import {initialRegion, borderPolygonObject} from '../../../data/mapData';
import styles from '../styles';
import PolygonGradient from '../../PolygonGradient';

const PolygonMapGradientNotWorking = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
      rotateEnabled={false}
      scrollEnabled={false}
      zoomEnabled={false}>
      <PolygonGradient fillColor="pink">
        <Polygon
          coordinates={borderPolygonObject}
          strokeWidth={3}
          strokeColor="purple"
          fillColor="url(#fillGradient)"
        />
      </PolygonGradient>
    </MapView>
  </View>
);

export default PolygonMapGradientNotWorking;

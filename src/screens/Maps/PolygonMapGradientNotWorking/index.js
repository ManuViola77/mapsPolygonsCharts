import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polygon} from 'react-native-maps';

import {initialRegion, borderPolygonObject} from '../../../data/mapData';
import {mapStyle} from '../mapStyle';
import styles from '../styles';
import PolygonGradient from '../../PolygonGradient';

const PolygonMapGradientNotWorking = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
      customMapStyle={mapStyle}
      rotateEnabled={false}
      scrollEnabled={false}
      zoomEnabled={false}>
      <PolygonGradient fillColor="purple">
        <Polygon
          coordinates={borderPolygonObject}
          strokeWidth={1.5}
          strokeColor="pink"
          fillColor="url(#fillGradient)"
        />
      </PolygonGradient>
    </MapView>
  </View>
);

export default PolygonMapGradientNotWorking;

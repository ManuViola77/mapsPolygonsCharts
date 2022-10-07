import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polygon} from 'react-native-maps';

import {initialRegion, borderPolygonObject} from '../../data/mapData';
import styles from './styles';

const MapPolygon = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
      rotateEnabled={false}
      scrollEnabled={false}
      zoomEnabled={false}>
      <Polygon
        coordinates={borderPolygonObject}
        strokeWidth={3}
        strokeColor="purple"
        fillColor="pink"
      />
    </MapView>
  </View>
);

export default MapPolygon;

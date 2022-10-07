import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polygon} from 'react-native-maps';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/common';
import {
  initialRegion,
  borderPolygonObject,
  borderPolygonArray,
} from '../../data/mapData';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Map = () => (
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

export default Map;

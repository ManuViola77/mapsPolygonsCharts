import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Geojson} from 'react-native-maps';

import {initialRegion, geojsonData} from '../../../data/mapData';
import styles from '../styles';

const GeoJsonMap = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
      rotateEnabled={false}
      scrollEnabled={false}
      zoomEnabled={false}>
      <Geojson
        geojson={geojsonData}
        strokeWidth={3}
        strokeColor="purple"
        fillColor="pink"
      />
    </MapView>
  </View>
);

export default GeoJsonMap;

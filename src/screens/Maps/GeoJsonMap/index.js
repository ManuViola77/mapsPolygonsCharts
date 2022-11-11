import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Geojson} from 'react-native-maps';

import {initialRegion, geojsonData} from '../../../data/mapData';
import {mapStyle} from '../mapStyle';
import styles from '../styles';

const GeoJsonMap = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
      customMapStyle={mapStyle}
      rotateEnabled={false}
      scrollEnabled={false}
      zoomEnabled={false}>
      <Geojson
        geojson={geojsonData}
        strokeWidth={1.5}
        strokeColor="pink"
        fillColor="purple"
      />
    </MapView>
  </View>
);

export default GeoJsonMap;

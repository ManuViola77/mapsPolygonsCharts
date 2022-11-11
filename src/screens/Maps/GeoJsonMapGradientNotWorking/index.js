import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Geojson} from 'react-native-maps';

import {initialRegion, geojsonData} from '../../../data/mapData';
import PolygonGradient from '../../PolygonGradient';
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
      <PolygonGradient fillColor="purple">
        <Geojson
          geojson={geojsonData}
          strokeWidth={1.5}
          strokeColor="pink"
          fillColor="url(#fillGradient)"
        />
      </PolygonGradient>
    </MapView>
  </View>
);

export default GeoJsonMap;

import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Polygon} from 'react-native-svg';

import {borderPolygonArray} from '../../../data/mapData';
import PolygonGradient from '../../PolygonGradient';
import usePolygon from '../../../hooks/usePolygon';
import styles from '../styles';

const SvgPolygon = () => {
  const {
    mapRef,
    initialRegion,
    colorScaleForRegion,
    onMapReady,
    getLatScreenValue,
    getLngScreenValue,
  } = usePolygon();

  const initialValues = {
    polygon: '',
  };
  const {polygon = initialValues.polygon} = borderPolygonArray.reduce(
    ({polygon: accPolygon}, coord) => {
      const polygonLat = getLatScreenValue(coord[1]);
      const polygonLng = getLngScreenValue(coord[0]);

      return {
        polygon: `${accPolygon} ${polygonLng},${polygonLat}`,
      };
    },
    initialValues,
  );

  const value = 10;
  const fillColorObject = colorScaleForRegion.getColor(value);
  const fillColor = fillColorObject.toRGBAString();

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        onMapReady={onMapReady}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
      />
      <PolygonGradient fillColor={fillColor}>
        <Polygon
          points={polygon}
          fill="url(#fillGradient)"
          stroke="purple"
          strokeWidth="3"
        />
      </PolygonGradient>
    </View>
  );
};

export default SvgPolygon;

import React from 'react';
import {Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Defs, LinearGradient, Polygon, Rect, Stop, Svg} from 'react-native-svg';

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

  const value = 1;
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
      <View style={styles.referenceBar}>
        <Svg height="10" width="251">
          <Defs>
            <LinearGradient id="barGradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <Stop offset="0%" stopColor="#FFC0CB" stopOpacity="1" />
              <Stop offset="50%" stopColor="#FFA500" stopOpacity="1" />
              <Stop offset="100%" stopColor="#FF0000" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#barGradient)"
          />
        </Svg>
        <View style={styles.referenceValues}>
          <Text style={styles.referenceText}>1</Text>
          <Text style={styles.referenceText}>10</Text>
        </View>
      </View>
    </View>
  );
};

export default SvgPolygon;

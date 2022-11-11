import {useRef, useState} from 'react';
import ColorScale from 'color-scales';

import {
  SCREEN_HEIGHT as MAP_HEIGHT,
  SCREEN_WIDTH as MAP_WIDTH,
} from '../constants/common';
import {initialRegion} from '../data/mapData';

const usePolygon = () => {
  const initialBoundaries = {
    northEast: {},
    southWest: {},
  };
  const [mapBoundaries, setMapBoundaries] = useState(initialBoundaries);
  const mapRef = useRef();

  const {
    northEast: {latitude: biggestLatitude, longitude: biggestLongitude},
    southWest: {latitude: smallestLatitude, longitude: smallestLongitude},
  } = mapBoundaries;

  const mapLatDiff = biggestLatitude - smallestLatitude;
  const mapLngDiff = biggestLongitude - smallestLongitude;

  // grey, pink , purple
  const colorStops = ['394B59', '852155', '7E16FF'];
  const colorScaleForRegion = new ColorScale(1, 10, colorStops, 1);

  const onMapReady = async () => {
    const newBoundaries = await mapRef.current.getMapBoundaries();
    setMapBoundaries(newBoundaries);
  };

  const getLatScreenValue = lat => {
    const newLat = biggestLatitude - lat;
    return (newLat * MAP_HEIGHT) / mapLatDiff || 0;
  };

  const getLngScreenValue = lng => {
    const newLng = lng - smallestLongitude;
    return (newLng * MAP_WIDTH) / mapLngDiff || 0;
  };

  return {
    mapRef,
    initialRegion,
    colorScaleForRegion,
    onMapReady,
    getLatScreenValue,
    getLngScreenValue,
  };
};

export default usePolygon;

import React from 'react';
import {Image, View} from 'react-native';

import wantedPolygon from '../../../assets/images/wantedPolygon.png';
import styles from '../styles';

const WantedMap = () => (
  <View style={styles.imageContainer}>
    <Image source={wantedPolygon} style={styles.image} />
  </View>
);

export default WantedMap;

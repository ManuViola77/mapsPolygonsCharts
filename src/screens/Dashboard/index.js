import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  MAP_POLYGON,
  MAP_GRADIENT_NOT_WORKING,
  MAP_GEO_JSON,
  MAP_GEO_JSON_GRADIENT_NOT_WORKING,
  SVG_POLYGON,
  SVG_POLYGON_WITH_LABEL,
  WANTED_MAP,
} from '../../constants/screens';
import Button from '../../components/Button';
import styles from './styles';

const Dashboard = () => {
  const {navigate} = useNavigation();

  const navigateToScreen = screen => navigate(screen);

  return (
    <View style={styles.container}>
      <Button
        text="Mapa Queremos"
        onPress={() => navigateToScreen(WANTED_MAP)}
      />
      <Button
        text="Mapa Polígono"
        onPress={() => navigateToScreen(MAP_POLYGON)}
      />
      <Button
        text="Mapa Polígono Intento Gradiente"
        onPress={() => navigateToScreen(MAP_GRADIENT_NOT_WORKING)}
      />
      <Button
        text="Mapa GeoJson"
        onPress={() => navigateToScreen(MAP_GEO_JSON)}
      />
      <Button
        text="Mapa GeoJson Intento Gradiente"
        onPress={() => navigateToScreen(MAP_GEO_JSON_GRADIENT_NOT_WORKING)}
      />
      <Button
        text="Polígono SVG"
        onPress={() => navigateToScreen(SVG_POLYGON)}
      />
      <Button
        text="Polígono SVG Valor"
        onPress={() => navigateToScreen(SVG_POLYGON_WITH_LABEL)}
      />
    </View>
  );
};

export default Dashboard;

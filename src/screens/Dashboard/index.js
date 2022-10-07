import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  MAP_POLYGON,
  MAP_GRADIENT_NOT_WORKING,
  MAP_GEO_JSON,
  MAP_GEO_JSON_GRADIENT_NOT_WORKING,
} from '../../constants/screens';
import Button from '../../components/Button';
import styles from './styles';

const Dashboard = () => {
  const {navigate} = useNavigation();

  const navigateToScreen = screen => navigate(screen);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Dashboard;

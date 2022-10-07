import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MAP_POLYGON, MAP_GRADIENT_NOT_WORKING} from '../../constants/screens';
import Button from '../../components/Button';
import styles from './styles';

const Dashboard = () => {
  const {navigate} = useNavigation();

  const goToMapPolygon = () => {
    navigate(MAP_POLYGON);
  };

  const goToMapGradientNotWorking = () => {
    navigate(MAP_GRADIENT_NOT_WORKING);
  };

  return (
    <View style={styles.container}>
      <Button text="Mapa Polígono Liso" onPress={goToMapPolygon} />
      <Button
        text="Mapa Intento Gradiente"
        onPress={goToMapGradientNotWorking}
      />
    </View>
  );
};

export default Dashboard;

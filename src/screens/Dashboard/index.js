import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MAP_POLYGON, MAP_GRADIENT_NOT_WORKING} from '../../constants/screens';

const Dashboard = () => {
  const {navigate} = useNavigation();

  const goToMapPolygon = () => {
    navigate(MAP_POLYGON);
  };

  const goToMapGradientNotWorking = () => {
    navigate(MAP_GRADIENT_NOT_WORKING);
  };

  return (
    <View>
      <Pressable onPress={goToMapPolygon}>
        <Text>Mapa con Polígono</Text>
      </Pressable>
      <Pressable onPress={goToMapGradientNotWorking}>
        <Text>Mapa con intento de Gradiente</Text>
      </Pressable>
    </View>
  );
};

export default Dashboard;

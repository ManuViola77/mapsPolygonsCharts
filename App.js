import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MapPolygon from './src/screens/MapPolygon';
import MapGradientNotWorking from './src/screens/MapGradientNotWorking';
import {
  DASHBOARD,
  MAP_GRADIENT_NOT_WORKING,
  MAP_POLYGON,
} from './src/constants/screens';
import Dashboard from './src/screens/Dashboard';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={DASHBOARD}
        component={Dashboard}
        options={{headerTitle: 'Opciones'}}
      />
      <Stack.Screen
        name={MAP_POLYGON}
        component={MapPolygon}
        options={{headerTitle: 'Mapa Polígono Liso'}}
      />
      <Stack.Screen
        name={MAP_GRADIENT_NOT_WORKING}
        component={MapGradientNotWorking}
        options={{headerTitle: 'Mapa Intento Gradiente'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

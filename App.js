import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MapPolygon from './src/screens/Maps/PolygonMap';
import MapGradientNotWorking from './src/screens/Maps/PolygonMapGradientNotWorking';
import MapGeoJson from './src/screens/Maps/GeoJsonMap';
import MapGeoJsonGradientNotWorking from './src/screens/Maps/GeoJsonMapGradientNotWorking';
import {
  DASHBOARD,
  MAP_GRADIENT_NOT_WORKING,
  MAP_POLYGON,
  MAP_GEO_JSON,
  MAP_GEO_JSON_GRADIENT_NOT_WORKING,
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
      <Stack.Screen
        name={MAP_GEO_JSON}
        component={MapGeoJson}
        options={{headerTitle: 'Mapa GeoJson'}}
      />
      <Stack.Screen
        name={MAP_GEO_JSON_GRADIENT_NOT_WORKING}
        component={MapGeoJsonGradientNotWorking}
        options={{headerTitle: 'Mapa GeoJson Intento Gradiente'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

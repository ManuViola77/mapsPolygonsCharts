import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import WantedMap from './src/screens/Maps/WantedMap';
import MapPolygon from './src/screens/Maps/PolygonMap';
import MapGradientNotWorking from './src/screens/Maps/PolygonMapGradientNotWorking';
import MapGeoJson from './src/screens/Maps/GeoJsonMap';
import MapGeoJsonGradientNotWorking from './src/screens/Maps/GeoJsonMapGradientNotWorking';
import SvgPolygon from './src/screens/Maps/SvgPolygon';
import SvgPolygonWithLabel from './src/screens/Maps/SvgPolygonWithLabel';
import {
  DASHBOARD,
  MAP_GRADIENT_NOT_WORKING,
  MAP_POLYGON,
  MAP_GEO_JSON,
  MAP_GEO_JSON_GRADIENT_NOT_WORKING,
  SVG_POLYGON,
  SVG_POLYGON_WITH_LABEL,
  WANTED_MAP,
} from './src/constants/screens';

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
        name={WANTED_MAP}
        component={WantedMap}
        options={{headerTitle: 'Mapa Queremos'}}
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
      <Stack.Screen
        name={SVG_POLYGON}
        component={SvgPolygon}
        options={{headerTitle: 'Polígono SVG'}}
      />
      <Stack.Screen
        name={SVG_POLYGON_WITH_LABEL}
        component={SvgPolygonWithLabel}
        options={{headerTitle: 'Polígono SVG Valor'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

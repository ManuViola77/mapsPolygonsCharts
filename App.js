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
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={MAP_POLYGON} component={MapPolygon} />
      <Stack.Screen
        name={MAP_GRADIENT_NOT_WORKING}
        component={MapGradientNotWorking}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

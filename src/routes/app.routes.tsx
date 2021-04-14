import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Receita1 from '../pages/Receita1';
import Receita2 from '../pages/Receita2';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator initialRouteName="Home">
    <App.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false, title: 'APP de Receitas' }}
    />

    <App.Screen
      name="Receita1"
      component={Receita1}
      options={{ headerShown: true, title: 'Receita Pão de queijo' }}
    />

    <App.Screen
      name="Receita2"
      component={Receita2}
      options={{ headerShown: true, title: 'Receita PetitiGato' }}
    />
  </App.Navigator>
);

export default AppRoutes;

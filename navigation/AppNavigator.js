import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PropriedadeScreen from '../screens/PropriedadeScreen'

export default createAppContainer(
  createStackNavigator({
    Main: HomeScreen,
    Propriedade: PropriedadeScreen,
  },
  {
    initialRouteName: 'Main',
  })
);
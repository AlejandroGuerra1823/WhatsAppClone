/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ContainerStackNavigator } from './src/navigation/ContainerStackNavigation';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <ContainerStackNavigator />
    </NavigationContainer>
  );
}

export default App;

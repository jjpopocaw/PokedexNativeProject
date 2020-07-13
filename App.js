import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PokeList from './components/PokeList';
import PokemonDetail from './components/PokemonDetail';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PokeList" component={PokeList} />
        <Stack.Screen name="PokeDetail" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "./screens/Home";
import PokemonList from "./screens/PokemonList";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokemons" component={PokemonList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

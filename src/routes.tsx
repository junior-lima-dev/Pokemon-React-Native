import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "./screens/Home";
import PokemonList from "./screens/PokemonList";
import PokemonDetail from "./screens/PokemonDetail";
import Favorites from "./screens/Favorites";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokemons" component={PokemonList} />
        <Stack.Screen name="Detail" component={PokemonDetail} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

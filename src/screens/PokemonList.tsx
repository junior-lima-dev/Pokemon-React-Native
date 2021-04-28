import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import api from "../services/api";
import styles from "../styles/pokemonList/styles";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<any>([]);
  const [offset, setOffset] = useState(0);

  async function loadPokemons() {
    const response = await api.get("/pokemon", { params: { offset } });
    setPokemons([...pokemons, ...response.data.results]);
    setOffset(offset + 20);
  }

  useEffect(() => {
    loadPokemons();
  }, []);
  return (
    <FlatList
      data={pokemons}
      style={styles.pokemonsList}
      keyExtractor={(pokemon) => String(pokemon.name)}
      onEndReached={loadPokemons}
      onEndReachedThreshold={0.2}
      renderItem={({ item: pokemon }) => (
        <View style={styles.listItem}>
          <Text style={styles.title}>{pokemon.name}</Text>
        </View>
      )}
    />
  );
}

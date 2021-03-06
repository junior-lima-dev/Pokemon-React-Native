import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import api from "../services/api";
import styles from "../styles/pokemonList/styles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<any>([]);
  const [offset, setOffset] = useState(0);

  async function loadPokemons() {
    const response = await api.get("/pokemon", { params: { offset } });
    setPokemons([...pokemons, ...response.data.results]);
    setOffset(offset + 20);
  }

  const navigation = useNavigation();

  function navigateToPokemonDetail(pokemonUrl: string) {
    navigation.navigate("Detail", { pokemonUrl });
  }

  function navigateToFavorites() {
    navigation.navigate("Favorites");
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de pokemons</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Selecione qualquer nome para ver detalhes do pokemon
        </Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => navigateToFavorites()}
      >
        <Text style={styles.favoriteText}>Ver meus favoritos</Text>
        <FontAwesome name="heart" size={36} color="#307CBF" />
      </TouchableOpacity>
      <FlatList
        data={pokemons}
        style={styles.pokemonsList}
        keyExtractor={(pokemon) => String(pokemon.name)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.2}
        renderItem={({ item: pokemon }) => (
          <TouchableOpacity
            onPress={() => navigateToPokemonDetail(pokemon.name)}
          >
            <View style={styles.listItem}>
              <Text style={styles.title}>{pokemon.name}</Text>
              <TouchableOpacity
                onPress={() => {
                  AsyncStorage.setItem(`${pokemon.name}`, `${pokemon.name}`);
                  ToastAndroid.showWithGravity(
                    "Adicionado aos favoritos",
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP
                  );
                }}
              >
                <FontAwesome name="heart-o" size={36} color="#307CBF" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

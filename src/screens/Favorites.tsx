import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/favorites/styles";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    AsyncStorage.getAllKeys().then(function (data) {
      setFavorites(data);
    });
  }, [AsyncStorage]);

  const navigation = useNavigation();

  function navigateToBack() {
    navigation.goBack();
  }

  function navigateToPokemonDetail(pokemonUrl: string) {
    navigation.navigate("Detail", { pokemonUrl });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Favoritos</Text>
        <TouchableOpacity onPress={() => navigateToBack()}>
          <Feather name="arrow-left" size={32} color="#307CBF" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {favorites.map((item: string) => {
          return (
            <TouchableOpacity
              key={item}
              onPress={() => navigateToPokemonDetail(item)}
            >
              <View style={styles.listItem}>
                <Text style={styles.title}>{item}</Text>
                <FontAwesome name="eye" size={36} color="#307CBF" />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

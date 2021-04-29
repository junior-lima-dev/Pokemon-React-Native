import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/pokemonList/styles";
import { FontAwesome } from "@expo/vector-icons";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any>([]);

  AsyncStorage.getAllKeys().then(function (data) {
    setFavorites(data);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      {favorites.map((item: string) => {
        return (
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text style={styles.title}>{item}</Text>
              <FontAwesome name="eye" size={36} color="#fff" />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

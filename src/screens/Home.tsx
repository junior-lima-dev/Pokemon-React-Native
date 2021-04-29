import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/home/styles";

export default function Home() {
  const navigation = useNavigation();

  function navigateToPokemonList() {
    navigation.navigate("Pokemons");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../images/logo1.png")} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToPokemonList()}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

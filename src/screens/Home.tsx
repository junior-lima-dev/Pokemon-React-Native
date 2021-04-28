import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles1 from "../styles/home/styles";

const styles = StyleSheet.create({
  logo: {
    width: 210,
    height: 78,
  },
});

export default function Home() {
  const navigation = useNavigation();

  function navigateToPokemonList() {
    navigation.navigate("Pokemons");
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ef5350",
      }}
    >
      <Image source={require("../images/logo1.png")} style={styles1.logo} />
      <TouchableOpacity onPress={() => navigateToPokemonList()}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

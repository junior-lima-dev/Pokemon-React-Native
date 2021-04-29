import React, { useEffect, useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/pokemonDetail/styles";
import { Feather } from "@expo/vector-icons";

export default function PokemonDetail() {
  const route = useRoute();
  const pokemonUrl = route.params?.pokemonUrl;

  const [pokemon, setPokemon] = useState<any>([]);

  function loadPokemon() {
    fetch(`${pokemonUrl}`, { method: "GET" })
      .then((response) => response.json())
      .then(function (data) {
        setPokemon(data);
      })
      .catch((err) =>
        Alert.alert(`Ocorreu um erro ao tentar realizar a consulta. ${err}`)
      );
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detalhes do Pokemon</Text>
        <Feather name="arrow-left" size={32} color="#000" />
      </View>
      <View style={styles.card}>
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={{ uri: `${pokemon?.sprites?.front_default}` }}
          />
        </View>

        <Text style={styles.title}>INFORMAÇÕES BÁSICAS</Text>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>NOME:</Text>
          <Text>{pokemon?.name}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>CÓDIGO:</Text>
          <Text>{pokemon?.id}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>TIPO:</Text>
          <Text>
            {pokemon?.types
              ?.map((item: any) => " " + item.type.name)
              .toString()}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>PESO:</Text>
          <Text>{pokemon?.weight}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>ALTURA:</Text>
          <Text>{pokemon?.height}</Text>
        </View>

        <Text style={styles.title}>INFORMAÇÕES ADICIONAIS</Text>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>HABILIDADES:</Text>
          <Text>
            {pokemon?.abilities
              ?.map((item: any) => " " + item.ability.name)
              .toString()}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>EXPERIÊNCIA BÁSICA:</Text>
          <Text>{pokemon?.base_experience}</Text>
        </View>
      </View>
    </View>
  );
}

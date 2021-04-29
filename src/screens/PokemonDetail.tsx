import React, { useEffect, useState } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import styles from "../styles/pokemonDetail/styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

type PokemonParam = {
  PokemonParam: {
    pokemonUrl: string;
  };
};

export default function PokemonDetail() {
  const route = useRoute<RouteProp<PokemonParam, "PokemonParam">>();
  const pokemonUrl = route.params?.pokemonUrl;

  const [pokemon, setPokemon] = useState<any>([]);

  /*function loadPokemon() {
    fetch(`${pokemonUrl}`, { method: "GET" })
      .then((response) => response.json())
      .then(function (data) {
        setPokemon(data);
      })
      .catch((err) =>
        Alert.alert(`Ocorreu um erro ao tentar realizar a consulta. ${err}`)
      );
  }*/

  async function loadPokemon() {
    const response = await api.get(`/pokemon/${pokemonUrl}`);
    setPokemon(response.data);
  }

  const navigation = useNavigation();

  function navigateToBack() {
    navigation.goBack();
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detalhes do Pokemon</Text>
        <TouchableOpacity onPress={() => navigateToBack()}>
          <Feather name="arrow-left" size={32} color="#307CBF" />
        </TouchableOpacity>
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
          <Text style={styles.contentValue}>{pokemon?.name}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>CÓDIGO:</Text>
          <Text style={styles.contentValue}>{pokemon?.id}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>TIPO:</Text>
          <Text style={styles.contentValue}>
            {pokemon?.types
              ?.map((item: any) => " " + item.type.name)
              .toString()}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>PESO:</Text>
          <Text style={styles.contentValue}>{pokemon?.weight}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>ALTURA:</Text>
          <Text style={styles.contentValue}>{pokemon?.height}</Text>
        </View>

        <Text style={styles.title}>INFORMAÇÕES ADICIONAIS</Text>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>HABILIDADES:</Text>
          <Text style={styles.contentValue}>
            {pokemon?.abilities
              ?.map((item: any) => " " + item.ability.name)
              .toString()}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>EXPERIÊNCIA BÁSICA:</Text>
          <Text style={styles.contentValue}>{pokemon?.base_experience}</Text>
        </View>
      </View>
    </View>
  );
}

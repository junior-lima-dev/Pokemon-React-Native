import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F2B807",
    padding: 10,
  },
  header: {
    marginTop: 32,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#307CBF",
  },
  content: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  contentText: {
    fontSize: 24,
    color: "#307CBF",
  },
  pokemonsList: {
    marginTop: 32,
  },
  listItem: {
    padding: 24,
    margin: 8,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    lineHeight: 10,
    borderColor: "#307CBF",
    borderWidth: 2,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#307CBF",
  },
  favoriteButton: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#307CBF",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favoriteText: {
    color: "#307CBF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F2B807",
    padding: 24,
    flex: 1,
  },
  header: {
    marginTop: 32,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#307CBF",
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#307CBF",
  },
  card: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#307CBF",
    padding: 15,
    flex: 1,
    alignItems: "center",
  },
  boxImage: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#307CBF",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    backgroundColor: "#307CBF",
    padding: 6,
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 12,
    color: "#F2B807",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: "bold",
    color: "#307CBF",
  },
  contentValue: {
    fontSize: 15,
    color: "#F2B807",
  },
});

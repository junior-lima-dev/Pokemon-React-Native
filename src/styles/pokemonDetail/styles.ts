import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F3C920",
    padding: 24,
    flex: 1,
  },
  header: {
    marginTop: 32,
    borderRadius: 10,
    borderWidth: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  card: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C3C3C5",
    padding: 15,
    flex: 1,
    alignItems: "center",
  },
  boxImage: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C3C3C5",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    backgroundColor: "#C3C3C5",
    padding: 6,
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
  },
  contentTitle: {
    marginRight: 4,
    fontWeight: "bold",
  },
});

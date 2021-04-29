import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F2B807",
  },
  header: {
    marginTop: 32,
    marginHorizontal: 10,
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
  scroll: {
    marginTop: 16,
  },
});

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewDetails: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fafafa",
  },
  viewTitulo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  titulo: {
    fontSize: 28,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    top: 10,
  },
  viewNotas: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  notas: {
    fontSize: 26,
  },
  viewButtons: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  btnEdit: {
    borderWidth: 4,
    borderColor: "#ffff44",
    backgroundColor: "#777",
    padding: 10,
    borderRadius: 15,
  },
  btnDelet: {
    borderWidth: 4,
    backgroundColor: "#777",
    borderColor: "#ff1133",
    padding: 8,
    borderRadius: 15,
  },
  viewBtnNotas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 50,
  },
  btnNotasText: {
    color: "#fff",
    fontSize: 26,
  },
});
export default styles;

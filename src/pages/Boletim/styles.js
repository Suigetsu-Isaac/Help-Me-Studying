import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewLogout: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 15,
    padding: 5,
  },

  flat: {
    margin: 38,
    marginHorizontal: 10,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  subcontainer: {
    flex: 1,
    top: 15,

    justifyContent: "center",
    alignSelf: "stretch",
  },
  inst: {
    textAlign: "center",
    top: 10,
    fontSize: 24,
    color: "blue",
  },

  table: {
    flex: 1,
    padding: 15,
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#121221",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  viewNotas: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  dark: {
    backgroundColor: `rgba(255, 255, 255, 0.95)`,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },

  light: {
    backgroundColor: `rgba(255,255,255, 1)`,
    color: "rgba(255,255,000,0.7)",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
  },
  text: {
    color: "#303030",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "stretch",
  },

  button: {
    alignSelf: "stretch",

    padding: 8,
    borderRadius: 25,

    backgroundColor: "#01a001",
  },
  btnText: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  //Modal
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttons: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "rgba(10,20,50,0.8)",
  },
  buttonClose: {
    backgroundColor: "rgba(30,20,70,1)",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalInput: {
    backgroundColor: "#dadaca",
  },
  //FlatList edit e delete

  viewBtnNotas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 50,
  },
  btnNotasText: {
    color: "#fff",
    fontSize: 14,
  },
  btnFooter: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: -15,
  },
});

const cor = {
  verde: "#0faa22",
  amarelo: "#e07039",
  vermelho: "#ef1109",
  azul: "#1109df",
};

export default styles;

export { cor };

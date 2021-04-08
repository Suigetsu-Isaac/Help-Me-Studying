import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewLogout: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 15,
    bottom: 15,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
    alignSelf: "stretch",

    position: "relative",
    top: 42,
  },
  alingInput: {
    textAlign: "center",
  },
  alingText: {
    textAlign: "center",
  },

  btn: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#122121",
    padding: 8,
    alignSelf: "stretch",
    borderRadius: 15,
  },
  btnText: {
    color: "#fffff0",
    textAlign: "center",
  },
  logout: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

export default styles;

const cor = {
  verde: "#0faa22",
  amarelo: "#e07039",
  vermelho: "#ef1109",
  azul: "#1109df",
};

export { cor };

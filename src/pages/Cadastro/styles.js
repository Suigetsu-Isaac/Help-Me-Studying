import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingBottom: 50,
  },

  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 10,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: "#35aaff",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    height: 45,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 15,
  },
  RegisterText: {
    color: "#fff",
  },
});

export default styles;

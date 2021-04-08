import React from "react";
import { TextInput, useState, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import firebase from "../config/firebaseconfig";
export default function Form({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);

  function loginFirebase() {
    console.log("chegou no loginfirebase");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((user) => {
        navigation.navigate("Auth");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("erro: " + errorCode + "\n" + errorMessage);
      });
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu e-mail"
        autoCorrect={false}
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        keyboardType="email-address"
      />

      <View>
        <TextInput
          placeholder="Digite a sua senha"
          autoCorrect={false}
          value={senha}
          onChangeText={(senha) => {
            setSenha(senha);
          }}
          secureTextEntry={hidePass}
        />

        <TouchableOpacity onPress={setHidePass(!hidePass)}>
          <Ionicons name="eye" color="#fff" Size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.UserView}>
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            loginFirebase();
          }}
        >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            navigation.navigate("Cadastro");
          }}
        >
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

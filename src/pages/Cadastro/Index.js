import React, { useState, useEffect } from "react";
import styles from "./styles";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from "react-native";

import firebase from "../../config/firebaseconfig";

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 300, y: 80 }));

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [instituicao, setInstituicao] = useState("");
  useEffect(() => {
    console.log("Cheguei no Login");
    const KeyboardDidShowListen = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    const KeyboardDidShowHide = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
      }),

      Animated.timing(logo.y, {
        toValue: 80,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
      }),

      Animated.timing(logo.y, {
        toValue: 80,
        duration: 100,
      }),
    ]).start();
  }

  function createUserFirebase() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        console.log("Usuario Cadastrado com sucessor");
        alert("usuário Cadastrado");
        () => navigation.navigate("Auth");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("erro: " + errorCode + "\n" + errorMessage);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          source={require("../../assets/Logo.png")}
          style={{ width: logo.x, height: logo.y }}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }, { translateX: offset.x }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          autoCorrect={false}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          autoCorrect={false}
          value={senha}
          onChangeText={(senha) => {
            setSenha(senha);
          }}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            createUserFirebase();
          }}
        >
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

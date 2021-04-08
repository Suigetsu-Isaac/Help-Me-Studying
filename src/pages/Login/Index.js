import React, { useState, useEffect } from "react";
import styles from "./styles";
import {
  KeyboardAvoidingView,
  View,
  Text,
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
  const [hidePass, setHidePass] = useState(true);

  useEffect(() => {
    console.log("Cheguei no Login");
    () => Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    const KeyboardDidHide = Keyboard.addListener(
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
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
        useNativeDriver: true,
      }),

      Animated.timing(logo.y, {
        toValue: 80,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 80,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

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
          placeholder="Digite o seu e-mail"
          autoCorrect={false}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          autoCorrect={false}
          value={senha}
          onChangeText={(senha) => {
            setSenha(senha);
          }}
          secureTextEntry={hidePass}
        />

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
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

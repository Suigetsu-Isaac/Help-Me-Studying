import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebaseconfig";
import Calculo from "../../components/calculo";
import styles, { cor } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [media, setMedia] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [mediaFinal, setMediaFinal] = useState("");

  function logoutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("deslogado com suceso");
        navigation.navigate("Auth");
      })
      .catch((error) => {
        console.log(`erro: ${error}`);
      });
  }

  function handleNotas(nota1 = "", nota2 = "", avf = "") {
    const res = Calculo("", nota1, nota2, avf);
    if (n2 == "") {
      console.log("entrou");
      setN2(res.N2);
    }

    if (avf == "") {
      console.log("igual");
      setNotaFinal(res.NAF);
    } else {
      console.log("diferente");
      setNotaFinal(avf);
    }

    setMedia(res.MD);
    setMediaFinal(res.MDAF);
  }

  function handleColor(nota) {
    console.log("chegou no color");
    if (nota == 100) {
      return cor.azul;
    }
    if (nota >= 70) {
      return cor.verde;
    }
    if (nota > 40) {
      return cor.amarelo;
    } else {
      return cor.vermelho;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.viewLogout}>
          <TouchableOpacity
            onPress={() => logoutFirebase()}
            style={styles.logout}
          >
            <FontAwesome name="sign-out" size={26} color="#7f2f3f" />
            <Text> sair </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.alingText}> Primeira Nota </Text>
        <TextInput
          style={styles.alingInput}
          placeholder="Digite a primeira Nota:"
          onChangeText={(n1) => setN1(n1)}
          value={n1}
          maxLength={3}
          keyboardType="decimal-pad"
        />

        <Text style={styles.alingText}> Segunda Nota </Text>
        <TextInput
          style={styles.alingInput}
          placeholder="Digite a segunda Nota:"
          onChangeText={(n2) => setN2(n2)}
          value={n2}
          maxLength={3}
          keyboardType="decimal-pad"
        />
        <Text style={styles.alingText}> Nota Final </Text>
        <TextInput
          style={styles.alingInput}
          placeholder="Digite a Nota Final:"
          onChangeText={(notaFinal) => setNotaFinal(notaFinal)}
          value={notaFinal}
          maxLength={3}
          keyboardType="decimal-pad"
        />

        <TouchableOpacity
          onPress={() => handleNotas(n1, n2, notaFinal)}
          style={styles.btn}
        >
          <Text style={styles.btnText}>gerar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text> Média</Text>
        <Text style={{ color: handleColor(media) }}>{media}</Text>
        <Text> Nota Final</Text>
        <Text style={{ color: handleColor(notaFinal) }}>{notaFinal}</Text>
        <Text> Média da Nota Final</Text>
        <Text style={{ color: handleColor(mediaFinal) }}>{mediaFinal}</Text>
      </View>
    </View>
  );
}

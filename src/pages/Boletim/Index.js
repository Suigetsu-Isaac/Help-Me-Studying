import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles, { cor } from "./styles";
import { ModEdit, ModCreate } from "./dados";
import { EvilIcons } from "@expo/vector-icons";
import firebase from "../../config/firebaseconfig";

let x = true;

function handleColor(nota) {
  console.log("chegou no color");
  if (!nota) {
    return cor.verde;
  }
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

export default function Boletim({ navigation }) {
  const [listFire, setListFire] = useState("");

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

  useEffect(() => {
    try {
      firebase
        .database()
        .ref("/notas")
        .on("value", (snapshot) => {
          const list = [];
          snapshot.forEach((childItem) => {
            list.push({
              key: childItem.key,
              disciplina: childItem.val().disciplina,
              notas: childItem.val().notas,
            });
          });
          setListFire(list);
        });
    } catch (error) {
      console.error("Error: " + error);
    }
  }, []);
  function editNotas(id, disciplina, N1, N2, NAF) {
    return (
      <ModEdit id={id} disciplina={disciplina} N1={N1} N2={N2} NAF={NAF} />
    );
  }
  function delNotas(id) {
    firebase
      .database()
      .ref("/notas/" + id)
      .remove();
  }

  function Detalhes(id) {
    navigation.navigate("Detalhes", { id: id });
  }
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.viewLogout}>
          <TouchableOpacity
            onPress={() => logoutFirebase()}
            style={styles.logout}
          >
            <FontAwesome name="sign-out" size={26} color="#7f2f3f" />
            <Text> sair </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={listFire}
          style={styles.flat}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.table}>
              <View style={x ? styles.dark : styles.light}>
                <Text style={styles.title}>{item.disciplina + "\n"}</Text>
                <View style={styles.viewNotas}>
                  <Text style={styles.text}>
                    {"Nota 1 : "}
                    <Text style={{ color: handleColor(item.notas.N1) }}>
                      {item.notas.N1}
                    </Text>
                  </Text>
                  <Text style={styles.text}>
                    {`    Nota 2 : `}
                    <Text style={{ color: handleColor(item.notas.N2) }}>
                      {item.notas.N2}
                    </Text>
                  </Text>
                  <Text style={styles.text}>
                    {`    Media : `}
                    <Text style={{ color: handleColor(item.notas.MD) }}>
                      {item.notas.MD}
                    </Text>
                  </Text>
                </View>
                {x ? (x = false) : (x = true)}
              </View>
              <View style={styles.viewBtnNotas}>
                <ModEdit
                  id={item.key}
                  disciplina={item.disciplina}
                  nota1={item.notas.N1}
                  nota2={item.notas.N2}
                  notaFinal={item.notas.NAF}
                  stylesButton={styles.btnEdit}
                  stylesText={styles.btnNotasText}
                  tamanho={22}
                />
                <TouchableOpacity
                  onPress={() => delNotas(item.key)}
                  style={styles.btnDelet}
                >
                  <EvilIcons name="trash" size={30} color="red" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Detalhes(item.key)}>
                  <FontAwesome5
                    name="expand-arrows-alt"
                    size={22}
                    color="#555"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.btnFooter}>
        <ModCreate />
      </View>
    </View>
  );
}

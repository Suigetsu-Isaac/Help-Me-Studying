import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { ModEdit } from "../Boletim/dados";
import { useState } from "react/cjs/react.development";
import { cor } from "../Boletim/styles";
import styles from "../Detalhes/styles";
import firebase from "../../config/firebaseconfig";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
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

export default function Detalhes({ route, navigation }) {
  const [item, setItem] = useState();
  const [bool, setBool] = useState(false);
  const [del, setDel] = useState(false);
  function delNotas(id) {
    try {
      firebase
        .database()
        .ref("/notas/" + id)
        .remove();
      navigation.navigate("Boletim");
    } catch (e) {
      console.error(e);
    } finally {
      setItem({
        disciplina: "",
        notas: {
          N1: "",
          N2: "",
          NAF: "",
          MD: "",
          NAF: "",
          MDAF: "",
        },
      });
    }
  }

  useEffect(() => {
    function getNotasDetalhadas(id) {
      try {
        console.log("Chegou no firebase");
        firebase
          .database()
          .ref("notas/" + id)
          .once("value", (snapshot) => {
            console.log("snapshot: " + snapshot.val().disciplina);
            const Aluno = {
              id: id,
              disciplina: snapshot.val().disciplina,
              notas: snapshot.val().notas,
            };
            setDel(true);
            setItem(Aluno);
            console.log(item);
          });
      } catch (error) {
        console.error("Error: " + error);
      }
    }
    if (!del) {
      getNotasDetalhadas(route.params?.id);
    } else {
      setBool(false);
    }

    console.log("obj: " + item);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log("espera");
    }, 500);
    setBool(true);
  }, []);
  return (
    <>
      {bool ? (
        <View style={styles.viewDetails}>
          <View style={styles.viewTitulo}>
            <Text style={styles.titulo}>{item.disciplina + "\n"}</Text>
          </View>
          <View style={styles.viewNotas}>
            <Text style={styles.notas}>
              {" Nota 1 : "}
              <Text style={{ color: handleColor(item.notas.N1) }}>
                {item.notas.N1}
              </Text>
            </Text>
            <Text style={styles.notas}>
              {` Nota 2 : `}
              <Text style={{ color: handleColor(item.notas.N2) }}>
                {item.notas.N2}
              </Text>
            </Text>
            <Text style={styles.notas}>
              {` Media : `}
              <Text style={{ color: handleColor(item.notas.MD) }}>
                {item.notas.MD}
              </Text>
            </Text>
            <Text style={styles.notas}>
              {`\n Nota Final : `}
              <Text style={{ color: handleColor(item.notas.NAF) }}>
                {item.notas.NAF}
              </Text>
            </Text>
            <Text style={styles.notas}>
              {` Media nota Final : `}
              <Text style={{ color: handleColor(item.notas.MDNF) }}>
                {item.notas.MDNF}
              </Text>
            </Text>
          </View>

          <View style={styles.viewButtons}>
            <TouchableOpacity onPress={() => delNotas(route.params?.id)}>
              <Feather name="trash-2" size={45} color="red" />
            </TouchableOpacity>

            <ModEdit
              id={route.params?.id}
              disciplina={item.disciplina}
              nota1={item.notas.N1}
              nota2={item.notas.N2}
              notaFinal={item.notas.NAF}
              stylesButton={styles.btnEdit}
              stylesText={styles.btnNotasText}
              tamanho={45}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text></Text>
        </View>
      )}
    </>
  );
}

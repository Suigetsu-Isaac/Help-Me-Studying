import firebase from "../../config/firebaseconfig";
import Calculo from "../../components/calculo";
import styles from "../Boletim/styles";
import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react/cjs/react.development";
function ModCreate() {
  const [modalVisible, setModalVisible] = useState(false);
  const [N1, setN1] = useState(0);
  const [N2, setN2] = useState(0);
  const [NAF, setNAF] = useState(0);
  const [disciplina, setDisciplina] = useState("");

  //Create

  function handleParams(disciplina) {
    console.log(
      disciplina.Disciplina,
      disciplina.N1,
      disciplina.N2,
      disciplina.MD,
      disciplina.NAF,
      disciplina.MDAF
    );
    console.log(disciplina);
  }
  function Create(obj) {
    try {
      firebase
        .database()
        .ref("/notas")
        .push({
          disciplina: obj.Disciplina,
          notas: {
            N1: obj.N1,
            N2: obj.N2,
            MD: obj.MD,
            NAF: obj.NAF,
            MDNF: obj.MDAF,
          },
        });
    } catch (e) {
      console.error("Erro: " + e);
    } finally {
      setModalVisible(!modalVisible);
    }
  }
  function Cancelar() {
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Disciplina </Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(disciplina) => setDisciplina(disciplina)}
              value={disciplina}
              placeholder="Disciplina"
            />

            <Text style={styles.modalText}>Nota1: </Text>
            <TextInput
              style={styles.modalInput}
              value={N1}
              onChangeText={(N1) => setN1(N1)}
              keyboardType="decimal-pad"
              maxLength={3}
              placeholder="Nota 1"
            />
            <Text style={styles.modalText}>Nota2: </Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(N2) => setN2(N2)}
              value={N2}
              maxLength={3}
              keyboardType="decimal-pad"
              placeholder="Nota 2"
            />
            <Text style={styles.modalText}>Nota da Avaliação Final: </Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(NAF) => setNAF(NAF)}
              keyboardType="decimal-pad"
              value={NAF}
              maxLength={3}
              placeholder="Nota Final"
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "stretch",
                alignItems: "center",
                top: 10,
              }}
            >
              <Pressable
                style={[styles.buttons, styles.buttonClose]}
                onPress={() => Create(Calculo(disciplina, N1, N2, NAF))}
              >
                <Text style={styles.textStyle}>Criar</Text>
              </Pressable>

              <Pressable onPress={() => Cancelar()}>
                <Text>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttons, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Criar Nota</Text>
      </Pressable>
    </View>
  );
}

function ModEdit(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [N1, setN1] = useState(String(props.nota1));
  const [N2, setN2] = useState(String(props.nota2));
  const [NAF, setNAF] = useState(String(props.notaFinal));
  const [disciplina, setDisciplina] = useState(props.disciplina);

  //Update
  function handleParams(disciplina) {
    console.log(
      disciplina.Disciplina,
      disciplina.N1,
      disciplina.N2,
      disciplina.MD,
      disciplina.NAF,
      disciplina.MDAF
    );
    console.log(disciplina);
    console.log(props.id);
    setModalVisible(!modalVisible);
  }
  function Edit(obj) {
    try {
      firebase
        .database()
        .ref("/notas/" + props.id)
        .update({
          disciplina: obj.Disciplina,
          notas: {
            N1: obj.N1,
            N2: obj.N2,
            MD: obj.MD,
            NAF: obj.NAF,
            MDNF: obj.MDAF,
          },
        });
    } catch (e) {
      console.error("Erro: " + e);
    } finally {
      setModalVisible(!modalVisible);
    }
  }

  function Cancelar() {
    setModalVisible(!modalVisible);
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Disciplina </Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(disciplina) => setDisciplina(disciplina)}
              value={disciplina}
            />

            <Text style={styles.modalText}>Nota1: </Text>
            <TextInput
              style={styles.modalInput}
              value={N1}
              onChangeText={(N1) => setN1(N1)}
              keyboardType="decimal-pad"
              maxLength={3}
              placeholder="Nota 1"
            />
            <Text style={styles.modalText}>Nota2: </Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(N2) => setN2(N2)}
              value={N2}
              keyboardType="decimal-pad"
              maxLength={3}
              placeholder="Nota 2"
            />
            <Text style={styles.modalText}>Nota da Avaliação Final: </Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(NAF) => setNAF(NAF)}
              value={NAF}
              keyboardType="decimal-pad"
              maxLength={3}
              placeholder="Nota Final"
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "stretch",
                alignItems: "center",
                top: 10,
              }}
            >
              <Pressable
                style={[styles.buttons, styles.buttonClose]}
                onPress={() => Edit(Calculo(disciplina, N1, N2, NAF))}
              >
                <Text style={styles.textStyle}>Atualizar</Text>
              </Pressable>

              <Pressable onPress={() => Cancelar()}>
                <Text>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Feather name="edit" size={props.tamanho} color="#e32" />
      </TouchableOpacity>
    </View>
  );
}

export { ModCreate, ModEdit };

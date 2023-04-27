import {StyleSheet,View,Text,TextInput,TouchableOpacity,Modal,Image} from "react-native";
import React, { useState} from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../../firebaseConfig";

const schema = yup.object({
  
  email: yup.string().email("O campo deve ter um Email Valido.").required("O campo Email é obrigatório."),
  senha: yup.string().min(6, "Password minimum 6 characters").required("O campo Senha é obrigatório."),
  
});



export default function Cadastro({ navigation }) {

  const {control,handleSubmit,formState: { errors },} = useForm({resolver: yupResolver(schema),
  });

  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisibleError, setModalVisibleError] = useState(false);

  const modalVisivel = () => {
    setModalVisible(!modalVisible);
  };

  function handleSingIn(data) {

    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, data.email, data.senha)
      .then((userCredential) => {
        
        const user = userCredential.user;
        
      
      console.log("Registro");
      console.log(data);
      modalVisivel();
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if(errorCode == "auth/email-already-in-use"){
          popaError();
          return;
        }
        console.error(errorMessage, errorCode )
       
      });
  }

  function handleHome() {
    navigation.navigate("Login");
    
  }

  function popaError() {
    setModalVisibleError(!modalVisibleError);
  }

  function handleRegistro() {
    navigation.navigate("Cadastro");
    popaError() == false;


  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerForm}>
          <Text style={styles.title}>Registre-Se</Text>
          <Controller
            control={control}
            name="email"
            type="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  {
                    borderWidth: errors.email && 1,
                    borderColor: errors.email && "#ff375b",
                  },
                ]}
                onChangeText={onChange}
                onBlur={onBlur} //chamado quando o textinput é tocado.
                value={value}
                keyboardType="email-address"
                placeholder="Digite Seu Email"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.labelError}>{errors.email?.message}</Text>
          )}
          
          <Controller
            control={control}
            name="senha"
            type="number"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  {
                    borderWidth: errors.senha && 1,
                    borderColor: errors.senha && "#ff375b",
                  },
                ]}
                onChangeText={onChange}
                onBlur={onBlur} //chamado quando o textinput é tocado.
                value={value}
                keyboardType="numeric"
                placeholder="Digite Sua Senha"
                secureTextEntry={true}
              />
            )}
          />
          {errors.senha && (
            <Text style={styles.labelError}>{errors.senha?.message}</Text>
          )}

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              backdropTransitionInTiming={200}
              backdropTransitionOutTiming={100}
              onRequestClose={() => {
                Alert.alert("Chamado Realizado com Sucesso !");
                this.setState({ modalVisible: !modalVisible });
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Usuário Cadastrado com Sucesso!
                  </Text>
                  <TouchableOpacity style={styles.butom} onPress={handleHome}>
                    <Image
                      source={require("../../assets/imagens/confirmacao.png")}
                      style={styles.logoOk}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibleError}
              backdropTransitionInTiming={200}
              backdropTransitionOutTiming={100}
              onRequestClose={() => {
                Alert.alert("Usuario Ja Cadastrado !");
                this.setState({ modalVisibleError: !modalVisibleError });
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Usuário já Cadastrado no Sistema !
                  </Text>
                  <TouchableOpacity style={styles.butom} onPress={handleRegistro}>
                    <Image
                      source={require("../../assets/imagens/usuarioJacadastrado.png")}
                      style={styles.logoOk}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleSingIn)}>
            <Text style={styles.titleInputRegistrar}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  imageBackground: {
    flex: 3,
    resizeMode: "cover",
    width: "100%",
  },
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: "rgba(18, 70, 255, 1)",
    fontWeight: "bold",
  },
  containerForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderRadius: 12,
    color: "#121212",
    margin: "5%",
  },
  titleInput: {
    color: "rgba(18, 70, 255, 1)",
    fontSize: 16,
  },
  Text: {
    marginTop: "7%",
    color: "#121212",
  },
  button: {
    marginTop: "7%",
    backgroundColor: "rgba(18, 70, 255, 1)",
    width: "60%",
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  labelError: {
    alignSelf: "flex-start",
    color: "#ff375b",
    marginBottom: 8,
  },
  titleInputRegistrar: {
    color: "#FFF",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  logoOk: {
    alignItems: "center",
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

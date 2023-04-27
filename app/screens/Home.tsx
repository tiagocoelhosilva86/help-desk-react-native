import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const  Home = () => {
    
  const navigation = useNavigation();
  
  function handleAbrirChamado(data) {
    console.log("Entrou");
    console.log(data);
    navigation.navigate("AbrirChamado");
  }

  function handleListaChamados(data) {
    console.log("Entrou");
    console.log(data);
    navigation.navigate("ListaChamados");
  }

  function handleRelatorioChamados(data) {
    console.log("Entrou");
    console.log(data);

    navigation.navigate("RelatorioChamados");
  }

  function handleAdicionarUsuario(data) {
    console.log("Entrou");
    console.log(data);

    navigation.navigate("AdicionarUsuario");
  }

  function handleConfiguracao(data) {
    console.log("Entrou");
    console.log(data);
    navigation.navigate("Informacao");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerMenu}>
          <TouchableOpacity style={styles.butom} onPress={handleAbrirChamado}>
            <Image
              source={require("../../assets/imagens/addchamado.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.textoIcon}>Abrir Chamado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMenu}>
          <TouchableOpacity style={styles.butom} onPress={handleListaChamados}>
            <Image
              source={require("../../assets/imagens/listachamados.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.textoIcon}>Lista de Chamados</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMenu}>
          <TouchableOpacity
            style={styles.butom}
            onPress={handleRelatorioChamados}
          >
            <Image
              source={require("../../assets/imagens/relatorio.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.textoIcon}>Relatorio de Chamados</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.containerMenu}>
                <TouchableOpacity 
                style={styles.butom} 
                onPress={handleAdicionarUsuario}>
                    <Image source={require('../../assets/imagens/addusuario.png')} 
                        style={styles.buttonImageIconStyle} 
                    /> 
                    <Text style={styles.textoIcon}>Adicionar Usuario</Text>
                </TouchableOpacity>
            </View> */}

        <View style={styles.containerMenu}>
          <TouchableOpacity style={styles.butom} onPress={handleConfiguracao}>
            <Image
              source={require("../../assets/imagens/config.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.textoIcon}>Informação</Text>
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
    paddingTop: 30,
  },
  containerMenu: {
    padding: 15,
  },
  logo: {
    width: 70,
    height: 100,
    resizeMode: "contain",
    flex: 1,
    backgroundColor: "#e9e9e9",
  },
  containerMenuTexto: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  textoIcon: {
    fontSize: 18,
    marginRight: 1,
    marginLeft: 20,
  },
  containerTextoIcon: {
    backgroundColor: "#e9e9e9",
    flex: 1,
    justifyContent: "center",
  },
  butom: {
    backgroundColor: "#e9e9e9",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonImageIconStyle: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});

export default Home;
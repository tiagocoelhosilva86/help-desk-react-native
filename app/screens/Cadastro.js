
import { StyleSheet , View, Text, TextInput, TouchableOpacity,Modal,Image } from "react-native";
import React, { useState, useEffect } from "react";

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ScrollView } from "react-native-gesture-handler";


const schema = yup.object({
    
    nome: yup.string().required("Informe Seu Nome"),
    email: yup.string().required("Informe Seu Email"),
    // usuario: yup.string().required("Informe Seu Nome De Usuário"),
    senha: yup.string().required("Informe Sua Senha"),
    confirmasenha: yup.string().required("Repita Sua Senha"),
})

  

export default function Cadastro({navigation}) {

    const { control, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema)
    })

    const [modalVisible, setModalVisible] = useState(false);

    const modalVisivel = () => {
      setModalVisible(!modalVisible);
    };
    
    function handleSingIn(data){
        console.log("Entrou");
        console.log(data);
        setModalVisible= true;

        // navigation.reset({
        // index:2,
        // routes: [{name:"Login"}]
        // })  
    }

    function handleHome(){
      navigation.navigate("Login")
      // navigation.reset({
      // index:0,
      // routes: [{name:"Home"}]
      //  })
  }

   return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerForm}>
           <Text style={styles.title}>Registre-Se</Text>
            <Controller 
                control={control}
                name="nome"
                render={({ field: { onChange, onBlur, value} }) =>(
                <TextInput

                style={[
                styles.input, {
                    borderWidth: errors.nome && 1,
                    borderColor: errors.nome && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}//chamado quando o textinput é tocado.
                value={value}
                keyboardType='name-phone-pad'
                placeholder="Digite Seu Nome"
                
                />
                )}
            />
            {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}
            <Controller 
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value} }) =>(
                <TextInput

                style={[
                styles.input, {
                    borderWidth: errors.email && 1,
                    borderColor: errors.email && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}//chamado quando o textinput é tocado.
                value={value}
                keyboardType='email-address'
                placeholder="Digite Seu Email"
                
                />
                )}
            />
            {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
            {/* <Controller 
                control={control}
                name="usuario"
                render={({ field: { onChange, onBlur, value} }) =>(
                <TextInput

                style={[
                styles.input, {
                    borderWidth: errors.usuario && 1,
                    borderColor: errors.usuario && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}//chamado quando o textinput é tocado.
                value={value}
                keyboardType='name-phone-pad'
                placeholder="Digite Seu Nome De Usuário"
                
                />
                )}
            />
            {errors.usuario && <Text style={styles.labelError}>{errors.usuario?.message}</Text>} */}
            <Controller 
                control={control}
                name="senha"
                render={({ field: { onChange, onBlur, value} }) =>(
                <TextInput

                style={[
                styles.input, {
                    borderWidth: errors.senha && 1,
                    borderColor: errors.senha && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}//chamado quando o textinput é tocado.
                value={value}
                keyboardType='numeric'
                placeholder="Digite Sua Senha"
                secureTextEntry={true}
                />
                )}
            />
            {errors.criarsenha && <Text style={styles.labelError}>{errors.criarsenha?.message}</Text>}
            <Controller 
                control={control}
                name="confirmasenha"
                render={({ field: { onChange, onBlur, value} }) =>(
                <TextInput

                style={[
                styles.input, {
                    borderWidth: errors.confirmasenha && 1,
                    borderColor: errors.confirmasenha && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}//chamado quando o textinput é tocado.
                value={value}
                keyboardType='numeric'
                placeholder="Repita Sua Senha"
                secureTextEntry={true}
                />
                )}
            />
            {errors.confirmasenha && <Text style={styles.labelError}>{errors.confirmasenha?.message}</Text>}

            <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    backdropTransitionInTiming={200}
                    backdropTransitionOutTiming={100}
                    onRequestClose={() => {
                      Alert.alert('Chamado Realizado com Sucesso !');
                      this.setState({modalVisible: !modalVisible});
                    }}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                      <Text style={styles.modalText}>Usuário Cadastrado com  Sucesso!</Text>
                        <TouchableOpacity 
                          style={styles.butom} 
                          onPress={handleHome}>
                          <Image source={require('../../assets/imagens/confirmacao.png')} 
                            style={styles.logoOk} 
                          /> 
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
             </View>

            <TouchableOpacity style={styles.button}
            onPress={modalVisivel}>
             {/* onPress={handleSubmit(handleSingIn)}>  */}
                    <Text style={styles.titleInputRegistrar}>Registrar</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
        
            
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center",
      height:"100%",
    },
    imageBackground: {
      flex: 3,
      resizeMode: "cover",
      width:"100%",
    },
    title:{
      fontSize:34,
      marginBottom:34,
      color:'rgba(18, 70, 255, 1)',
      fontWeight: 'bold'
    },
    containerForm: {
      flex: 1,
      justifyContent:'center',
      alignItems:"center",
      borderColor: 'black',
      
    },
    input: {
      width:"90%",
      height:40,
      backgroundColor:'#FFFFFF',
      paddingHorizontal: 8,
      marginBottom: 8,
      borderWidth: 2,
      borderRadius: 12,
      color:'#121212',
      margin:'5%',
    },
    titleInput: {
      color:'rgba(18, 70, 255, 1)',
      fontSize:16,
      
    },
    Text: {
      marginTop: "7%",
      color:'#121212',
    },
    button: {
      marginTop:"7%",
      backgroundColor:'rgba(18, 70, 255, 1)',
      width:"60%",
      height:40,
      borderRadius: 7,
      justifyContent:'center',
      alignItems:"center",
    },
    labelError:{
      alignSelf:'flex-start',
      color:'#ff375b',
      marginBottom: 8,
    },
    titleInputRegistrar:{
      color:'#FFF',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
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
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    logoOk: {
      alignItems:"center",
      width:100,
      height:100,
      resizeMode:'contain',
    }
  });
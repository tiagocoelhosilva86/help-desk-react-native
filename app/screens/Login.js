import React from "react";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from "react-native";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ScrollView } from "react-native-gesture-handler";





// const imagemServiceDesk ='../assets/imagens/service-desk.jpg';
const imagemHelpDesk ='../assets/imagens/helpDesk .png';



const schema = yup.object({
  usuario: yup.string().required("Informe Seu Usuario"),
  senha: yup.string().required("Informe Sua Senha"),
})



export default function Login({navigation}) {

  const { control, handleSubmit, formState: { errors } } = useForm ({
    resolver: yupResolver(schema)
  })

  function handleSingIn(data){
   console.log("Entrou");
   console.log(data);
   navigation.reset({
   index:0,
    routes: [{name:"Home"}]
   })  
  }

  function handlePrimeiroAcesso(){
   console.log("Cadastrar Usuario");
   navigation.reset({
    routes: [{name:"Cadastro"}]
   })
  }

  function handleEsqueceuSuaSenha(){
    console.log("Esqueceu Sua Senha");
    navigation.reset({
      routes: [{name:"RecuperarSenha"}]
     })
  }


  return (

    
    <View style={styles.container}>
      
        <View style={styles.containerForm}>
                  {/* <Text style={styles.title}>Help Desk</Text> */}
                  <View>
                    <Image source={require('../../assets/imagens/helpDesk.png')}
                    style={styles.logo}/>
                  </View>
                <Controller
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
                        placeholder="Usuario"
                      />
                    )}
                  />
                {errors.usuario && <Text style={styles.labelError}>{errors.usuario?.message}</Text>}
                {/* <Text style={styles.titleInput}>Senha</Text> */}
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
                    placeholder="Digite Sua Senha"
                    keyboardType='numeric'
                    secureTextEntry={true}
                    />
                  )}
                />
                {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}


                <TouchableOpacity style={styles.buttonEsqueceuSuaSenha} onPress={handlePrimeiroAcesso}>
                  <Text style={styles.titleInput}>Primeiro Acesso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPrimeiroAcesso} onPress={handleEsqueceuSuaSenha}>
                  <Text style={styles.titleInput}>Esqueceu a Senha</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSingIn)}>
                  <Text style={styles.titleInputEnviar}>Enviar</Text>
                </TouchableOpacity>

              </View>
      
       
     
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    height:"100%",
  },
  logo: {
    width:100,
    height:100,
    resizeMode:'contain',
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
    fontSize: 18,
  },
  buttonPrimeiroAcesso: {
    marginTop:"7%",
    
  },
  buttonEsqueceuSuaSenha: {
    marginTop:"7%", 
  },
  labelError:{
    alignSelf:'flex-start',
    color:'#ff375b',
    marginBottom: 8,
  },
  titleInputEnviar:{
    color:'#FFF',
  }
});

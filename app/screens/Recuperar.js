import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LottieView from  "lottie-react-native";


const schema = yup.object({

    email: yup.string().required("Informe Seu Email Cadastrado"),
})

export default function Recuperar({navigation}) {


    const { control, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema)
    })
    
    function handleSingIn(data){
        console.log("Senha Recuperada");
        console.log(data);
        navigation.reset({
        index:3,
        routes: [{name:"SenhaRecuperada"}]
        })  
    }


   return (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.containerForm}>
               <Text style={styles.title}>Recuperar Senha</Text>
                <View>
                  <LottieView style={styles.LottieView} source={require("../../assets/imagens/data-security.json")} loop autoPlay />
                </View>
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
                    placeholder="Digite Seu Email Cadastrado"
                    
                    />
                    )}
                />
                {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

                <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSingIn)}>
                        <Text style={styles.buttonRecuperar}>Enviar</Text>
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
      marginBottom:30,
      marginTop:30,
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
    buttonRecuperar:{
      color:'#FFF',
    },
    LottieView:{
      width:150,
    }
 
  });
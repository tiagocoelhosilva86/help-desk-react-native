import React from "react";
import { StyleSheet , View, Text, TouchableOpacity, Image } from "react-native";


export default function SenhaRecuperada({navigation}) {

    function handleSingIn(data){
        console.log("Verifique sua caixa de email ");
        console.log(data);
        navigation.navigate("Login")
        // navigation.reset({
        // index:4,
        // routes: [{name:"Home"}]
        // })  
    }

   return (
    <View style={styles.container}>
        
        <View style={styles.containerTextoEmail}>
            <Text style={styles.title}>E-mail Enviado com Sucesso!</Text>
        </View>
        <View style={styles.containerImageEmail}>
        <Image source={require('../../assets/imagens/email.png')}
              style={styles.logoEmail}/>
        </View>
        <View style={styles.containerForm}>
            <Text style={styles.titleTexto}>Verifique Sua caixa de Email</Text>
            <TouchableOpacity style={styles.button} onPress={handleSingIn}>
                            <Text style={styles.buttonOk}>Ok</Text>
            </TouchableOpacity>
        </View>
        
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center",
      height:"100%",
      paddingTop:30,
    },
    containerForm: {
        flex: 1,
        justifyContent:'center',
        alignItems:"center",
        borderColor: 'black',
    },
    title:{
        textAlign:'center',
        fontSize:34,
        marginBottom:34,
        color:'rgba(18, 70, 255, 1)',
        fontWeight: 'bold'
    },
      titleTexto:{
        textAlign:'center',
        fontSize:20,
        marginBottom:34,
        color:'#666666',
        fontWeight: '100'
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
    buttonOk:{
        color:'#FFF',
    },
    logoEmail: {
        width:100,
        height:100,
        resizeMode:'contain',
      },
    containerImageEmail:{
        alignItems:"center",
        height:10,
    },
    containerTextoEmail:{
        paddingTop:10,
    },

});    
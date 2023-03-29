import React from "react";
import { StyleSheet,Image, Text, View,ScrollView,TouchableOpacity } from "react-native";



export default function Configuracao({navigation}) {

 
   return (

    
    <View style={styles.container}>

       <ScrollView>

        <Text>Em construção Configuração</Text>

           {/* <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.butom} onPress={handleAbrirChamado}>
                    <Image source={require('../../assets/imagens/help-support.png')} 
                        style={styles.buttonImageIconStyle} 
                    /> 
                    <Text style={styles.textoIcon}>Abrir Chamado</Text>
                </TouchableOpacity>
            </View>
               

            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.butom} onPress={handleListaChamados}>
                    <Image source={require('../../assets/imagens/listaChamado.png')} 
                        style={styles.buttonImageIconStyle} 
                    /> 
                    <Text style={styles.textoIcon}>Lista de  Chamados</Text>
                </TouchableOpacity>
             </View>



            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.butom} onPress={handleAdicionarUsuario}>
                    <Image source={require('../../assets/imagens/user-add.png')} 
                        style={styles.buttonImageIconStyle} 
                    /> 
                    <Text style={styles.textoIcon}>Adicionar Usuario</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.containerMenu}>
               <TouchableOpacity style={styles.butom} onPress={handleConfiguracao}>
                    <Image source={require('../../assets/imagens/configuracao.png')} 
                        style={styles.buttonImageIconStyle} 
                    /> 
                    <Text style={styles.textoIcon}>Configuração</Text>
                </TouchableOpacity>
            </View> */}
                


                
          
        </ScrollView>
        
           
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
    containerMenu:{
        padding:15,   
    },
    logo:{
        width:70,
        height:100,
        resizeMode:'contain',
        flex:1,
        backgroundColor:'#e9e9e9',
        
    },
    containerMenuTexto:{
        alignItems:'center',
        justifyContent:"space-around",   
    },
    textoIcon:{
        fontSize:18,
        marginRight:1,
        
    },
    containerTextoIcon:{
        backgroundColor:'#e9e9e9',
        flex:1,
        justifyContent:"center",
    },
    butom:{
        backgroundColor:'#e9e9e9',
        alignItems:'center',
         flexDirection: "row",
         borderRadius: 10,
    },
    buttonImageIconStyle:{
        width:130,
        height:100,
        resizeMode:'contain',
    }
});    
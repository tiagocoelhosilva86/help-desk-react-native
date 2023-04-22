import React from "react";
import { StyleSheet , View, Text, ScrollView, TouchableOpacity } from "react-native";



export default function RelatorioChamados({navigation}) {

   

   return (
    <View style={styles.container}>
       <ScrollView>
        <View style={styles.containerTexto}>
        <Text style={styles.title}>Relatorio de Chamados</Text>
        </View>

        <View style={styles.containerCards}>
          <View style={styles.cardVermelho}>
            <Text style={styles.textoCard}>Chamados em Espera</Text>
            <Text style={styles.textoCard}>Total: 22</Text>
          </View>

          <View style={styles.cardLaranja}>
            <Text style={styles.textoCard}>Chamados Em Atendimento</Text>
            <Text style={styles.textoCard}>Total: 12</Text>
          </View>

          <View style={styles.cardVerde}>
            <Text style={styles.textoCard}>Chamados Encerrados</Text>
            <Text style={styles.textoCard}>Total: 45</Text>
          </View>
        </View>
       </ScrollView>
        
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center",
      
    },

    title:{
      marginTop:10,
      fontSize:24,
      marginBottom:34,
      color:'rgba(18, 70, 255, 1)',
      fontWeight: 'bold'
    },
    containerTexto: {
      flex: 1,
      justifyContent:'center',
      alignItems:"center",
      borderColor: 'black',  
    },
    containerCards: {
      flexDirection: 'column',

    },
    cardVermelho:{
      backgroundColor:'#ff0000',
      borderRadius:10,
      height:100,
      flexDirection: 'column',
      justifyContent:"center",
      alignItems:'center',
      marginBottom:25,
      margin:5,
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 10.68,
      elevation: 16,
      
  },
  cardVerde:{
    backgroundColor:'#00ff00',
    borderRadius:10,
    height:100,
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:'center',
    marginBottom:25,
    margin:5,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 10.68,
    elevation: 16,
    
},

cardLaranja:{
  backgroundColor:'#f7ff00',
  borderRadius:10,
  height:100,
  flexDirection: 'column',
  justifyContent:"center",
  alignItems:'center',
  marginBottom:25,
  margin:5,
  shadowColor: "#000",
  shadowOffset: {
  width: 0,
  height: 8,
  },
  shadowOpacity: 0.46,
  shadowRadius: 10.68,
  elevation: 16,
  
},
    textoCard:{
      fontWeight: 'bold',
      fontSize:19,
      marginTop:10,
    }

  });
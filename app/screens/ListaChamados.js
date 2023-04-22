import React from "react";
import { StyleSheet , View, Text, ScrollView} from "react-native";


export default function ListaChamados({navigation}) {

  const chamados = [
    {prioridade: 'Alta', setor: 'Rh', chamado: 'Computador Não liga', data: '01/04/2023'
  },{
    prioridade: 'Baixa', setor: 'Administartivo', chamado: 'Impressora Não Imprime', data: '03/04/2023'
  },{
    prioridade: 'Alta', setor: 'Copa', chamado: 'Relogio De ponto', data: '03/04/2023'
  },{
    prioridade: 'Baixa', setor: 'Administartivo', chamado: 'Impressora Não Imprime', data: '03/04/2023'
  },{
    prioridade: 'Alta', setor: 'Produção', chamado: 'Modem Não Funciona', data: '05/04/2023'
  },{
    prioridade: 'baixa', setor: 'Manutenção', chamado: 'Telefone Não Funciona', data: '10/04/2023'
  }];


    
    function handleSingIn(data){
        console.log("Entrou");
        console.log(data);
        navigation.navigate("Login")  
    }

   return (
    <View style={styles.container}>

     <ScrollView>
        <View style={styles.containerForm}>
           <Text style={styles.title}> Lista de Chamados</Text>
        </View>

        <View style={styles.item}>
            <View style={styles.itemChamados}>

              <View style={styles.containerPrioridade}>
                <Text style={styles.textoPrioridades}>Prioridade:</Text> 
              <View style={styles.quadradoVermelho}> 
                <Text>{'Alta'}</Text>   
                </View>
              </View>

              <View style={styles.containerPrioridades}>
                <Text style={styles.textoPrioridades}>Setor: Rh</Text>
                <Text style={styles.textoPrioridades}>chamado: Computador Não liga</Text>
                <Text style={styles.textoPrioridades}>Data de Abertura: 01/04/2023</Text>
                
                <View style={styles.containerPrioridade}>
                  <Text style={styles.textoPrioridades}>Chamado: </Text> 
                <View > 
                  <Text style={styles.textoPrioridades}>{'Aguardando Atendimento'}</Text>   
                  </View>
                </View>
              </View>
 
            </View>

        </View>

        <View style={styles.item}>
            <View style={styles.itemChamados}>
              
              <View style={styles.containerPrioridade}>
                <Text style={styles.textoPrioridades}>Prioridade:</Text> 
              <View style={styles.quadradoLaranja}> 
                <Text>{'Baixa'}</Text>   
                </View>
              </View>

              <View style={styles.containerPrioridades}>
                <Text style={styles.textoPrioridades}>Setor: Administartivo</Text>
                <Text style={styles.textoPrioridades}>chamado: Impressora Não Imprime</Text>
                <Text style={styles.textoPrioridades}>Data de Abertura: 03/04/2023</Text>
                
                <View style={styles.containerPrioridade}>
                  <Text style={styles.textoPrioridades}>Chamado: </Text> 
                <View > 
                  <Text style={styles.textoPrioridades}>{'Aguardando Atendimento'}</Text>   
                  </View>
                </View>
              </View>
 
            </View>

        </View>

        <View style={styles.item}>
            <View style={styles.itemChamados}>
              
              <View style={styles.containerPrioridade}>
                <Text style={styles.textoPrioridades}>Prioridade:</Text> 
              <View style={styles.quadradoVermelho}> 
                <Text>{'Alta'}</Text>   
                </View>
              </View>

              <View style={styles.containerPrioridades}>
                <Text style={styles.textoPrioridades}>Setor: Copa</Text>
                <Text style={styles.textoPrioridades}>chamado: Relogio De ponto</Text>
                <Text style={styles.textoPrioridades}>Data de Abertura: 03/04/2023</Text>
                
                <View style={styles.containerPrioridade}>
                  <Text style={styles.textoPrioridades}>Chamado: </Text> 
                <View > 
                  <Text style={styles.textoPrioridades}>{'Aguardando Atendimento'}</Text>   
                  </View>
                </View>
              </View>
 
            </View>

        </View>

        <View style={styles.item}>
            <View style={styles.itemChamados}>
              
              <View style={styles.containerPrioridade}>
                <Text style={styles.textoPrioridades}>Prioridade:</Text> 
              <View style={styles.quadradoLaranja}> 
                <Text>{'Baixa'}</Text>   
                </View>
              </View>

              <View style={styles.containerPrioridades}>
                <Text style={styles.textoPrioridades}>Setor: Administartivo</Text>
                <Text style={styles.textoPrioridades}>chamado: Impressora Não Imprime</Text>
                <Text style={styles.textoPrioridades}>Data de Abertura: 03/04/2023</Text>
                
                <View style={styles.containerPrioridade}>
                  <Text style={styles.textoPrioridades}>Chamado: </Text> 
                <View > 
                  <Text style={styles.textoPrioridades}>{'Aguardando Atendimento'}</Text>   
                  </View>
                </View>
              </View>
 
            </View>

        </View>

        <View style={styles.item}>
            <View style={styles.itemChamados}>
              
              <View style={styles.containerPrioridade}>
                <Text style={styles.textoPrioridades}>Prioridade:</Text> 
              <View style={styles.quadradoVermelho}> 
                <Text>{'Alta'}</Text>   
                </View>
              </View>

              <View style={styles.containerPrioridades}>
                <Text style={styles.textoPrioridades}>Setor: Produção</Text>
                <Text style={styles.textoPrioridades}>chamado: Modem Não Funciona</Text>
                <Text style={styles.textoPrioridades}>Data de Abertura: 05/04/2023</Text>
                
                <View style={styles.containerPrioridade}>
                  <Text style={styles.textoPrioridades}>Chamado: </Text> 
                <View > 
                  <Text style={styles.textoPrioridades}>{'Aguardando Atendimento'}</Text>   
                  </View>
                </View>
              </View>
 
            </View>

        </View>

        <View style={styles.item}>
            <View style={styles.itemChamados}>
              
              <View style={styles.containerPrioridade}>
                <Text style={styles.textoPrioridades}>Prioridade:</Text> 
              <View style={styles.quadradoLaranja}> 
                <Text>{'Baixa'}</Text>   
                </View>
              </View>

              <View style={styles.containerPrioridades}>
                <Text style={styles.textoPrioridades}>Setor: Manutenção</Text>
                <Text style={styles.textoPrioridades}>chamado: Telefone Não Funciona</Text>
                <Text style={styles.textoPrioridades}>Data de Abertura: 10/04/2023</Text>
                
                <View style={styles.containerPrioridade}>
                  <Text style={styles.textoPrioridades}>Chamado: </Text> 
                <View > 
                  <Text style={styles.textoPrioridades}>{'Aguardando Atendimento'}</Text>   
                  </View>
                </View>
              </View>
 
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
      height:"100%",
    },
    title:{
      marginTop:10,
      fontSize:24,
      marginBottom:34,
      color:'rgba(18, 70, 255, 1)',
      fontWeight: 'bold'
    },
    item:{
      backgroundColor:'#FFF',
      borderRadius:10,
      flexDirection: 'row-reverse',
      justifyContent:"center",
      marginBottom:15,
      margin:10,
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 10.68,
      elevation: 16,
  },
  itemChamados:{
    marginTop:10,
    flexDirection:'column',
    flexWrap:"wrap"
    
  },
  quadradoVermelho:{
      width:"40%",
      backgroundColor:'#ff0000',
      opacity: 0.9,
      borderRadius:5,
      marginRight:5,
      alignItems:'center',
  },
  quadradoVermelhoChamado:{
    width:"auto",
    backgroundColor:'#ff0000',
    opacity: 0.9,
    borderRadius:5,
    marginRight:5,
    alignItems:'center',
},
  quadradoLaranja:{
    width:"40%",
    backgroundColor:'#f7ff00',
    opacity: 0.9,
    borderRadius:5,
    marginRight:5,
    alignItems:'center',
},
quadradoVerde:{
  backgroundColor:'#00ff00',
  opacity: 0.9,
  borderRadius:5,
  marginRight:5,
  alignItems:'center',
},
containerPrioridade:{
  flexDirection: 'row',
  marginBottom: 3,
},

containerPrioridades:{
  flexDirection: 'column',
  
  
},

textoPrioridades: {
  fontWeight: 'bold',
  fontSize:12,
marginBottom: 3,
  
},

  textoTitulo:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    flexWrap:"wrap"

  },
  ImageIconStyle:{
    marginRight:6,
    height:30,
    width:30,
  },

    containerForm: {
      flex: 1,
      justifyContent:'center',
      alignItems:"center",
      borderColor: 'black',
      
    },

  });
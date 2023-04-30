
import { StyleSheet , View, Text, TextInput, ScrollView, Button, Image, TouchableOpacity, Alert, Modal, Pressable} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import React, { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LottieView from  "lottie-react-native";


const schema = yup.object({
  prioridade: yup.string().required("Informe a Prioridade") ,
  titulo: yup.string().required("Informe o Titulo do Chamado"),
  descricao: yup.string().required("Descrição"),
})



export default function AbrirChamado({navigation}) {

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
        // index:0,
        // routes: [{name:"Home"}]
        // })  
    }

    function handleHome(){
        navigation.reset({
        index:0,
        routes: [{name:"Home"}]
         })
    }

    const PRIORIDADE = [
      {value: 'alta'},
      {value: 'baixa'}
      
    ];

    const [selectedPrioridade, setSelectedPrioridade] = React.useState("");

    console.log(selectedPrioridade);

    const SETOR = [
      {value: 'Administrativo'},
      {value: 'Produção'},
      {value: 'Desenvolvimento'}
      
    ];

    const [selectedSetor, setSelectedSetor] = React.useState("");

    console.log(selectedSetor);

    const [image, setImage] = useState(null);

    const escolherImagemDaGaleria = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };


   return (
   
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerForm}>

          <View style={styles.texto}>
            <Text style={styles.tituloImput}>Setor</Text>
          </View>

          
          <View style={styles.multiSelect}>
            
            <SelectList
             name="setor"
             data={SETOR} 
             setSelected={(val) => setSelectedSetor(val)}
             dropdownStyles={{backgroundColor:'#FFFFFF'}}
             placeholder="Selecione uma Opção"
            />
          </View>

          <View style={styles.texto}>
            <Text style={styles.tituloImput}>Prioridade Do Atendimento</Text>
          </View>


          {/* <Controller 
                  control={control}
                  name="prioridade"
                  render={({ field: { onChange, onBlur, value, } }) =>(

                  <SelectList
                  style={[
                  styles.input, {
                      borderWidth: errors.prioridade && 1,
                      borderColor: errors.prioridade && '#ff375b'
                  }]}
                  onChangeText={onChange}
                  onBlur={onBlur}//chamado quando o textinput é tocado.
                  value={value}
                  data={PRIORIDADE} 
                  setSelected={(val) => setSelectedPrioridade(val)}
                  dropdownStyles={{backgroundColor:'#FFFFFF'}}
                  placeholder="Selecione uma Opção"
                  
                  />
                  )}
              />
              {errors.prioridade && <Text style={styles.labelError}>{errors.prioridade?.message}</Text>} */}

          <View style={styles.multiSelect}>
            <SelectList
            name="prioridade" 
            data={PRIORIDADE} 
            setSelected={(val) => setSelectedPrioridade(val)}
            dropdownStyles={{backgroundColor:'#FFFFFF'}}
            placeholder="Selecione uma Opção"
            />
          </View>
          
           
          <View style={styles.textoInput}>
            <Text style={styles.tituloImput}>Titulo</Text>
          </View>

              <Controller 
                  control={control}
                  name="titulo"
                  render={({ field: { onChange, onBlur, value} }) =>(
                  <TextInput

                  style={[
                  styles.input, {
                      borderWidth: errors.titulo && 1,
                      borderColor: errors.titulo && '#ff375b'
                  }]}
                  onChangeText={onChange}
                  onBlur={onBlur}//chamado quando o textinput é tocado.
                  value={value}
                  placeholder="Digite o Titulo do chamado"
                  
                  />
                  )}
              />
              {errors.titulo && <Text style={styles.labelError}>{errors.titulo?.message}</Text>}

                  <View style={styles.textoInput}>
                     <Text style={styles.tituloImput}>Descrição Do Problema</Text>
                  </View>



              <Controller 
                  control={control}
                  name="descricao"
                  render={({ field: { onChange, onBlur, value} }) =>(
                  <TextInput

                  style={[
                  styles.textDescricao, {
                      borderWidth: errors.descricao && 1,
                      borderColor: errors.descricao && '#ff375b'
                  }]}
                  onChangeText={onChange}
                  onBlur={onBlur}//chamado quando o textinput é tocado.
                  value={value}
                  editable
                  multiline
                  numberOfLines={4}
                  maxLength={250}
                  placeholder="Descreva em curtas palavras o Chamado"
                  
                  />
                  )}
              />
              {errors.descricao && <Text style={styles.labelError}>{errors.descricao?.message}</Text>}

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10,  }}>
                <View style={{padding:10}}>
                  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, }} />}
                </View>
                  
                  <Button 
                   title="Carregar imagem"
                   onPress={escolherImagemDaGaleria}
                   />
              </View>

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
                      <Text style={styles.modalText}>Chamado Realizado com Sucesso!</Text>
                        <TouchableOpacity 
                          style={styles.butom} 
                          onPress={handleHome}>
                            <LottieView style={styles.LottieView} source={require("../../assets/imagens/confirmation")} loop autoPlay />
                          {/* <Image source={require('../../assets/imagens/confirmacao.png')} 
                            style={styles.logoOk} 
                          />  */}
                        </TouchableOpacity>
                        {/* <Text style={styles.modalText}>Chamado Realizado com Sucesso!</Text>
                         <Image source={require('../../assets/imagens/confirmacao.png')}
                         style={styles.logoOk}/>
                        <Pressable
                          style={[styles.buttonModal, styles.buttonClose]}
                          onPress={handleSubmit(handleSingIn)}>
                          <Text style={styles.textStyle}>OK</Text>
                        </Pressable> */}
                      </View>
                    </View>
                  </Modal>
             </View>

              <Pressable style={styles.button}
                   onPress={modalVisivel}>
                {/* onPress={handleSubmit(handleSingIn)}>  */}
                      <Text style={styles.titleInputRegistrar}>Abrir Chamado</Text>
              </Pressable>
                  
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
    tituloImput:{
      fontSize:15,
      color:'rgba(18, 70, 255, 1)',
      fontWeight: 'bold',
      paddingLeft: '5%',
      paddingTop:'5%',
    },
    containerForm: {
       flex: 1,
       justifyContent:'center',
       alignItems:"center",
      borderColor: 'black', 
    },
    multiSelect: {
      paddingHorizontal: 8,
      width:"95%",
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
    textDescricao: {
      width:"90%",
      height:100,
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
    texto: {
      width:"100%",
      padding: 7,
    },
    textoInput: {
      width:"100%",
      paddingLeft: 5,
    },
    // textDescricao: {
    //   width:"70%",
    //   padding: "40%",
    //   height:"20%" ,
    // },
    button: {
      marginTop:"7%",
      backgroundColor:'rgba(18, 70, 255, 1)',
      width:"60%",
      height:40,
      borderRadius: 7,
      justifyContent:'center',
      alignItems:"center",
      margin: 9,
    },
    labelError:{
      alignSelf:'flex-start',
      color:'#ff375b',
      marginBottom: 8,
    },
    titleInputRegistrar:{
      color:'#FFF',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
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
    buttonModal: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      height:40,
      borderRadius: 7,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
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
    },
    LottieView:{
      width:150,
    }
  });

 
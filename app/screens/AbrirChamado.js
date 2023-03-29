
import { StyleSheet , View, Text, TextInput, ScrollView, Button, Image, TouchableOpacity } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import React, { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const schema = yup.object({
    
  titulo: yup.string().required("Informe o Titulo do Chamado"),
  descricao: yup.string().required("Descrição"),
})



export default function AbrirChamado({navigation}) {

    const { control, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema)
    })
    
    function handleSingIn(data){
        console.log("Entrou");
        console.log(data);
        navigation.reset({
        index:0,
        routes: [{name:"ChamadoMsgConfirmacao"}]
        })  
    }

    const PROPRIEDADE = [
      {key: '1',value: 'alta'},
      {key: '2',value: 'baixa'}
      
    ];


    const [selected, setSelected] = React.useState("");

    const SETOR = [
      {key: '1',value: 'Administrativo'},
      {key: '2',value: 'Produção'},
      {key: '3',value: 'Desenvolvimento'}
      
    ];

    const [image, setImage] = useState(null);

    const escolherImagemDaGaleria = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
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
             data={SETOR} 
             setSelected={(val) => setSelected(val)}
             dropdownStyles={{backgroundColor:'#FFFFFF'}}
             placeholder="Selecione uma Opção"
             onSelect = { ( )  =>  alerta ( selecionado ) } 
            />
          </View>

          <View style={styles.texto}>
            <Text style={styles.tituloImput}>Prioridade Do Atendimento</Text>
          </View>

          <View style={styles.multiSelect}>
            <SelectList  
            data={PROPRIEDADE} 
            setSelected={(val) => setSelected(val)}
            dropdownStyles={{backgroundColor:'#FFFFFF'}}
            placeholder="Selecione uma Opção"
            onSelect = { ( )  =>  alerta ( selecionado ) } 

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
             
              <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSingIn)}>
                      <Text style={styles.titleInputRegistrar}>Abrir Chamado</Text>
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
    }
  });

 
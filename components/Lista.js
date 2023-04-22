import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const list = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemEsquerdo}>
                <TouchableOpacity style={styles.quadrado}>
                    
                </TouchableOpacity>
                <Text>{props.Text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
    },
    itemEsquerdo:{

    },
    quadrado:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity: 0.4,
    },
    circular:{

    }

});

export default list;
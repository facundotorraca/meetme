import React, {useState, useEffect, useRef } from 'react';

import { Alert, StyleSheet, View, Text } from 'react-native';



export const Mensajeria = () => {

    const chat = {izq: ["asddasd", "asfdadasdsa", "1121212"], der: ["asdasdasd", "asfdadasdsa", "1121212"]}

    const retornarChat = (i) => (
        <View key={i}>
        <View style={styles.row}>
        <Text style={styles.textDescriptionIzq}>{chat.izq[i]}</Text></View>
        <View style={styles.reverseRow}> 
        <Text style={styles.textDescriptionDer}>{chat.der[i]}</Text></View></View>
    )

    const generarChat = () => {

        const mensajes = []

        chat.izq.forEach((element, index) => {
            mensajes.push(retornarChat(index));
        });

        return mensajes;
    }

    


    return(
    <View style={styles.contenedor}>
        {generarChat()}
       </View>);

}

const styles = StyleSheet.create({
   
    contenedor:{
        backgroundColor: "#fdd687",
        height: '100%',
        resizeMode: 'cover',
    },
    row:{
        flexDirection: "row"
    },
    reverseRow:{
        flexDirection: "row-reverse"
    },

    textDescription:{
        paddingTop: 10,
        paddingBottom: 1,
        paddingLeft: 20,
        paddingRight: 20,
        color: "black",
        fontWeight: "bold",
        
    },
    
})
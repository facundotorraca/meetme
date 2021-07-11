import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export const Mensajeria = () => {
    const FAKE_CHAT = {
        Ana: ['Hola!', 'Siii, vos?', 'Que andas haciendo?'],
        Paulo: ['Holaa, todo tranqui?', 'Sisi', 'Mirando una peli'],
    };

    const chatRow = (index) => (
        <View key={index}>
            <View style={styles.chatAna}>
                <Text style={styles.textDescription}>{FAKE_CHAT.Ana[index]}</Text>
            </View>
            <View style={styles.chatPaulo}>
                <Text style={styles.textDescription}>{FAKE_CHAT.Paulo[index]}</Text>
            </View>
        </View>
    );

    const generarChat = () => {
        const mensajes = [];

        FAKE_CHAT.Paulo.forEach((_, index) => {
            mensajes.push(chatRow(index));
        });

        return mensajes;
    };

    return (
        <View style={styles.container}>
            <View style={styles.chatContainer}>
                {generarChat()}
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.newInput}
                    placeholder="Message..."
                    returnKeyType="send"
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdd687',
        height: '100%',
        resizeMode: 'cover',
    },

    chatContainer: {
        height: '90%'
    },

    newInput: {
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#ccc',
        backgroundColor: '#9C27B0',
        fontSize: 16,
        padding:10,
        height:50,
    },



    chatAna: {
        flexDirection: 'row',
    },

    chatPaulo: {
        flexDirection: 'row-reverse',
    },

    textDescription: {
        paddingTop: 10,
        paddingBottom: 1,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'black',
        fontWeight: 'bold',
    }
});

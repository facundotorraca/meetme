import React, { useState, useEffect, useCallback } from 'react';
import { colors } from '../config';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import { guardarMensaje } from '../actions/index';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PanelBotonesChat = ({ navigation, usuario }) => {
    const buttonSize = 27;

    return (
        <View style={styles.containerBotones}>
            <View />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Regalos', { usuario: usuario })}
            >
                <FontAwesome name="gift" size={buttonSize} color={colors.YELLOW}></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Lugares', { usuario: usuario })}
            >
                <FontAwesome name="glass" size={buttonSize} color={colors.YELLOW}></FontAwesome>
            </TouchableOpacity>
            <View />
        </View>
    );
};

export default function Chat({ route, navigation }) {
    const dispatch = useDispatch();

    const [messages, setMessages] = useState([]);
    let match = route.params.user;

    const mensajes = useSelector((state) => state.general.mensajes);
    const usuarioPropio = useSelector((state) => state.general.usuario);

    let chat = mensajes[`${match.id}`].conversacion;

    let chatMappeado = chat
        .slice()
        .reverse()
        .map((m, i) => {
            return {
                _id: i,
                text: m.mensaje,
                createdAt: m.fecha,
                user: {
                    _id: m.senderMe ? usuarioPropio.id : match.id,
                    name: m.senderMe ? usuarioPropio.nombre : match.nombre,
                },
            };
        });

    useEffect(() => {
        setMessages(chatMappeado);
    }, [chat]);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));

        let nuevoMessage = { ...messages[0], _id: match.id };
        dispatch(guardarMensaje(nuevoMessage));
    }, []);

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{ _id: usuarioPropio.id }}
            />
            <PanelBotonesChat navigation={navigation} usuario={match} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerBotones: {
        height: 75,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    button: {
        width: 50,
        height: 50,
        backgroundColor: colors.PURPLE,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 9,
    },
});

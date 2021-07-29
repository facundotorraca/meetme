import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import { guardarMensaje } from '../actions/index';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config';

const PanelBotonesChat = ({ navigation, usuario }) => {
    return (
        <View style={styles.buttonBar}>
            <Button
                containerStyle={styles.buttonContainer}
                icon={<Icon name="gift" size={30} color={colors.ORANGE} />}
                type="outline"
                onPress={() => navigation.navigate('Regalos', { usuario: usuario })}
            />
            <Button
                containerStyle={styles.buttonContainer}
                icon={<Icon name="glass" size={30} color={colors.ORANGE} />}
                type="outline"
                onPress={() => navigation.navigate('Pubs', { usuario: usuario })}
            />
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
    }, []);

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
    buttonBar: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: colors.ORANGE,
    },
    buttonContainer: { backgroundColor: 'white' },
});

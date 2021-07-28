import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import { guardarMensaje } from '../actions/index';

export default function Chat({ route }) {
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
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{ _id: usuarioPropio.id }}
        />
    );
}

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat({ route }) {
    const [messages, setMessages] = useState([]);
    const userName = 'asdasda TODO';

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'buenas, como andas?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: userName,
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    );
}

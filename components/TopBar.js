import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { colors, menus } from '../config';

export default function TopBar({ navigation, menu }) {
    const defaultIconColor = '#5C5C5C';
    const iconSize = 27;

    const [fireIconColor, setFireIconColor] = useState(defaultIconColor);
    const [chatIconColor, setChatIconColor] = useState(defaultIconColor);
    const [userIconColor, setUserIconColor] = useState(defaultIconColor);
    const [pubsIconColor, setPubsIconColor] = useState(defaultIconColor);

    useEffect(() => {
        switch (menu) {
            case menus.MEETME:
                setFireIconColor(colors.ORANGE);
                break;

            case menus.INBOX:
                setChatIconColor(colors.PURPLE);
                break;
        
            case menus.USER:
                setUserIconColor(colors.YELLOW);
                break;

            case menus.PUBS:
                setPubsIconColor(colors.DARK_PURPLE);
                break;

            default:
                break;
        }
    }, []);

    return (
        <View style={styles.container}>
            <FontAwesome5
                name="fire"
                size={iconSize}
                color={fireIconColor}
                onPress={() => navigation.navigate('Meetme')}
            ></FontAwesome5>

            <FontAwesome
                name="comments"
                size={iconSize}
                color={chatIconColor}
                onPress={() => navigation.navigate('Inbox')}
            ></FontAwesome>

            <FontAwesome5
                name="cocktail"
                size={iconSize}
                color={pubsIconColor}
                onPress={() => navigation.navigate('Pubs')}
            ></FontAwesome5>

            <FontAwesome
                name="user"
                size={iconSize}
                color={userIconColor}
                onPress={() => navigation.navigate('Inbox')}
            ></FontAwesome>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,
    },
});

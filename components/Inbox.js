import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { BigHead } from 'react-native-bigheads';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../config';
import { useSelector } from 'react-redux';

export const InboxScreen = ({ navigation }) => {
    const { top, bottom } = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, marginTop: top + 10, marginBottom: bottom }}>
            <View style={{ height: 20 }} />
            <Inbox navigation={navigation} />
        </View>
    );
};

var randomColor = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
};

export default function Inbox({ navigation }) {
    const users = useSelector((state) => state.general.usuariosTotales);
    const chats = useSelector((state) => state.general.mensajes);

    let matches = users.filter((u) => u.match == true);

    const chatItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.chatCard}
                onPress={() => navigation.navigate('Chat', { userName: item.nombre })}
            >
                <View style={styles.chatInfo}>
                    <View style={styles.userImageWrapper}>
                        <BigHead
                            accessory="shades"
                            bgColor="yellow"
                            bgShape="circle"
                            body="chest"
                            clothing="tankTop"
                            clothingColor="black"
                            eyebrows="angry"
                            eyes="wink"
                            facialHair="mediumBeard"
                            graphic="vue"
                            hair="short"
                            hairColor="black"
                            hat="none"
                            hatColor="green"
                            lashes={false}
                            lipColor="purple"
                            mouth="open"
                            showBackground={true}
                            size={80}
                            skinTone="brown"
                        />
                    </View>
                    <View style={styles.chatDescription}>
                        <View style={styles.userInfoContainer}>
                            <Text style={styles.chatUserName}>{item.nombre}</Text>
                            <Text style={styles.chatPostTime}>
                                {chats[`${item.id}`]?.conversacion?.[
                                    chats[`${item.id}`]?.conversacion?.length - 1
                                ].fecha.toString()}
                            </Text>
                        </View>
                        <Text style={styles.messageText}>
                            {
                                chats[`${item.id}`]?.conversacion?.[
                                    chats[`${item.id}`]?.conversacion?.length - 1
                                ].mensaje
                            }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={matches}
                keyExtractor={(usuario) => usuario.id.toString()}
                renderItem={chatItem}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    },

    chatCard: {
        width: '100%',
    },

    chatInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    userImageWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 10,
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    chatDescription: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 10,
        marginLeft: 0,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    chatUserName: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    chatPostTime: {
        fontSize: 12,
        color: '#666',
    },

    messageText: {
        fontSize: 14,
        color: '#333333',
    },
});

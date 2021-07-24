import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { BigHead } from 'react-native-bigheads';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../config';

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

const Messages = [
    {
        id: '1',
        userName: 'Lucia Ramirez',
        messageTime: '4 mins ago',
        messageText: 'buenas, como andas?',
    },
    {
        id: '2',
        userName: 'Florencia Toloza',
        messageTime: '1 hours ago',
        messageText: 'si obvio! Igual despues vemos que onda',
    },
    {
        id: '3',
        userName: 'Julieta Fernandez',
        messageTime: '2 hours ago',
        messageText: 'cansada',
    },
    {
        id: '4',
        userName: 'Gabriela Gimenez',
        messageTime: '1 day ago',
        messageText: 'jajajaja noo, me re colgue',
    },
    {
        id: '5',
        userName: 'Martina Montero',
        messageTime: '2 days ago',
        messageText: 'hablamos',
    },
];

export default function Inbox({ navigation }) {
    const chatItem = ({ item }) => (
        <TouchableOpacity
            style={styles.chatCard}
            onPress={() => navigation.navigate('Chat', { userName: item.userName })}
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
                        <Text style={styles.chatUserName}>{item.userName}</Text>
                        <Text style={styles.chatPostTime}>{item.messageTime}</Text>
                    </View>
                    <Text style={styles.messageText}>{item.messageText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={Messages}
                keyExtractor={(item) => item.id}
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

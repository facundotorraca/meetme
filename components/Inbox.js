import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

const Messages = [
    {
        id: '1',
        userName: 'Jenny Doe',
        userImg: require('../assets/users/user-3.jpg'),
        messageTime: '4 mins ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '2',
        userName: 'John Doe',
        userImg: require('../assets/users/user-1.jpg'),
        messageTime: '2 hours ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '3',
        userName: 'Ken William',
        userImg: require('../assets/users/user-4.jpg'),
        messageTime: '1 hours ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '4',
        userName: 'Selina Paul',
        userImg: require('../assets/users/user-6.jpg'),
        messageTime: '1 day ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '5',
        userName: 'Christy Alex',
        userImg: require('../assets/users/user-7.jpg'),
        messageTime: '2 days ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native.',
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
                    <FontAwesome
                        name={'question-circle'}
                        size={53}
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
        backgroundColor: '#ffffff',
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
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: '',
    },

    chatPostTime: {
        fontSize: 12,
        color: '#666',
        fontFamily: '',
    },

    messageText: {
        fontSize: 14,
        color: '#333333',
    },
});

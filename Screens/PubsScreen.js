import React from 'react';
import { menus } from '../config';
import TopBar from '../components/TopBar';
import { ListItem } from 'react-native-elements';
import { StyleSheet, View, Text, Card } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

export default function PubsScreen({ navigation }) {
    const pubs = [
        { id: 1, name: 'HOLA1', location: 'BSAS', link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg' },
        { id: 2, name: 'HOLA2', location: 'BSAS', link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg' },
        { id: 3, name: 'HOLA3', location: 'BSAS', link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg' },
        { id: 4, name: 'HOLA4', location: 'BSAS', link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg' },
        { id: 5, name: 'HOLA5', location: 'BSAS', link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg' },
        { id: 6, name: 'HOLA6', location: 'BSAS', link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg' },
    ];

    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} menu={menus.PUBS} />
            {pubs.map((pub, index) => (
                <ListItem key={index} bottomDivider>
                    <Avatar source={{uri: pub.link}} />
                    <ListItem.Content>
                        <ListItem.Title>{pub.name}</ListItem.Title>
                        <ListItem.Subtitle>{pub.location}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    pubCard: {
        backgroundColor: 'rgba(56, 172, 236, 1)',
        borderWidth: 0,
        borderRadius: 20,
    },

    time: {
        fontSize: 38,
        color: '#fff',
    },

    notes: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'capitalize',
    },
});

import React, { useState } from 'react';
import { menus } from '../config';
import TopBar from '../components/TopBar';
import { ListItem, Card, Avatar, Input, Button, Image } from 'react-native-elements';
import { StyleSheet, View, Text, Picker } from 'react-native';

export const PubScreen = (props) => {
    const [value, setValue] = useState('');
    const [invitado, setInvitado] = useState(0);

    const pub = props.route.params.pub;

    return (
        <View style={styles.container}>
            <TopBar navigation={props.navigation} menu={menus.PUBS} />
            <View>
                <Card>
                    <Card.Title>{pub.name}</Card.Title>
                    <Card.Divider />
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: pub.link }}
                    >
                        <Text style={{ marginBottom: 10 }}>{pub.location}</Text>
                    </Image>
                </Card>

                <Picker 
                    selectedValue={invitado}
                    onValueChange={(itemValue, itemIndex) => setInvitado(itemValue)}
                >
                    <Picker.Item label="Juan" value={0} />
                    <Picker.Item label="Pedro" value={1} />
                    <Picker.Item label="Natalia" value={2} />
                </Picker>

                <Input
                    placeholder="Mensaje de invitacion"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    style={styles.input}
                    onChangeText={(value) => setValue(value)}
                />

                <Button
                    title="Invitar!"
                />
            </View>
        </View>
    );
};

export default function PubsScreen({ navigation }) {
    const pubs = [
        {
            id: 1,
            name: 'HOLA1',
            location: 'BSAS',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
        {
            id: 2,
            name: 'HOLA2',
            location: 'BSAS',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
        {
            id: 3,
            name: 'HOLA3',
            location: 'BSAS',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
        {
            id: 4,
            name: 'HOLA4',
            location: 'BSAS',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
        {
            id: 5,
            name: 'HOLA5',
            location: 'BSAS',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
        {
            id: 6,
            name: 'HOLA6',
            location: 'BSAS',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
    ];

    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} menu={menus.PUBS} />
            {pubs.map((pub, index) => (
                <ListItem
                    key={index}
                    onPress={() => navigation.navigate('Pub', { pub: pub })}
                    bottomDivider
                >
                    <Avatar source={{ uri: pub.link }} />
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

    image: {
        height: 150,
        width: 150,
        borderRadius: 25
    },

    notes: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'capitalize',
    },
});

import React, { useState } from 'react';
import { menus } from '../config';
import TopBar from '../components/TopBar';
import { ListItem, Card, Avatar, Input, Button, Image } from 'react-native-elements';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const MensajeRegalo = (props) => {
    const mensaje = props.route.params.mensaje;
    const user = props.route.params.user;

    return (
        <View style={styles.container}>
            <TopBar navigation={props.navigation} menu={menus.REGALO} />
            <View>
                <Text>Tu regalo a {user.name} fue enviada con exito!</Text>
                <Card>
                    <Card.Title>Carta</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10 }}>{mensaje}</Text>
                </Card>
            </View>
        </View>
    );
};

export const Regalo = (props) => {
    const [value, setValue] = useState('Juan');
    const [invitado, setInvitado] = useState(0);

    const regalo = props.route.params.regalo;

    return (
        <View style={styles.container}>
            <TopBar navigation={props.navigation} menu={menus.REGALO} />
            <View>
                <Card>
                    <Card.Title>{regalo.name}</Card.Title>
                    <Card.Divider />
                    <Image style={styles.image} resizeMode="cover" source={{ uri: regalo.link }}>
                        <Text style={{ marginBottom: 10 }}>{regalo.location}</Text>
                    </Image>
                </Card>

                <Picker
                    selectedValue={invitado}
                    onValueChange={(itemValue, itemIndex) => setInvitado(itemValue)}
                >
                    <Picker.Item label="Juan" value="Juan" />
                    <Picker.Item label="Pedro" value="Pedro" />
                    <Picker.Item label="Natalia" value="Natalia" />
                </Picker>

                <Input
                    placeholder="Carta"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    style={styles.input}
                    onChangeText={(value) => setValue(value)}
                />

                <Button
                    title="Enviar!"
                    onPress={() =>
                        props.navigation.navigate('MensajeRegalo', {
                            mensaje: value,
                            user: invitado,
                        })
                    }
                />
            </View>
        </View>
    );
};

export default Regalos = ({ navigation }) => {
    const regalos = [
        {
            id: 1,
            name: 'regalo1',
            precio: '$40',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
        {
            id: 2,
            name: 'regalo1',
            precio: '$40',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
        {
            id: 3,
            name: 'regalo1',
            precio: '$40',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/20/93/your-friendly-irish-pub.jpg',
        },
    ];
    const {top, bottom} = useSafeAreaInsets()

    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={navigation} menu={menus.REGALO} />
            {regalos.map((r, index) => (
                <ListItem
                    key={index}
                    onPress={() => navigation.navigate('Regalo', { regalo: r })}
                    bottomDivider
                >
                    <Avatar source={{ uri: r.link }} />
                    <ListItem.Content>
                        <ListItem.Title>{r.name}</ListItem.Title>
                        <ListItem.Subtitle>{r.location}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    );
};

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
        borderRadius: 25,
    },

    notes: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'capitalize',
    },
});

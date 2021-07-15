import React, { useState } from 'react';
import { menus } from '../config';
import TopBar from '../components/TopBar';
import { ListItem, Card, Avatar, Input, Button, Image } from 'react-native-elements';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const MensajeRegalo = (props) => {
    const mensaje = props.route.params.mensaje;
    const user = props.route.params.user;
    const {top, bottom} = useSafeAreaInsets()

    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={props.navigation} menu={menus.REGALO} />
            <View style={{marginTop: 20}}>
                <Text style={{alignSelf: 'center', marginTop: 15}}>Tu regalo a {user} fue enviada con exito!</Text>
                <Card>
                    <Card.Title>Mensaje</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10 }}>{mensaje}</Text>
                </Card>
            </View>
        </View>
    );
};

export const Regalo = (props) => {
    const [value, setValue] = useState('');
    const [invitado, setInvitado] = useState('Lucia Ramirez');
    const {top, bottom} = useSafeAreaInsets()
    const regalo = props.route.params.regalo;

    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={props.navigation} menu={menus.REGALO} />
            <View style={{marginTop: 20}}>
                <Card>
                    <Card.Title style={{fontSize: 19}}>{regalo.name}</Card.Title>
                    <Card.Divider />
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Image style={styles.image} resizeMode="cover" source={{ uri: regalo.link }}/>
                        <Text style={{
                            marginRight: 25,
                            fontWeight: 'bold',
                            fontSize: 23
                            }}>{regalo.precio}</Text>
                    </View>
                </Card>

                <Picker
                    selectedValue={invitado}
                    onValueChange={(itemValue, itemIndex) => setInvitado(itemValue)}
                >
                    <Picker.Item label="Lucia Ramirez" value="Lucia Ramirez" />
                    <Picker.Item label="Florencia Toloza" value="Florencia Toloza" />
                    <Picker.Item label="Julieta Fernandez" value="Julieta Fernandez" />
                    <Picker.Item label="Gabriela Gimenez" value="Gabriela Gimenez" />
                    <Picker.Item label="Martina Montero" value="Martina Montero" />
                </Picker>

                <Input
                    placeholder="Escribe un mensaje"
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
            name: 'Caja de Chocolates',
            precio: '$500',
            link: 'data:image/jpeg;base64,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',
        },
        {
            id: 2,
            name: 'Ramo de Flores',
            precio: '$900',
            link: 'https://i.pinimg.com/736x/ff/83/06/ff83064edeb9e91462a471118544f27b.jpg',
        },
        {
            id: 3,
            name: '1/4 kg Helado',
            precio: '$420',
            link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
        },
    ];
    const {top, bottom} = useSafeAreaInsets()

    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={navigation} menu={menus.REGALO} />
            <View style={{marginTop: 20}}>
                {regalos.map((r, index) => (
                    <ListItem
                        key={index}
                        onPress={() => navigation.navigate('Regalo', { regalo: r })}
                        bottomDivider
                    >
                        <Avatar source={{ uri: r.link }} />
                        <ListItem.Content>
                            <ListItem.Title style={{
                                fontWeight: 'bold',
                                fontSize: 19
                            }}>{r.name}</ListItem.Title>
                            <ListItem.Subtitle>{r.precio}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
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

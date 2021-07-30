import React, { useEffect, useState } from 'react';
import { menus } from '../config';
import { ListItem, Card, Avatar, Input, Button, Image } from 'react-native-elements';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../config/index.js';
import { guardarRegalo } from '../actions';
import { useDispatch } from 'react-redux';

export const MensajeRegalo = (props) => {
    const dispatch = useDispatch();
    const mensaje = props.route.params.mensaje;
    const user = props.route.params.user;
    const regalo = props.route.params.regalo;
    const { navigation } = props;

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
                backgroundColor: colors.PINK,
            }}
        >
            <View style={{ marginTop: 20 }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        marginTop: 15,
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}
                >
                    Tu regalo a {user.nombre} fue enviada con exito!
                </Text>
                <Card
                    containerStyle={{
                        backgroundColor: colors.YELLOW,
                    }}
                >
                    <Card.Title>Mensaje</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10, alignSelf: 'center' }}>{mensaje}</Text>
                </Card>
                <Button
                    title={'Volver al chat!'}
                    style={styles.button}
                    onPress={() => {
                        dispatch(guardarRegalo(user, mensaje, regalo));
                        navigation.navigate('Chat', { user: user });
                    }}
                    type="clear"
                />
            </View>
        </View>
    );
};

export const Regalo = (props) => {
    const [value, setValue] = useState('');
    const [envio, setEnvio] = useState(getRandomInt(15, 300));
    const { top, bottom } = useSafeAreaInsets();
    const regalo = props.route.params.regalo;
    const usuario = props.route.params.usuario;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
                backgroundColor: colors.PINK,
            }}
        >
            <View style={{ marginTop: 20 }}>
                <Card
                    containerStyle={{
                        backgroundColor: colors.YELLOW,
                    }}
                >
                    <Card.Title style={{ fontSize: 19 }}>{regalo.name}</Card.Title>
                    <Card.Divider />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: regalo.link }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text
                                style={{
                                    marginRight: 25,
                                    fontWeight: 'bold',
                                    fontSize: 23,
                                }}
                            >
                                {regalo.precio}
                            </Text>
                            <Text
                                style={{
                                    marginRight: 25,
                                    fontWeight: 'bold',
                                    fontSize: 10,
                                }}
                            >
                                precio envío: ${envio}
                            </Text>
                        </View>
                    </View>
                </Card>

                <Text style={styles.invitacion}>
                    Estas eligiendo un regalo para: {usuario.nombre}
                </Text>

                <Input
                    placeholder="Escribe un mensaje"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    style={styles.input}
                    onChangeText={(value) => setValue(value)}
                />

                <View style={{ padding: 10 }}>
                    <Button
                        containerStyle={{ borderRadius: 20, marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: colors.PURPLE }}
                        title="Enviar!"
                        onPress={() =>
                            props.navigation.navigate('MensajeRegalo', {
                                mensaje: value,
                                user: usuario,
                                regalo: regalo,
                            })
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default Regalos = (props) => {
    const { navigation } = props;
    const usuario = props.route.params.usuario;

    const regalos = [
        {
            id: 1,
            name: 'Caja de Chocolates',
            precio: '$500',
            link: 'https://i.pinimg.com/736x/ff/83/06/ff83064edeb9e91462a471118544f27b.jpg',
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
    const { top, bottom } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
            }}
        >
            <View style={{ marginTop: 20 }}>
                {regalos.map((r, index) => (
                    <ListItem
                        containerStyle={{ backgroundColor: colors.PINK }}
                        key={index}
                        onPress={() =>
                            navigation.navigate('Regalo', { regalo: r, usuario: usuario })
                        }
                        bottomDivider
                    >
                        <Avatar source={{ uri: r.link }} />
                        <ListItem.Content>
                            <ListItem.Title
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 19,
                                }}
                            >
                                {r.name}
                            </ListItem.Title>
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

    invitacion: { fontSize: 25, textAlign: 'center', padding: 10 },
    button: {
        backgroundColor: colors.YELLOW,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 9,
        margin: 10,
    },
});

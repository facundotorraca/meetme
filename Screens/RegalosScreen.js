import React, { useState } from 'react';
import { Card, Button } from 'react-native-elements';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../config/index.js';
import { guardarRegalo } from '../actions';
import { useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import GiftCard from '../components/GiftCard.js';
import { giftType } from '../reducers/initialState.js';
import { FontAwesome5 } from '@expo/vector-icons';

export const MensajeRegalo = (props) => {
    const dispatch = useDispatch();

    const { navigation } = props;
    const { mensaje, user, regalo } = props.route.params;

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
            }}
        >
            <Card containerStyle={{ ...styles.giftSentCard, backgroundColor: regalo.color }}>
                <Card.Title>
                    <Text style={styles.giftSentCardTitle}>
                        {'Tu regalo a \n'}{' '}
                        <Text style={{ color: colors.DARK_PURPLE }}>{user.nombre}</Text>{' '}
                        {'\n fue enviado con exito!'}
                    </Text>
                </Card.Title>

                <View>
                    <Text style={{ alignSelf: 'center' }}>
                        <FontAwesome5 name="gift" size={250} color={colors.PURPLE}></FontAwesome5>
                    </Text>
                </View>

                <Card containerStyle={styles.subcardWithGiftMessage}>
                    <Card.Title style={{ alignSelf: 'flex-start' }}>Mensaje enviado</Card.Title>
                    <Card.Divider></Card.Divider>
                    <Text>{mensaje}</Text>
                </Card>
            </Card>

            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={{ ...styles.button, paddingHorizontal: 100, marginTop: 50 }}
                    title="Volver al chat!"
                    onPress={() => {
                        dispatch(guardarRegalo(user, mensaje, regalo));
                        navigation.navigate('Chat', { user: user });
                    }}
                />
            </View>
        </View>
    );
};

export const Regalo = (props) => {
    const minShippingCost = 15;
    const maxShippingCost = 300;

    const [message, setMessage] = useState('');
    const [envio, setEnvio] = useState(getShippingCost(minShippingCost, maxShippingCost));

    const { top, bottom } = useSafeAreaInsets();
    const { regalo, usuario } = props.route.params;

    function getShippingCost(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
            }}
        >
            <View style={{ flex: 1 }}>
                <GiftCard gift={regalo} shippingCost={envio} />

                <Text style={styles.mensajePrincipalRegalo}>
                    Estas eligiendo un regalo para
                    <Text style={{ fontWeight: 'bold' }}> {usuario.nombre}</Text>
                </Text>

                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Escribe un mensaje"
                        placeholderTextColor={'#9E9E9E'}
                        multiline={true}
                        onChangeText={(message) => setMessage(message)}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={{ ...styles.button, paddingHorizontal: 150 }}
                        title="Enviar!"
                        onPress={() =>
                            props.navigation.navigate('MensajeRegalo', {
                                mensaje: message,
                                user: usuario,
                                regalo: regalo,
                            })
                        }
                    />
                </View>

                <Text style={styles.mensajeInformativoRegalo}>
                    Lorem ipsu|m dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </Text>
            </View>
        </View>
    );
};

export default Regalos = (props) => {
    const { navigation } = props;
    const usuario = props.route.params.usuario;

    const regalos = [
        // no poner en PURPLE ni DARKPURPLE en
        // los regalos, no se nota el descuento
        // usar, PINK, DARKPINK, YELLOW, ORANGE
        {
            id: 1,
            name: 'Caja de Chocolates',
            precio: 500,
            tipo: giftType.CANDY,
            link: 'https://i.pinimg.com/736x/ff/83/06/ff83064edeb9e91462a471118544f27b.jpg',
        },
        {
            id: 2,
            name: 'Ramo de Flores',
            precio: 900,
            tipo: giftType.FLOWER,
            link: 'https://i.pinimg.com/736x/ff/83/06/ff83064edeb9e91462a471118544f27b.jpg',
        },
        {
            id: 3,
            name: '1/4 kg Helado',
            precio: 420,
            tipo: giftType.DRINKS,
            link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
        },
        {
            id: 4,
            name: '1/4 kg Helado',
            precio: 420,
            tipo: giftType.DRINKS,
            link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
        },
        {
            id: 5,
            name: '1/4 kg Helado',
            precio: 420,
            tipo: giftType.FLOWER,
            link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
        },
        {
            id: 6,
            name: '1/4 kg Helado',
            precio: 420,
            tipo: giftType.CANDY,
            link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
        },
    ];

    const { top, bottom } = useSafeAreaInsets();

    const colorByIndex = {
        0: colors.DARK_PINK,
        1: colors.ORANGE,
        2: colors.YELLOW,
    };

    const getNextColor = (giftIndex) => {
        const normalizedIndex = giftIndex % 3;
        return colorByIndex[normalizedIndex];
    };

    return (
        <View style={{ ...styles.container, marginTop: top, marginBottom: bottom + 20 }}>
            <View>
                <FlatList
                    data={regalos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ index, item }) => (
                        <GiftCard
                            gift={item}
                            color={getNextColor(index)}
                            onPress={() =>
                                navigation.navigate('Regalo', { regalo: item, usuario: usuario })
                            }
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mensajePrincipalRegalo: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        paddingTop: 30,
    },

    mensajeInformativoRegalo: {
        fontSize: 13,
        textAlign: 'justify',
        padding: 20,
        alignSelf: 'flex-end',
        paddingTop: 30,
    },

    textAreaContainer: {
        flex: 1,
        flex: 1,

        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'center',
        margin: 20,
        marginBottom: 200,
    },

    textArea: {
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20,
        height: 100,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
        padding: 20,
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: colors.PURPLE,
        borderRadius: 20,
    },

    giftSentCard: {
        height: '80%',
        borderRadius: 25,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 9,
    },

    giftSentCardTitle: {
        fontSize: 25,
    },

    subcardWithGiftMessage: {
        borderRadius: 20,
        height: '23%',
        backgroundColor: '#FFFFFF',
    },
});

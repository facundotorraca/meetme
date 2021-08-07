import React, { useState } from 'react';
import { guardarRegalo } from '../actions';
import GiftCard from '../components/GiftCard.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, strongerColor, screenSize } from '../config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';

export const MensajeRegalo = (props) => {
    const TAMANIO_ICONO_REGALO = screenSize.ratio * 120;

    const dispatch = useDispatch();

    const { navigation } = props;
    const { mensaje, usuario, regalo, color } = props.route.params;

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.mensajeCard}>
                <LinearGradient
                    colors={[color, strongerColor[color]]}
                    style={{ borderRadius: 20, padding: 15, height: '100%' }}
                >
                    <Card.Title>
                        <Text style={styles.tituloMensajeCard}>
                            {'Tu regalo a \n'}
                            <Text style={{ color: colors.BLUE }}>{usuario.nombre}</Text>{' '}
                            {'\n fue enviado con exito!'}
                        </Text>
                    </Card.Title>

                    <View>
                        <Text style={{ alignSelf: 'center' }}>
                            <FontAwesome5
                                name="gift"
                                size={TAMANIO_ICONO_REGALO}
                                color={colors.PURPLE}
                            ></FontAwesome5>
                        </Text>
                    </View>

                    <Card containerStyle={styles.subcardConMensajeEscrito}>
                        <Card.Title style={{ alignSelf: 'flex-start' }}>Mensaje enviado</Card.Title>
                        <Card.Divider></Card.Divider>
                        <Text>{mensaje}</Text>
                    </Card>
                </LinearGradient>
            </Card>

            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={{ ...styles.button, paddingHorizontal: 100, marginTop: 50 }}
                    title="Volver al chat!"
                    onPress={() => {
                        dispatch(guardarRegalo(usuario, mensaje, regalo));
                        navigation.navigate('Chat', { user: usuario });
                    }}
                />
            </View>
        </View>
    );
};

export const Regalo = (props) => {
    const [mensaje, setMensaje] = useState('');
    const { regalo, usuario, color, costoEnvio } = props.route.params;

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
            }}
        >
            <View style={{ flex: 1 }}>
                <GiftCard gift={regalo} color={color} shippingCost={costoEnvio} />

                <Text style={styles.textRegalandoA}>
                    {'Estas eligiendo un regalo para\n'}
                    <Text style={{ fontWeight: 'bold' }}> {usuario.nombre}</Text>
                </Text>

                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Escribe un mensaje"
                        placeholderTextColor={'#9E9E9E'}
                        multiline={true}
                        onChangeText={(message) => setMensaje(message)}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={{ ...styles.button, paddingHorizontal: 150 }}
                        title="Enviar!"
                        onPress={() =>
                            props.navigation.navigate('MensajeRegalo', {
                                mensaje,
                                usuario,
                                regalo,
                                color,
                            })
                        }
                    />
                </View>

                <Text style={styles.textBasesYCondiciones}>
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

    const regalos = useSelector((state) => state.general.regalos);

    const costoEnvioMin = 15;
    const costoEnvioMax = 300;

    const { top, bottom } = useSafeAreaInsets();

    const colorPorIndex = {
        0: colors.DARK_PINK,
        1: colors.ORANGE,
        2: colors.YELLOW,
    };

    const proximoColor = (regaloIndex) => {
        const normalizedIndex = regaloIndex % 3;
        return colorPorIndex[normalizedIndex];
    };

    const calcularCostoEnvio = () => {
        return Math.floor(Math.random() * (costoEnvioMax - costoEnvioMin)) + costoEnvioMin;
    };

    return (
        <View style={{ ...styles.container, marginTop: top, marginBottom: bottom + 20 }}>
            <View>
                <FlatList
                    data={regalos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ index, item: regalo }) => (
                        <GiftCard
                            gift={regalo}
                            color={proximoColor(index)}
                            onPress={() =>
                                navigation.navigate('Regalo', {
                                    regalo: regalo,
                                    usuario: usuario,
                                    color: proximoColor(index),
                                    costoEnvio: calcularCostoEnvio(),
                                })
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

    textRegalandoA: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        paddingTop: 30,
    },

    textBasesYCondiciones: {
        fontSize: 13,
        textAlign: 'justify',
        padding: 20,
        alignSelf: 'flex-end',
        paddingTop: 10,
    },

    textAreaContainer: {
        flex: 1,
        paddingTop: '7%',
        justifyContent: 'center',
        margin: 20,
        marginBottom:
            screenSize.height >= 750 ? screenSize.height * 0.25 : screenSize.height * 0.15,
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

    mensajeCard: {
        padding: 0,
        height: '80%',
        borderRadius: 25,
        borderWidth: 0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 9,
    },

    tituloMensajeCard: {
        fontSize: 25,
    },

    subcardConMensajeEscrito: {
        borderRadius: 20,
        height: '23%',
        backgroundColor: '#FFFFFF',
    },
});

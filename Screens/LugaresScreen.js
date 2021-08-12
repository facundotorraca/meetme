import React, { useState } from 'react';
import PubCard from '../components/PubCard.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { colors, screenSize, strongerColor } from '../config';
import { guardarInvite, guardarMensaje } from '../actions/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export const InvitacionLugar = (props) => {
    const TAMANIO_ICONO_BRINDIS = screenSize.ratio * 120;

    const dispatch = useDispatch();

    const { navigation } = props;
    const { mensaje, usuario, lugar, color } = props.route.params;

    return (
        <View style={styles.container}>
            <Card containerStyle={{ ...styles.invitacionCard, backgroundColor: colors.PURPLE }}>
                <LinearGradient
                    colors={[color, strongerColor[color]]}
                    style={{ borderRadius: 20, padding: 15, height: '100%' }}
                >
                    <Card.Title>
                        <Text style={styles.tituloCardInvitacion}>
                            {'Tu inviación a\n'}
                            <Text style={{ color: colors.BLUE }}>{usuario.nombre}</Text>{' '}
                            {'\n fue enviada con exito!'}
                        </Text>
                    </Card.Title>

                    <View>
                        <Text style={{ alignSelf: 'center' }}>
                            <FontAwesome5
                                name="glass-cheers"
                                size={TAMANIO_ICONO_BRINDIS}
                                color={colors.PURPLE}
                            ></FontAwesome5>
                        </Text>
                    </View>

                    <Card containerStyle={styles.subcardConInvitacionEscrita}>
                        <Card.Title style={{ alignSelf: 'flex-start' }}>Mensaje enviado</Card.Title>
                        <Card.Divider></Card.Divider>
                        <Text>{mensaje}</Text>
                    </Card>
                </LinearGradient>
            </Card>

            <View style={styles.buttonContainer}>
                <Button
                    title={'Volver al chat!'}
                    buttonStyle={{ ...styles.button, paddingHorizontal: 100, marginTop: 50 }}
                    onPress={() => {
                        dispatch(
                            guardarMensaje({
                                text: '¡Te he enviado una invitación! \n' + mensaje,
                                _id: usuario.id,
                            })
                        );

                        dispatch(guardarInvite(usuario, mensaje, lugar));
                        navigation.navigate('Chat', { user: usuario });
                    }}
                />
            </View>
        </View>
    );
};

export const Lugar = (props) => {
    const [mensaje, setMensaje] = useState('');

    const { top, bottom } = useSafeAreaInsets();
    const { lugar, usuario, color } = props.route.params;

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
            }}
        >
            <View style={{ flex: 1 }}>
                <PubCard pub={lugar} color={color} />

                <Text style={styles.textInvitandoA}>
                    {'Estas invitando a\n'}
                    <Text style={{ fontWeight: 'bold' }}>{usuario.nombre}</Text>
                </Text>

                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Escribe un mensaje para la invitacion"
                        placeholderTextColor={'#9E9E9E'}
                        multiline={true}
                        onChangeText={(message) => setMensaje(message)}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={{ ...styles.button, paddingHorizontal: 150 }}
                        title="Invitar"
                        onPress={() =>
                            props.navigation.navigate('InvitacionLugar', {
                                mensaje,
                                usuario,
                                lugar,
                                color,
                            })
                        }
                    />
                </View>

                <Text style={styles.textBasesYCondiciones}>
                    Al presionar Invitar queda sujeto a Bases y Condiciones
                </Text>
            </View>
        </View>
    );
};

export default function Lugares(props) {
    const { navigation } = props;
    const usuario = props.route.params.usuario;

    const lugares = useSelector((state) => state.general.lugares);

    const { top, bottom } = useSafeAreaInsets();

    const colorPorIndex = {
        0: colors.DARK_PINK,
        1: colors.ORANGE,
        2: colors.YELLOW,
    };

    const proximoColor = (indexLugar) => {
        const indiceNormalizado = indexLugar % 3;
        return colorPorIndex[indiceNormalizado];
    };

    return (
        <View style={{ ...styles.container, marginTop: top, marginBottom: bottom + 20 }}>
            <View>
                <FlatList
                    data={lugares}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ index, item: lugar }) => (
                        <PubCard
                            pub={lugar}
                            color={proximoColor(index)}
                            onPress={() =>
                                navigation.navigate('Lugar', {
                                    lugar,
                                    usuario,
                                    color: proximoColor(index),
                                })
                            }
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textInvitandoA: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        paddingTop: 30,
    },

    textBasesYCondiciones: {
        fontSize: 13,
        textAlign: 'center',
        padding: 20,
        alignSelf: 'center',
        paddingTop: 10,
        color: '#555'
    },

    image: {
        height: 150,
        width: 150,
        borderRadius: 25,
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
        borderWidth: 1,
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

    invitacionCard: {
        height: '80%',
        borderRadius: 25,
        padding: 0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 9,
    },

    tituloCardInvitacion: {
        fontSize: 25,
    },

    subcardConInvitacionEscrita: {
        borderRadius: 20,
        height: '23%',
        backgroundColor: '#FFFFFF',
    },
});

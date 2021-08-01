import React, { useState } from 'react';
import { Card, Button } from 'react-native-elements';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../config/index.js';
import { useDispatch } from 'react-redux';
import { guardarInvite, guardarMensaje } from '../actions/index';
import PubCard from '../components/PubCard.js';

export const Invitacion = (props) => {
    const CHEERS_ICON_SIZE = 250;

    const dispatch = useDispatch();

    const { navigation } = props;
    const { mensaje, user, pub, pubColor } = props.route.params;

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
            }}
        >
            <Card containerStyle={{ ...styles.pubInvitationSentCard, backgroundColor: pubColor }}>
                <Card.Title>
                    <Text style={styles.pubInvitationSentCardTitle}>
                        {'Tu inviación a\n'}
                        <Text style={{ color: colors.DARK_PURPLE }}>{user.nombre}</Text>{' '}
                        {'\n fue enviada con exito!'}
                    </Text>
                </Card.Title>

                <View>
                    <Text style={{ alignSelf: 'center' }}>
                        <FontAwesome5
                            name="glass-cheers"
                            size={CHEERS_ICON_SIZE}
                            color={colors.PURPLE}
                        ></FontAwesome5>
                    </Text>
                </View>

                <Card containerStyle={styles.subcardWithPubInvitation}>
                    <Card.Title style={{ alignSelf: 'flex-start' }}>Mensaje enviado</Card.Title>
                    <Card.Divider></Card.Divider>
                    <Text>{mensaje}</Text>
                </Card>
            </Card>

            <View style={styles.buttonContainer}>
                <Button
                    title={'Volver al chat!'}
                    buttonStyle={{ ...styles.button, paddingHorizontal: 100, marginTop: 50 }}
                    onPress={() => {
                        dispatch(
                            guardarMensaje({
                                text: '¡Te he enviado una invitacion! \n' + mensaje,
                                _id: user.id,
                            })
                        );

                        dispatch(guardarInvite(user, mensaje, pub));
                        navigation.navigate('Chat', { user: user });
                    }}
                />
            </View>
        </View>
    );
};

export const PubScreen = (props) => {
    const [message, setMessage] = useState('');

    const { top, bottom } = useSafeAreaInsets();
    const { pub, pubColor, usuario } = props.route.params;

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
            }}
        >
            <View style={{ flex: 1 }}>
                <PubCard pub={pub} color={pubColor} />

                <Text style={styles.mensajePrincipalPub}>
                    {'Estas invitando a\n'}
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

                <View style={{ padding: 10 }}>
                    <Button
                        buttonStyle={{ ...styles.button, paddingHorizontal: 150 }}
                        title="Invitar!"
                        onPress={() =>
                            props.navigation.navigate('Invitacion', {
                                mensaje: message,
                                user: usuario,
                                pub: pub,
                                pubColor: pubColor,
                            })
                        }
                    />
                </View>

                <Text style={styles.mensajeInformativoPub}>
                    Lorem ipsu|m dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </Text>
            </View>
        </View>
    );
};

export default function PubsScreen(props) {
    const { navigation } = props;
    const usuario = props.route.params.usuario;

    const pubs = [
        {
            id: 1,
            stars: 5,
            name: 'Moby Dick',
            neighborhood: 'Palermo',
            city: 'CABA',
            link: 'https://www.baresyboliches.com/wp-content/uploads/moby-2-722x480.jpg',
            address: 'Av Rafael Obligado 2234',
        },
        {
            id: 2,
            stars: 3,
            name: 'Jobs',
            neighborhood: 'Caballito',
            city: 'CABA',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c1/92/36/img-20170702-011749-largejpg.jpg',
            address: 'Arenales 1233',
        },
        {
            id: 3,
            stars: 4,
            name: 'Moscow',
            city: 'CABA',
            neighborhood: 'Almagro',
            link: 'https://images.clarin.com/2019/11/28/pacha-para-amanecer-junto-al___e-SW0JTL_1256x620__1.jpg',
            address: 'Av Costanera 122',
        },
        {
            id: 4,
            stars: 4,
            name: 'Rose in Rio',
            neighborhood: 'Palermo',
            city: 'CABA',
            link: 'https://px.cdn.bigbangnews.com/bigbang/122019/1575321848605/rose.webp?cw=555&ch=499&extw=jpg',
            address: 'Av Cordoba 700',
        },
        {
            id: 5,
            stars: 2,
            name: '7030',
            city: 'CABA',
            neighborhood: 'Pilar',
            link: 'https://px.cdn.bigbangnews.com/bigbang/122019/1575321848605/rose.webp?cw=555&ch=499&extw=jpg',
            address: 'Las Magnolias 765',
        },
        {
            id: 6,
            stars: 5,
            name: 'Blest',
            neighborhood: 'Nordelta',
            city: 'CABA',
            link: 'https://res.cloudinary.com/tf-lab/image/upload/restaurant/979dc9fc-3554-42de-8e9f-a4480d31a534/fa2d2036-bd0f-4b46-8457-0adb588ee4a4.jpg',
            address: 'Ex ruta 8 km 33',
        },
    ];

    const { top, bottom } = useSafeAreaInsets();

    const colorByIndex = {
        0: colors.DARK_PINK,
        1: colors.ORANGE,
        2: colors.YELLOW,
    };

    const getNextColor = (pubIndex) => {
        const normalizedIndex = pubIndex % 3;
        return colorByIndex[normalizedIndex];
    };

    return (
        <View style={{ ...styles.container, marginTop: top, marginBottom: bottom + 20 }}>
            <View>
                <FlatList
                    data={pubs}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ index, item }) => (
                        <PubCard
                            pub={item}
                            color={getNextColor(index)}
                            onPress={() =>
                                navigation.navigate('Pub', {
                                    pub: item,
                                    usuario: usuario,
                                    pubColor: getNextColor(index),
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

    mensajePrincipalPub: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        paddingTop: 30,
    },

    mensajeInformativoPub: {
        fontSize: 13,
        textAlign: 'justify',
        padding: 20,
        alignSelf: 'flex-end',
        paddingTop: 30,
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

    pubInvitationSentCard: {
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

    pubInvitationSentCardTitle: {
        fontSize: 25,
    },

    subcardWithPubInvitation: {
        borderRadius: 20,
        height: '23%',
        backgroundColor: '#FFFFFF',
    },
});

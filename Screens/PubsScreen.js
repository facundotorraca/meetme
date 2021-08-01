import React, { useState } from 'react';
import { Card, Input, Button, Image } from 'react-native-elements';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../config/index.js';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { guardarInvite, guardarMensaje } from '../actions/index';
import PubCard from '../components/PubCard.js';

export const Invitacion = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const mensaje = props.route.params.mensaje;
    const user = props.route.params.user;
    const pub = props.route.params.pub;

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
            <View>
                <Text
                    style={{
                        alignSelf: 'center',
                        marginTop: 15,
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}
                >
                    Tu invitacion a {user.nombre} al {pub.name} fue enviada con exito!
                </Text>
                <Card
                    containerStyle={{
                        backgroundColor: colors.YELLOW,
                    }}
                >
                    <Card.Title>Invitación</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10, alignSelf: 'center' }}>{mensaje}</Text>
                </Card>
                <Button
                    title={'Volver al chat!'}
                    style={styles.button}
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
                    type="clear"
                />
            </View>
        </View>
    );
};

export const PubScreen = (props) => {
    const [value, setValue] = useState('');
    const { top, bottom } = useSafeAreaInsets();
    const pub = props.route.params.pub;
    const usuario = props.route.params.usuario;

    return (
        <View
            style={{
                ...styles.container,
                marginTop: top + 10,
                marginBottom: bottom,
                backgroundColor: colors.PINK,
            }}
        >
            <View>
                <Card
                    containerStyle={{
                        backgroundColor: colors.YELLOW,
                    }}
                >
                    <Card.Title style={{ fontSize: 19 }}>{pub.name}</Card.Title>
                    <Card.Divider />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Image style={styles.image} resizeMode="cover" source={{ uri: pub.link }} />
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome
                                    name="map-marker"
                                    size={28}
                                    color="black"
                                ></FontAwesome>
                                <Text
                                    style={{
                                        marginHorizontal: 15,
                                        fontSize: 15,
                                        alignSelf: 'center',
                                    }}
                                >
                                    {pub.location}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    marginHorizontal: 15,
                                    fontSize: 13,
                                    alignSelf: 'center',
                                    marginTop: 10,
                                }}
                            >
                                {pub.direction}
                            </Text>
                        </View>
                    </View>
                </Card>
                <Text style={styles.invitacion}>Estas invitando a {usuario.nombre}</Text>

                <Input
                    placeholder="Mensaje de invitacion"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    style={styles.input}
                    onChangeText={(value) => setValue(value)}
                />
                <View style={{ padding: 10 }}>
                    <Button
                        containerStyle={{ borderRadius: 20, marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: colors.PURPLE }}
                        title="Invitar!"
                        onPress={() =>
                            props.navigation.navigate('Invitacion', {
                                mensaje: value,
                                user: usuario,
                                pub: pub,
                            })
                        }
                    />
                </View>
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
                                navigation.navigate('Pub', { pub: item, usuario: usuario })
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

import React, { useState } from 'react';
import { menus } from '../config';
import TopBar from '../components/TopBar';
import { ListItem, Card, Avatar, Input, Button, Image, Badge } from 'react-native-elements';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../config/index.js';

export const Invitacion = (props) => {
    const mensaje = props.route.params.mensaje;
    const user = props.route.params.user;
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
                    Tu invitacion a {user} fue enviada con exito!
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
            </View>
        </View>
    );
};

export const PubScreen = (props) => {
    const [value, setValue] = useState('');
    const [invitado, setInvitado] = useState('Lucia Ramirez');
    const { top, bottom } = useSafeAreaInsets();
    const pub = props.route.params.pub;

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
                                user: invitado,
                            })
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default function PubsScreen({ navigation }) {
    const pubs = [
        {
            id: 1,
            name: 'Moby Dick',
            location: 'Palermo',
            link: 'https://www.baresyboliches.com/wp-content/uploads/moby-2-722x480.jpg',
            direction: 'Av Rafael Obligado 2234',
        },
        {
            id: 2,
            name: 'Jobs',
            location: 'Caballito',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c1/92/36/img-20170702-011749-largejpg.jpg',
            direction: 'Arenales 1233',
        },
        {
            id: 3,
            name: 'Moscow',
            location: 'Almagro',
            link: 'https://images.clarin.com/2019/11/28/pacha-para-amanecer-junto-al___e-SW0JTL_1256x620__1.jpg',
            direction: 'Av Costanera 122',
        },
        {
            id: 4,
            name: 'Rose in Rio',
            location: 'Palermo',
            link: 'https://px.cdn.bigbangnews.com/bigbang/122019/1575321848605/rose.webp?cw=555&ch=499&extw=jpg',
            direction: 'Av Cordoba 700',
        },
        {
            id: 5,
            name: '7030',
            location: 'Pilar',
            link: '',
            direction: 'Las Magnolias 765',
        },
        {
            id: 6,
            name: 'Blest',
            location: 'Nordelta',
            link: 'https://res.cloudinary.com/tf-lab/image/upload/restaurant/979dc9fc-3554-42de-8e9f-a4480d31a534/fa2d2036-bd0f-4b46-8457-0adb588ee4a4.jpg',
            direction: 'Ex ruta 8 km 33',
        },
    ];
    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ ...styles.container, marginTop: top + 10, marginBottom: bottom }}>
            <View style={{ marginTop: 15 }}>
                {pubs.map((pub, index) => (
                    <ListItem
                        containerStyle={{ backgroundColor: colors.PINK }}
                        key={index}
                        onPress={() => navigation.navigate('Pub', { pub: pub })}
                        bottomDivider
                    >
                        <Avatar source={{ uri: pub.link }} />
                        <ListItem.Content>
                            <ListItem.Title
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 19,
                                }}
                            >
                                {pub.name}
                            </ListItem.Title>
                            <ListItem.Subtitle>{pub.location}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
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
        borderRadius: 25,
    },

    notes: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'capitalize',
    },
});

import React, { useState } from 'react';
import { menus } from '../config';
import TopBar from '../components/TopBar';
import { ListItem, Card, Avatar, Input, Button, Image, Badge } from 'react-native-elements';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Invitacion = (props) => {
    const mensaje = props.route.params.mensaje;
    const user = props.route.params.user;
    const {top, bottom} = useSafeAreaInsets()

    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={props.navigation} menu={menus.PUBS} />
            <View>
                <Text style={{
                    alignSelf: 'center',
                    marginTop: 15
                    }}
                >Tu invitacion a {user.name} fue enviada con exito!</Text>
                <Card>
                    <Card.Title>Invitación</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10 }}>{mensaje}</Text>
                </Card>
            </View>
        </View>
    );
};

export const PubScreen = (props) => {
    const [value, setValue] = useState('Juan');
    const [invitado, setInvitado] = useState(0);
    const {top, bottom} = useSafeAreaInsets()
    const pub = props.route.params.pub;

    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={props.navigation} menu={menus.PUBS} />
            <View>
                <Card>
                    <Card.Title style={{fontSize: 19}}>{pub.name}</Card.Title>
                    <Card.Divider />
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Image style={styles.image} resizeMode="cover" source={{ uri: pub.link }}/>
                        <Text style={{fontSize: 15}}>{pub.location}</Text>
                    </View>
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
                    placeholder="Mensaje de invitacion"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    style={styles.input}
                    onChangeText={(value) => setValue(value)}
                />

                <Button
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
    );
};

export default function PubsScreen({ navigation }) {
    const pubs = [
        {
            id: 1,
            name: 'Moby Dick',
            location: 'Palermo',
            link: 'https://www.baresyboliches.com/wp-content/uploads/moby-2-722x480.jpg',
        },
        {
            id: 2,
            name: 'Jobs',
            location: 'Caballito',
            link: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c1/92/36/img-20170702-011749-largejpg.jpg',
        },
        {
            id: 3,
            name: 'Moscow',
            location: 'Almagro',
            link: 'https://images.clarin.com/2019/11/28/pacha-para-amanecer-junto-al___e-SW0JTL_1256x620__1.jpg',
        },
        {
            id: 4,
            name: 'Rose in Rio',
            location: 'Palermo',
            link: 'https://px.cdn.bigbangnews.com/bigbang/122019/1575321848605/rose.webp?cw=555&ch=499&extw=jpg',
        },
        {
            id: 5,
            name: '7030',
            location: 'Pilar',
            link: 'data:image/jpeg;base64,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',
        },
        {
            id: 6,
            name: 'Blest',
            location: 'Nordelta',
            link: 'https://res.cloudinary.com/tf-lab/image/upload/restaurant/979dc9fc-3554-42de-8e9f-a4480d31a534/fa2d2036-bd0f-4b46-8457-0adb588ee4a4.jpg',
        },
    ];
    const {top, bottom} = useSafeAreaInsets()

    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={navigation} menu={menus.PUBS} />
            <View style={{marginTop: 15}}>
                {pubs.map((pub, index) => (
                    <ListItem
                        key={index}
                        onPress={() => navigation.navigate('Pub', { pub: pub })}
                        bottomDivider
                    >
                        <Avatar source={{ uri: pub.link }}/>
                        <ListItem.Content>
                            <ListItem.Title style={{
                                fontWeight: 'bold',
                                fontSize: 19
                            }}>{pub.name}</ListItem.Title>
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

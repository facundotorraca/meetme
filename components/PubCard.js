import React from 'react';
import { times } from 'lodash';
import { strongerColor } from '../config';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Image, Divider } from 'react-native-elements';

export default PubCard = ({ pub, color, onPress }) => {
    const starSize = 24;
    const paddingStars = 2;

    const getStars = (pub) => {
        const stars = [];

        let i = 0;
        times(pub.stars, () => {
            stars.push(
                <FontAwesome
                    name="star"
                    size={starSize}
                    color="white"
                    key={i}
                    style={{ paddingLeft: paddingStars }}
                />
            );
            i++;
        });

        let j = i + 1;
        times(5 - i, () => {
            stars.push(
                <FontAwesome
                    name="star-o"
                    size={starSize}
                    color="white"
                    style={{ paddingLeft: paddingStars }}
                    key={j}
                />
            );
            j++;
        });

        return stars;
    };

    return (
        <TouchableOpacity onPress={onPress} disabled={!onPress}>
            <Card containerStyle={styles.card}>
                <LinearGradient
                    colors={[color, strongerColor[color]]}
                    style={{ borderRadius: 20, padding: 15 }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>{pub.name}</Text>
                        <View style={styles.stars}>{getStars(pub)}</View>
                    </View>

                    <Divider style={styles.divider} width={1} />

                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.image} source={{ uri: pub.link }} />

                        <View style={{ alignSelf: 'flex-end', paddingLeft: 15, flex: 1 }}>
                            <Text style={[styles.city, styles.textShadow]}>
                                {' ' /*TODO -> no se como arreglarlo*/}
                                <FontAwesome
                                    name="map-marker"
                                    size={24}
                                    color="white"
                                    style={{ marginRight: paddingStars }}
                                />
                                {' ' + pub.city}
                            </Text>

                            <Text style={[styles.location, styles.textShadow]}>
                                {pub.neighborhood}, {pub.address}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 9,
        padding: 0, // for linear gradient
    },

    location: {
        fontSize: 18,
        color: '#fff',
    },

    city: {
        fontSize: 22,
        textAlign: 'left',
        color: '#fff',
    },

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8,
    },

    image: {
        height: 90,
        width: 90,
        paddingLeft: 10,
        borderRadius: 10,
        marginTop: 10,
    },

    divider: {
        marginTop: 10,
        borderBottomColor: 'white',
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 19,
    },

    stars: {
        padding: 7,
        borderRadius: 25,
        flexDirection: 'row',
    },
});

import React from 'react';
import { colors } from '../config';
import { TouchableOpacity } from 'react-native';
import { giftType } from '../reducers/initialState';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Image, Divider } from 'react-native-elements';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default GiftCard = ({ gift, color, onPress, shippingCost }) => {
    const giftIcon = {
        [giftType.CANDY]: <FontAwesome5 name="candy-cane" size={24} color="white" />,
        [giftType.DRINKS]: <FontAwesome name="glass" size={24} color="white" />,
        [giftType.FLOWER]: <MaterialCommunityIcons name="flower" size={24} color="white" />,
    };

    return (
        <TouchableOpacity onPress={onPress} disabled={shippingCost != null}>
            <Card containerStyle={{ ...styles.card, backgroundColor: color }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>{gift.name}</Text>
                    <View style={styles.icon}>{giftIcon[gift.tipo]}</View>
                </View>

                <Divider style={styles.divider} width={1} />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Image style={styles.image} source={{ uri: gift.link }} />

                    <View style={{ alignSelf: 'flex-end' }}>
                        <Text style={[styles.price, styles.textShadow]}>
                            ${gift.precio.toFixed(2)}
                        </Text>
                        {shippingCost && (
                            <Text style={styles.shippingPrice}>+ {shippingCost.toFixed(2)}</Text>
                        )}
                    </View>
                </View>
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
    },

    price: {
        fontSize: 33,
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

    icon: {
        backgroundColor: colors.DARK_PURPLE,
        padding: 7,
        borderRadius: 25,
        alignSelf: 'flex-end',
    },

    shippingPrice: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
});

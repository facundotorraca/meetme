import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Image, Divider } from 'react-native-elements';

export default GiftCard = ({ gift, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card containerStyle={{ ...styles.card, backgroundColor: gift.color }}>
                <Text style={styles.title}>{gift.name}</Text>
                <Divider style={styles.divider} />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Image style={styles.image} source={{ uri: gift.link }} />
                    <Text style={styles.price}>${gift.precio.toFixed(2)}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 0,
        borderRadius: 20,
    },

    price: {
        fontSize: 38,
        color: '#fff',
    },

    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
        marginTop: 10,
    },

    divider: {
        marginTop: 10,
    },

    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 19,
    },
});

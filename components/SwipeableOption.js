import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Image, Text } from 'react-native';
import { colors } from '../config';

// Initially heres come an URL but
// it is going to be replaced by some text
// to give the impression o selection based
// on tastes

var randomColor = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

export default function SwipeableOption({ user, willLike, willPass }) {
    let descripciones = [
        'asdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasdasdsadasdasdasd',
        'bbbbbbbbb',
        'ccccccc',
        'dddddd',
        'zzzzzzzz',
    ];

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    return (
        <View>
            <View style={styles.contenedor}>
                <Text style={styles.textDescription}>{descripciones[getRandomInt(0, 4)]} </Text>
            </View>
            {willLike && (
                <View style={styles.likeBox}>
                    <Text style={{ ...styles.textPrimary, color: '#64EDCC' }}>Me interesa</Text>
                </View>
            )}
            {willPass && (
                <View style={styles.passBox}>
                    <Text style={{ ...styles.textPrimary, color: '#F06795' }}>Pasar</Text>
                </View>
            )}
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{user.name.first}</Text>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.dob.age}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
                    <Text style={[styles.textSecondary, styles.textShadow]}>
                        {user.location.city}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const boxStyle = {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 10,
};

const styles = StyleSheet.create({
    textDescription: {
        paddingTop: 10,
        paddingBottom: 1,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
    },
    likeBox: {
        ...boxStyle,
        left: 40,
        borderColor: '#64EDCC',
    },
    contenedor: {
        backgroundColor: randomColor(colors),
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },

    passBox: {
        ...boxStyle,
        right: 40,
        borderColor: '#F06795',
    },

    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },

    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },

    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textPrimary: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },

    textSecondary: {
        color: 'white',
        marginLeft: 10,
        fontSize: 25,
    },

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});

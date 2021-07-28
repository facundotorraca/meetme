import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../config';

export default function BottomBar({ handlePassPress, handleLikePress, disabled }) {
    return (
        <View style={styles.container}>
            <View />
            <TouchableOpacity style={styles.button} onPress={handlePassPress} disabled={disabled}>
                <FontAwesome
                    name="times"
                    size={buttonSize}
                    color={disabled ? 'grey' : colors.DARK_PURPLE}
                ></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLikePress} disabled={disabled}>
                <FontAwesome
                    name="heart"
                    size={buttonSize}
                    color={disabled ? 'grey' : colors.DARK_PINK}
                ></FontAwesome>
            </TouchableOpacity>
            <View />
        </View>
    );
}

const buttonSize = 27;

const styles = StyleSheet.create({
    container: {
        height: 75,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    button: {
        width: 60,
        height: 60,
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
    },
});

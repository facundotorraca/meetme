import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function BottomBar({ handlePassPress, handleLikePress }) {
    return (
        <View style={styles.container}>
            <View /> 
            <TouchableOpacity style={styles.button} onPress={handlePassPress} >
                <FontAwesome name='times' size={buttonSize} color={crossColor}></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLikePress} >
                <FontAwesome name='heart' size={buttonSize} color={heartColor}></FontAwesome>
            </TouchableOpacity>
            <View /> 
        </View>
    )
}

const buttonSize = 27;
const heartColor = '#64EDCC';
const crossColor = '#F06795';

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'    
    },

    button: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9
    }
});

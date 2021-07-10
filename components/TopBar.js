import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default function TopBar({ navigation }) {
    return (
        <View style={styles.container}>
            <FontAwesome5 name='fire' size={iconSize} color={fireColor} ></FontAwesome5 >
            <FontAwesome name='comments' size={iconSize} color={defaultIconColor} onPress={() => navigation.navigate('Mensajeria')} ></FontAwesome >
           
            <FontAwesome name='user' size={iconSize} color={defaultIconColor}  ></FontAwesome >        
        </View>
    )
}

const fireColor = '#F06795';
const defaultIconColor = '#5C5C5C';
const iconSize = 27

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9
    }
});

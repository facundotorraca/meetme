import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { colors, strongerColor } from '../config';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/logos/logo2.png')} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#000"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Contraseña"
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotButton}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Tab')}>
                <Text style={styles.loginText}>CONECTARSE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginBottom: 40,
        width: 200,
        height: 200,
    },
    inputView: {
        backgroundColor: '#FFF',
        borderColor: colors.PURPLE,
        borderWidth: 3,
        borderRadius: 30,
        width: '70%',
        height: 50,
        marginBottom: 20,
    },
    textInput: {
        height: 50,
        flex: 1,
        paddingLeft: 25,
    },
    forgotButton: {
        height: 30,
        marginBottom: 30,
        color: colors.BLUE,
    },
    loginButton: {
        width: '70%',
        borderRadius: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: colors.PURPLE,
    },
    loginText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

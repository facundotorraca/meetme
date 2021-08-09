import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { colors } from '../config';
import { Animated } from 'react-native';

export default function PremiumScreen({ navigation }) {
    const anim = useRef(new Animated.Value(1));

    useEffect(() => {
        // makes the sequence loop
        Animated.loop(
            // runs given animations in a sequence
            Animated.sequence([
                // increase size
                Animated.timing(anim.current, {
                    toValue: 2,
                    duration: 1500,
                    useNativeDriver: true,
                }),
                // decrease size
                Animated.timing(anim.current, {
                    toValue: 1.5,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Obtener MeetMe Premium</Text>
            <Text style={styles.discountText}>Oferta de lanzamiento. Descuento del</Text>
            <Animated.View style={{ transform: [{ scale: anim.current }] }}>
                <Text style={styles.discount}>50%</Text>
            </Animated.View>
            <View style={styles.benefitsView}>
                <Text style={styles.benefit}> - Matches Ilimitados</Text>
                <Text style={styles.benefit}> - Descuentos en los regalos que envies</Text>
                <Text style={styles.benefit}> - Aumenta tu exposicion a otros usuarios</Text>
                <Text style={styles.benefit}> - Ocultar publicidad</Text>
            </View>
            <TouchableOpacity style={styles.button} disabled={true}>
                <Text style={styles.buttonText}>OBTENER PREMIUM</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        width: '70%',
        borderRadius: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 40,
        backgroundColor: colors.DISABLED,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.PURPLE,
        marginTop: 40,
    },
    discountText: {
        fontSize: 16,
        color: colors.YELLOW,
        marginTop: 20,
    },
    discount: {
        marginTop: 20,
        fontSize: 80,
        fontWeight: 'bold',
        color: colors.YELLOW,
    },
    benefitsView: {
        marginTop: 70,
    },
    benefit: {
        color: colors.PURPLE,
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

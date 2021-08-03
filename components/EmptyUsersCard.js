import React, { useRef, useEffect } from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { colors, strongerColor, screenSize } from '../config';
import { Animated } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function EmptyUserCard() {
    const centralIconSize =
        screenSize.height >= 750 ? screenSize.height * 0.2 : screenSize.height * 0.12;

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
        <LinearGradient
            style={styles.container}
            colors={[colors.PURPLE, strongerColor[colors.PURPLE]]}
        >
            <View style={styles.body}>
                <View style={styles.imageContainer}>
                    <Animated.View style={{ transform: [{ scale: anim.current }] }}>
                        <FontAwesome5 name="fire" size={centralIconSize} color={colors.YELLOW} />
                    </Animated.View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textMessagePrimary, styles.textShadow]}>
                        No quedan mas opciones cerca de ti...
                    </Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={[styles.textMessageSeconday, styles.textShadow]}>
                        Puedes cambiar los ajustes de ubicacion o volver a cargar usuarios.
                    </Text>
                </View>

                <View style={styles.textRow}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="gear" style={styles.textButton} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="repeat" style={styles.textButton} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PINK,
        borderRadius: 30,
        height: `${screenSize.ratio * 48}%`,
        padding: 10,
    },

    body: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    footer: {
        paddingBottom: 30,
    },

    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
    },

    textButton: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
    },

    textMessagePrimary: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 10,
        fontSize: 25,
    },

    textMessageSeconday: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 10,
        fontSize: 18,
    },

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    button: {
        borderRadius: 30,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        backgroundColor: colors.YELLOW,
    },
});

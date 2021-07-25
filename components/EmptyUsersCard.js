import React, { useRef, useEffect } from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../config';
import { Animated } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

//= StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgb(254, 254, 254)',
//     padding: 8,
//   },
// });

export default function EmptyUserCard() {
    const centralIconSize = 180;

    const anim = useRef(new Animated.Value(1));

    useEffect(() => {
        // makes the sequence loop
        Animated.loop(
            // runs given animations in a sequence
            Animated.sequence([
                // increase size
                Animated.timing(anim.current, {
                    toValue: 2,
                    useNativeDriver: true,
                    duration: 1500,
                }),
                // decrease size
                Animated.timing(anim.current, {
                    toValue: 1.5,
                    useNativeDriver: true,
                    duration: 1500,
                }),
            ])
        ).start();
    }, []);

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.imageContainer}>
                        <Animated.View style={{ transform: [{ scale: anim.current }] }}>
                            <FontAwesome5
                                name="fire"
                                size={centralIconSize}
                                color={colors.YELLOW}
                            />
                        </Animated.View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.textRow}>
                        <Text style={[styles.textMessage, styles.textShadow]}>
                            No quedan mas opciones cerca de ti...
                        </Text>
                    </View>

                    <View style={styles.textRow}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Configuraciones de ubicación</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PINK,
        borderRadius: 30,
        height: '100%',
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

    textPreferences: {
        fontSize: 21,
        marginHorizontal: 10,
        color: 'white',
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
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
    },

    textMessage: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 10,
        fontSize: 25,
    },

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    button: {
        borderRadius: 40,
        backgroundColor: colors.PURPLE,
    },
});

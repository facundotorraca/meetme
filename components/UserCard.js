import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { Chip } from 'react-native-elements';
import { colors, strongerColor, screenSize } from '../config';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserCard({ user, color }) {
    const iconSize = 25;
    const avatarSize =
        screenSize.height >= 750 ? screenSize.height * 0.56 : screenSize.height * 0.45;

    const infoGustos = {
        'Salir de fiesta': { icono: 'glass', color: colors.YELLOW },
        'Videojuegos': { icono: 'gamepad', color: colors.YELLOW },
        'Aire libre': { icono: 'tree', color: colors.YELLOW },
    };

    const tagGusto = (gusto) => (
        <View key={gusto} style={styles.chip}>
            <Chip
                title={gusto}
                icon={{
                    name: infoGustos[gusto]?.icono,
                    type: 'font-awesome',
                    size: iconSize,
                    color: infoGustos[gusto]?.color,
                }}
                type="solid"
                backgroundColor="red"
                iconRight
            />
        </View>
    );

    return (
        <LinearGradient colors={[color, strongerColor[color]]} style={{ ...styles.container }}>
            <View style={styles.header}>
                {user.gustos.map((value, index) => {
                    return tagGusto(value);
                })}
            </View>
            <View style={styles.body}>
                <View style={styles.imageContainer}>
                    <BigHead
                        accessory="shades"
                        bgColor="yellow"
                        bgShape="circle"
                        body="chest"
                        clothing="tankTop"
                        clothingColor="black"
                        eyebrows="angry"
                        eyes="wink"
                        facialHair="mediumBeard"
                        graphic="vue"
                        hair="short"
                        hairColor="black"
                        hat="none"
                        hatColor="green"
                        lashes={false}
                        lipColor="purple"
                        mouth="open"
                        showBackground={true}
                        size={avatarSize}
                        skinTone="brown"
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{user.nombre}</Text>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.edad}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={28} color="white"></FontAwesome>
                    <Text style={[styles.textLocation, styles.textShadow]}>{user.ciudad}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.textDescription}>{user.descripcion} </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        padding: 15,
        height: `${screenSize.ratio * 48}%`,
    },

    chip: {
        marginBottom: 5,
        flexDirection: 'row',
    },

    header: {
        paddingTop: 20,
    },

    body: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    footer: {
        marginTop: 15,
    },

    textPreferences: {
        fontSize: 21,
        marginHorizontal: 10,
        color: 'white',
    },

    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    textPrimary: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingRight: 10,
    },

    textSecondary: {
        color: 'white',
        marginLeft: 10,
        fontSize: 25,
    },

    textLocation: {
        color: 'white',
        marginLeft: 10,
        fontSize: 22,
    },

    textDescription: {
        fontSize: 16,
        marginTop: 10,
        color: 'white',
    },

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { Chip } from 'react-native-elements';
import { colors, strongerColor, screenSize } from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

export default function MyCard() {
    const usuario = useSelector((state) => state.general.usuario);

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

    const color = colors.PURPLE;

    return (
        <LinearGradient colors={[color, strongerColor[color]]} style={{ ...styles.container }}>
            <View style={styles.header}>
                {usuario.gustos.map((value, index) => {
                    return tagGusto(value);
                })}
            </View>
            <View style={styles.body}>
                <View style={styles.imageContainer}>
                    <BigHead
                        lashes={false}
                        bgColor="yellow"
                        bgShape="circle"
                        size={avatarSize}
                        showBackground={true}
                        body={usuario.atributos.body}
                        hat={usuario.atributos.hat}
                        eyes={usuario.atributos.eyes}
                        hair={usuario.atributos.hair}
                        mouth={usuario.atributos.mouth}
                        graphic={usuario.atributos.graphic}
                        clothing={usuario.atributos.clothing}
                        eyebrows={usuario.atributos.eyebrows}
                        hatColor={usuario.atributos.hatColor}
                        lipColor={usuario.atributos.lipColor}
                        skinTone={usuario.atributos.skinTone}
                        accessory={usuario.atributos.accessory}
                        hairColor={usuario.atributos.hairColor}
                        facialHair={usuario.atributos.facialHair}
                        clothingColor={usuario.atributos.clothingColor}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{usuario.nombre}</Text>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{usuario.edad}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={28} color="white"></FontAwesome>
                    <Text style={[styles.textLocation, styles.textShadow]}>{usuario.ciudad}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.textDescription}>{usuario.descripcion} </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        padding: 15,
        height: `${screenSize.height >= 750 ? screenSize.ratio * 48 : screenSize.ratio * 56}%`,
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

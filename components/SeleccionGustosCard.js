import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { colors, strongerColor, screenSize, gustos } from '../config';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Entypo,
    FontAwesome,
    MaterialIcons,
    FontAwesome5,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function SeleccionGustosCard({
    onGustoSelected,
    selectedGustos,
    onRestore,
    onSave,
}) {
    const sizeIcons = 27;
    const buttonSize = 27;
    const gustosPorFila = 2;
    const maximosGustosPosibles = 4;
    const nombreGustos = Object.values(gustos);

    const iconosGustos = {
        [gustos.MUSICA]: <FontAwesome5 name="music" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.AIRE_LIBRE]: <FontAwesome5 name="tree" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.DEPORTES]: (
            <MaterialIcons name="sports-tennis" size={sizeIcons} color={colors.YELLOW} />
        ),
        [gustos.SALIR_DE_FIESTA]: <Entypo name="drink" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.VIDEOJUEGOS]: (
            <FontAwesome5 name="gamepad" size={sizeIcons} color={colors.YELLOW} />
        ),
        [gustos.ASTRONOMIA]: (
            <MaterialCommunityIcons name="zodiac-cancer" size={sizeIcons} color={colors.YELLOW} />
        ),
        [gustos.RELIGION]: <FontAwesome5 name="cross" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.MODA]: <FontAwesome5 name="tshirt" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.VIAJAR]: <FontAwesome5 name="plane" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.TECNOLOGIA]: <FontAwesome5 name="laptop" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.ANIMALES]: <FontAwesome5 name="dog" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.CIENCIA]: <MaterialIcons name="science" size={sizeIcons} color={colors.YELLOW} />,
    };

    const getColorBotonGusto = (gusto) => {
        if (selectedGustos.includes(gusto)) return colors.DARK_PINK;
        return colors.BLUE;
    };

    const botonGusto = (gusto) => (
        <TouchableOpacity onPress={() => onGustoSelected(gusto)}>
            <View style={{ ...styles.gustoContainer, backgroundColor: getColorBotonGusto(gusto) }}>
                <Text style={styles.textGustos}>{gusto}</Text>
                {iconosGustos[gusto]}
            </View>
        </TouchableOpacity>
    );

    return (
        <LinearGradient style={styles.container} colors={[colors.PINK, strongerColor[colors.PINK]]}>
            <View style={styles.header}>
                <TouchableOpacity style={[styles.button, styles.shadow]} onPress={onRestore}>
                    <Entypo name="back-in-time" size={buttonSize} color={colors.YELLOW} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.shadow]} onPress={onSave}>
                    <Entypo name="save" size={buttonSize} color={colors.YELLOW} />
                </TouchableOpacity>
            </View>

            <View style={styles.textRow}>
                <Text style={[styles.textMessagePrimary, styles.textShadow]}>
                    Seleccioná los tus intereses...
                </Text>
            </View>

            <View style={styles.body}>
                <FlatList
                    data={nombreGustos}
                    numColumns={gustosPorFila}
                    keyExtractor={(index) => index}
                    style={styles.container}
                    renderItem={({ item: gusto }) => botonGusto(gusto)}
                />
            </View>

            <View style={styles.footer}>
                <Text style={[styles.textMessagePrimary, styles.textShadow]}>
                    swipe para otras opciones{'\n'}
                    {<MaterialIcons name="swipe" size={60} color={colors.YELLOW} />}
                </Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        height: `${screenSize.ratio * 48}%`,
        padding: 10,
    },

    header: {
        marginTop: 10,
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

    gustoContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 40,
        paddingVertical: 5,
        marginHorizontal: 4,
        paddingHorizontal: 10,
    },

    textGustos: {
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
    },

    header: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'flex-end',
    },

    button: {
        width: 70,
        height: 70,
        backgroundColor: colors.PURPLE,
        borderRadius: 20,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    shadow: {
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

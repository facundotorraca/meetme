import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../config';
import { BigHead } from 'react-native-bigheads';
import { Chip } from 'react-native-elements';

export default function UserCard({ user, willLike, willPass }) {
    const iconSize = 25;

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
        <View>
            <View style={styles.container}>
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
                            size={400}
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
            </View>

            {willLike && (
                <View style={styles.likeBox}>
                    <Text style={{ ...styles.textPrimary, color: '#64EDCC' }}>Like</Text>
                </View>
            )}

            {willPass && (
                <View style={styles.passBox}>
                    <Text style={{ ...styles.textPrimary, color: '#F06795' }}>Pasar</Text>
                </View>
            )}
        </View>
    );
}

const boxStyle = {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 10,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.DARK_PURPLE,
        borderRadius: 30,
        height: '100%',
        padding: 10,
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

    likeBox: {
        ...boxStyle,
        left: 40,
        borderColor: '#64EDCC',
    },

    passBox: {
        ...boxStyle,
        right: 40,
        borderColor: '#F06795',
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

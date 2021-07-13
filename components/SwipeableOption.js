import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { View, StyleSheet, Image, Text } from 'react-native';
import { colors } from '../config';
import { useScrollToTop } from '@react-navigation/native';
import Icons from './Icons'

// Initially heres come an URL but
// it is going to be replaced by some text
// to give the impression o selection based
// on tastes


export default function SwipeableOption({ user, willLike, willPass }) {
    const defaultIconColor = 'white';
    const iconSize = 20;

    const getIconName = (preference) => {
        switch (preference) {
            case 'Fiestas':
                return 'cocktail';
            case 'Musica':
                return 'music';
            case 'Fotografia':
                return 'camera';
            case 'Cine':
                return 'film';
            case 'Deportes':
                return 'running';
            case 'Gaming':
                return 'gamepad';
            default:
                return null;
        }
    }

    return (
        <View>
            <View style={styles.contenedor}>
                <View style={styles.contenedor_pref}>
                    {
                        user.preferences.map((value, index) => {
                            return (
                                <View key={value} style={[styles.contenedor_lat]}>
                                    <Text style={styles.textPreferences}> {value} </Text>
                                    <FontAwesome5
                                        name={getIconName(value)}
                                        style={styles.iconPreferences}
                                        size={iconSize}
                                        color={defaultIconColor}
                                    ></FontAwesome5>
                                </View>
                            )
                        })
                    }  
                </View>
            </View>
            {willLike && (
                <View style={styles.likeBox}>
                    <Text style={{ ...styles.textPrimary, color: '#64EDCC' }}>Me interesa</Text>
                </View>
            )}
            {willPass && (
                <View style={styles.passBox}>
                    <Text style={{ ...styles.textPrimary, color: '#F06795' }}>Pasar</Text>
                </View>
            )}
            
            <View style={styles.textAndImageContainer}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={Icons[user.img_id]}
                        style={styles.avatar} 
                    />
                </View>
                <View style={styles.textContainer}>            
                    <View style={styles.textRow}>
                            <Text style={[styles.textPrimary, styles.textShadow]}>{user.userName}</Text>
                            <Text style={[styles.textSecondary, styles.textShadow]}>{user.age}</Text>
                    </View>
                    <View style={styles.textRow}>
                        <FontAwesome name="map-marker" size={31} color="white"></FontAwesome>
                        <Text style={[styles.textSecondary, styles.textShadow]}>
                            {user.location}
                        </Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.textDescription}>{user.descripcion} </Text>
                    </View>
                </View>
            </View>
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
    textDescription: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 20,
        marginRight: 7,
        color: 'white',
    },
    textPreferences: {
        fontSize: 21,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
    },
    iconPreferences: {
        fontSize: 21,
        paddingTop: 14,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
    },
    likeBox: {
        ...boxStyle,
        left: 40,
        borderColor: '#64EDCC',
    },
    contenedor: {
        backgroundColor: colors.DARK_PURPLE,
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    contenedor_pref: {
        paddingTop: 20,
    },
    contenedor_lat: {
        paddingTop: 7,
        flexDirection: 'row',
        textAlign: 'center'
    },
    passBox: {
        ...boxStyle,
        right: 40,
        borderColor: '#F06795',
    },
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    avatar: {
        width: 120, 
        height: 120, 
        borderRadius: 400/2,
        paddingLeft: 20
    },
    imageContainer: {
        position: 'absolute',
        justifyContent: 'center',
        bottom: 200,
        left: 120,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    textAndImageContainer: {
        position: 'relative'
    },
    textRow: {
        flexDirection: 'row',
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

    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});

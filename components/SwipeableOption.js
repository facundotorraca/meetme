import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { View, StyleSheet, Image, Text } from 'react-native';
import { colors } from '../config';
import { useScrollToTop } from '@react-navigation/native';
import Icons from './Icons'
import { textAlign } from '@material-ui/system';

// Initially heres come an URL but
// it is going to be replaced by some text
// to give the impression o selection based
// on tastes

var randomColor = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};


export default function SwipeableOption({ user, willLike, willPass }) {
    let descripciones = [
        'bbbbbbbbb',
        'ccccccc',
        'dddddd',
        'zzzzzzzz',
    ];


    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

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
            
            <View style={styles.imageContainer}>
                <View style={styles.textRow}>
                    <Image 
                        source={Icons[user.img_id]}
                        style={{width: 120, height: 120, borderRadius: 400/ 2}} 
                    />
                </View>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{user.userName}</Text>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.age}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
                    <Text style={[styles.textSecondary, styles.textShadow]}>
                        {user.location}
                    </Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.textDescription}>{user.descripcion} </Text>
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
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
    },
    textPreferences: {
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
    },
    iconPreferences: {
        fontSize: 25,
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
        backgroundColor: randomColor(colors),
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
    imageContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },

    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
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

import React from 'react';
import { Dimensions } from 'react-native';

import {
    FontAwesome,
    FontAwesome5,
    Entypo,
    MaterialIcons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

export const colors = {
    PASS: 'red',
    LIKE: '#64EDCC',
    PINK: '#E850E0',
    BLUE: '#8225E2',
    PURPLE: '#9C27B0',
    YELLOW: '#FBB831',
    ORANGE: '#FB8569',
    DARK_PINK: '#FB569C',
};

export const gustos = {
    MUSICA: 'Musica',
    ANIMALES: 'Animales',
    DEPORTES: 'Deportes',
    AIRE_LIBRE: 'Aire libre',
    TECNOLOGIA: 'Tecnologia',
    CIENCIA: 'Ciencia',
    VIDEOJUEGOS: 'Videojuegos',
    VIAJAR: 'Viajar',
    MODA: 'Moda',
    ASTRONOMIA: 'Astronomia',
    RELIGION: 'Religion',
    SALIR_DE_FIESTA: 'Fiestas',
};

export const strongerColor = {
    [colors.BLUE]: '#5704AB',
    [colors.PINK]: '#A5049E',
    [colors.YELLOW]: '#E59B01',
    [colors.ORANGE]: '#E55836',
    [colors.PURPLE]: '#67027A',
    [colors.DARK_PINK]: '#F31070',
};

export const screenSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    ratio: Dimensions.get('window').height / Dimensions.get('window').width,
};

export const userAttributeTypes = {
    ACCESSORY: 'accessory',
    TSHIRT_GRAPHIC: 'graphic',
    FACIAL_HAIR: 'facialHair',
    SKIN_TONE: 'skinTone',
    HAIR: 'hair',
    BODY: 'body',
    EYES: 'eyes',
    HAT: 'hat',
    MOUTH: 'mouth',
    HAT_COLOR: 'hatColor',
    EYEBROWS: 'eyebrows',
    LIP_COLOR: 'lipColor',
    CLOTHING: 'clothing',
    HAIR_COLOR: 'hairColor',
    CLOTHING_COLOR: 'clothingColor',
};

export const userAttributeOptions = {
    [userAttributeTypes.EYEBROWS]: ['raised', 'leftLowered', 'serious', 'angry', 'concerned'],
    [userAttributeTypes.SKIN_TONE]: ['light', 'yellow', 'brown', 'dark', 'red', 'black'],
    [userAttributeTypes.CLOTHING_COLOR]: ['white', 'blue', 'black', 'green', 'red'],
    [userAttributeTypes.LIP_COLOR]: ['red', 'purple', 'pink', 'turqoise', 'green'],
    [userAttributeTypes.FACIAL_HAIR]: ['none', 'stubble', 'mediumBeard', 'goatee'],
    [userAttributeTypes.HAT_COLOR]: ['white', 'blue', 'black', 'green', 'red'],
    [userAttributeTypes.HAT]: ['none', 'beanie', 'turban', 'party', 'hijab'],
    [userAttributeTypes.BODY]: ['chest', 'breasts'],
    [userAttributeTypes.ACCESSORY]: [
        'none',
        'roundGlasses',
        'tinyGlasses',
        'shades',
        'faceMask',
        'hoopEarrings',
    ],
    [userAttributeTypes.TSHIRT_GRAPHIC]: [
        'none',
        'redwood',
        'gatsby',
        'vue',
        'react',
        'graphQL',
        'donut',
        'rainbow',
    ],
    [userAttributeTypes.HAIR]: [
        'none',
        'long',
        'bun',
        'short',
        'pixie',
        'balding',
        'buzz',
        'afro',
        'bob',
        'mohawk',
    ],
    [userAttributeTypes.EYES]: [
        'normal',
        'leftTwitch',
        'happy',
        'content',
        'squint',
        'simple',
        'dizzy',
        'wink',
        'hearts',
        'crazy',
        'cute',
        'dollars',
        'stars',
        'cyborg',
        'simplePatch',
        'piratePatch',
    ],
    [userAttributeTypes.HAIR_COLOR]: [
        'blonde',
        'orange',
        'black',
        'white',
        'brown',
        'blue',
        'pink',
    ],
    [userAttributeTypes.CLOTHING]: [
        'naked',
        'shirt',
        'dressShirt',
        'vneck',
        'tankTop',
        'dress',
        'denimJacket',
        'hoodie',
        'chequeredShirt',
        'chequeredShirtDark',
    ],
    [userAttributeTypes.MOUTH]: [
        'grin',
        'sad',
        'openSmile',
        'lips',
        'open',
        'serious',
        'tongue',
        'piercedTongue',
        'vomitingRainbow',
    ],
};

const sizeIcons = 27;

export const iconosGustos = {
    [gustos.MUSICA]: <FontAwesome5 name="music" size={sizeIcons} color={colors.YELLOW} />,
    [gustos.AIRE_LIBRE]: <FontAwesome5 name="tree" size={sizeIcons} color={colors.YELLOW} />,
    [gustos.DEPORTES]: (
        <MaterialIcons name="sports-tennis" size={sizeIcons} color={colors.YELLOW} />
    ),
    [gustos.SALIR_DE_FIESTA]: <Entypo name="drink" size={sizeIcons} color={colors.YELLOW} />,
    [gustos.VIDEOJUEGOS]: <FontAwesome5 name="gamepad" size={sizeIcons} color={colors.YELLOW} />,
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

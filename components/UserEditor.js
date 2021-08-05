import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Chip } from 'react-native-elements';
import { userAtributesOptions, userAtributes } from '../config';
import { colors, strongerColor, screenSize } from '../config';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserEditor({ user, color }) {
    const [attrTypes, _] = useState(Object.values(userAtributes));

    const [currAttrTypeIndex, setCurrAttrTypeIndex] = useState(0);
    const [currAttrOptionIndex, setCurrAttrOptionIndex] = useState(0);
    const [attrOptions, setAttrOptions] = useState(
        userAtributesOptions[attrTypes[currAttrTypeIndex]]
    );

    // TODO -> inicializar con los valores del initial state
    const [currentAtributes, setCurrentAttributes] = useState({
        [userAtributes.HAIR]: 'short',
        [userAtributes.SKIN_TONE]: 'brown',
        [userAtributes.FACIAL_HAIR]: 'mediumBeard',
        [userAtributes.TSHIRT_GRAPHIC]: 'vue',
        [userAtributes.ACCESSORY]: 'shades',
        [userAtributes.BODY]: 'chest',
        [userAtributes.CLOTHING]: 'tankTop',
    });

    const buttonSize = 27;

    const avatarSize =
        screenSize.height >= 750 ? screenSize.height * 0.56 : screenSize.height * 0.45;

    const nombreAtributo = {
        [userAtributes.ACCESSORY]: 'Accesorio',
        [userAtributes.TSHIRT_GRAPHIC]: 'Dibujo remera',
        [userAtributes.FACIAL_HAIR]: 'Vello facil',
        [userAtributes.SKIN_TONE]: 'Color de piel',
        [userAtributes.HAIR]: 'Peinado',
        [userAtributes.BODY]: 'Cuerpo',
        [userAtributes.CLOTHING]: 'Ropa',
    };

    useEffect(() => {
        setAttrOptions(userAtributesOptions[attrTypes[currAttrTypeIndex]]);
    }, [currAttrTypeIndex]);

    const nextAttributeType = () => {
        let proxIndex = currAttrTypeIndex + 1;
        if (proxIndex >= attrTypes.length) proxIndex = 0;
        setCurrAttrTypeIndex(proxIndex);
    };

    const prevAttributeType = () => {
        let proxIndex = currAttrTypeIndex - 1;
        if (proxIndex < 0) proxIndex = attrTypes.length - 1;
        setCurrAttrTypeIndex(proxIndex);
    };

    const nextAttributeOption = () => {
        let proxIndex = currAttrOptionIndex + 1;
        if (proxIndex >= attrOptions.length) proxIndex = 0;
        setCurrAttrOptionIndex(proxIndex);
        updateCurrentAtributes();
    };

    const prevAttributeOption = () => {
        let proxIndex = currAttrTypeIndex - 1;
        if (proxIndex < 0) proxIndex = attrOptions.length - 1;
        setCurrAttrOptionIndex(proxIndex);
        updateCurrentAtributes();
    };

    const updateCurrentAtributes = () => {
        const newAttributes = {
            ...currentAtributes,
            [attrTypes[currAttrTypeIndex]]: attrOptions[currAttrOptionIndex],
        };

        setCurrentAttributes(newAttributes);
    };

    const tagGusto = (nombreAtributo) => (
        <View style={styles.chip}>
            <Chip
                title={nombreAtributo}
                containerStyle={styles.shadow}
                titleStyle={{ fontSize: 20 }}
                type="solid"
                backgroundColor="red"
                iconRight
            />
        </View>
    );

    return (
        <View>
            <LinearGradient colors={[color, strongerColor[color]]} style={{ ...styles.container }}>
                <View style={styles.body}>
                    <View style={styles.imageContainer}>
                        <BigHead
                            accessory={currentAtributes[userAtributes.ACCESSORY]}
                            bgColor="yellow"
                            bgShape="circle"
                            body={currentAtributes[userAtributes.BODY]}
                            clothing={currentAtributes[userAtributes.CLOTHING]}
                            clothingColor="black"
                            eyebrows="angry"
                            eyes="wink"
                            facialHair={currentAtributes[userAtributes.FACIAL_HAIR]}
                            graphic={currentAtributes[userAtributes.TSHIRT_GRAPHIC]}
                            hair={currentAtributes[userAtributes.HAIR]}
                            hairColor="black"
                            hat="none"
                            hatColor="green"
                            lashes={false}
                            lipColor="purple"
                            mouth="open"
                            showBackground={true}
                            size={avatarSize}
                            skinTone={currentAtributes[userAtributes.SKIN_TONE]}
                        />
                    </View>

                    <View style={styles.arrowButtonsContainer}>
                        <View />
                        <TouchableOpacity
                            style={[styles.cardArrowButton, styles.shadow]}
                            onPress={prevAttributeType}
                        >
                            <FontAwesome
                                name="arrow-left"
                                size={buttonSize}
                                color={'white'}
                            ></FontAwesome>
                        </TouchableOpacity>

                        {tagGusto(nombreAtributo[attrTypes[currAttrTypeIndex]])}

                        <TouchableOpacity
                            style={[styles.cardArrowButton, styles.shadow]}
                            onPress={nextAttributeType}
                        >
                            <FontAwesome
                                name="arrow-right"
                                size={buttonSize}
                                color={'white'}
                            ></FontAwesome>
                        </TouchableOpacity>
                        <View />
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.arrowButtonsContainer}>
                <View />
                <TouchableOpacity
                    style={[styles.arrowButton, styles.shadow]}
                    onPress={prevAttributeOption}
                >
                    <FontAwesome
                        name="arrow-left"
                        size={buttonSize}
                        color={colors.YELLOW}
                    ></FontAwesome>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.arrowButton, styles.shadow]}
                    onPress={nextAttributeOption}
                >
                    <FontAwesome
                        name="arrow-right"
                        size={buttonSize}
                        color={colors.YELLOW}
                    ></FontAwesome>
                </TouchableOpacity>
                <View />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        padding: 15,
        height: `${screenSize.ratio * 48}%`,
    },

    chip: {
        marginHorizontal: 20,
        flexDirection: 'row',
    },

    body: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    arrowButtonsContainer: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    cardArrowButton: {
        width: 50,
        height: 50,
        backgroundColor: colors.YELLOW,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    arrowButton: {
        width: 60,
        height: 60,
        backgroundColor: colors.PURPLE,
        borderRadius: 100,
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

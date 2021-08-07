import React, { useEffect, useState } from 'react';
import { FontAwesome, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Chip } from 'react-native-elements';
import { userAttributeOptions, userAttributeTypes } from '../config';
import { colors, strongerColor, screenSize } from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { guardarAvatar } from '../actions';
import { ToastAndroid, Alert } from 'react-native';

export default function UserEditor() {
    const usuario = useSelector((state) => state.general.usuario);
    const dispatch = useDispatch();

    const attrTypes = Object.values(userAttributeTypes);

    const [attrOptions, setAttrOptions] = useState(userAttributeOptions[attrTypes[attrTypeIndex]]);
    const [attrTypeIndex, setAttrTypeIndex] = useState(0);
    const [attrOptionIndex, setAttrOptionIndex] = useState(0);

    // TODO -> inicializar con los valores del initial state
    const [currentAtributes, setCurrentAttributes] = useState(usuario.atributos);

    const showToastWithGravityAndOffset = () => {
        if (Platform.OS === 'ios') {
            Alert.alert('Avatar guardado');
        } else {
            ToastAndroid.showWithGravityAndOffset(
                'Avatar guardado',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                50,
                50
            );
        }
    };

    const nombreAtributo = {
        [userAttributeTypes.ACCESSORY]: 'Accesorio',
        [userAttributeTypes.TSHIRT_GRAPHIC]: 'Dibujo remera',
        [userAttributeTypes.FACIAL_HAIR]: 'Vello facil',
        [userAttributeTypes.SKIN_TONE]: 'Color de piel',
        [userAttributeTypes.HAIR]: 'Peinado',
        [userAttributeTypes.BODY]: 'Cuerpo',
        [userAttributeTypes.CLOTHING]: 'Ropa',
        [userAttributeTypes.EYES]: 'Ojos',
        [userAttributeTypes.HAT]: 'Sombrero',
        [userAttributeTypes.MOUTH]: 'Boca',
        [userAttributeTypes.EYEBROWS]: 'Cejas',
        [userAttributeTypes.LIP_COLOR]: 'Color de labios',
        [userAttributeTypes.HAIR_COLOR]: 'Color de pelo',
        [userAttributeTypes.HAT_COLOR]: 'Color de sombrero',
        [userAttributeTypes.CLOTHING_COLOR]: 'Color de ropa',
    };

    const buttonSize = 27;

    const avatarSize =
        screenSize.height >= 750 ? screenSize.height * 0.56 : screenSize.height * 0.45;

    useEffect(() => {
        setAttrOptions(userAttributeOptions[attrTypes[attrTypeIndex]]);
    }, [attrTypeIndex]);

    const nextAttributeType = () => {
        let proxIndex = attrTypeIndex + 1;
        if (proxIndex >= attrTypes.length) proxIndex = 0;
        setAttrTypeIndex(proxIndex);
    };

    const prevAttributeType = () => {
        let proxIndex = attrTypeIndex - 1;
        if (proxIndex < 0) proxIndex = attrTypes.length - 1;
        setAttrTypeIndex(proxIndex);
    };

    const nextAttributeOption = () => {
        let proxIndex = attrOptionIndex + 1;
        if (proxIndex >= attrOptions.length) proxIndex = 0;
        setAttrOptionIndex(proxIndex);
        updateCurrentAtributes();
    };

    const prevAttributeOption = () => {
        let proxIndex = attrTypeIndex - 1;
        if (proxIndex < 0) proxIndex = attrOptions.length - 1;
        setAttrOptionIndex(proxIndex);
        updateCurrentAtributes();
    };

    const updateCurrentAtributes = () => {
        const newAttributes = {
            ...currentAtributes,
            [attrTypes[attrTypeIndex]]: attrOptions[attrOptionIndex],
        };

        setCurrentAttributes(newAttributes);
    };

    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const randomize = () => {
        const randomAttributes = {};

        attrTypes.forEach((type) => {
            let randomOptions = userAttributeOptions[type];
            randomAttributes[type] = randomOptions[randInt(0, randomOptions.length)];
        });

        setCurrentAttributes(randomAttributes);
    };

    const save = () => {
        dispatch(guardarAvatar(currentAtributes));
        showToastWithGravityAndOffset();
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
            <LinearGradient
                colors={[usuario.colorCard, strongerColor[usuario.colorCard]]}
                style={styles.container}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        style={[styles.saveButton, styles.shadow]}
                        onPress={randomize}
                    >
                        <FontAwesome5
                            name="random"
                            size={buttonSize}
                            color={colors.YELLOW}
                        ></FontAwesome5>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.randomButton, styles.shadow]} onPress={save}>
                        <Entypo name="save" size={buttonSize} color={colors.YELLOW}></Entypo>
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <BigHead
                        lashes={false}
                        bgColor="yellow"
                        bgShape="circle"
                        size={avatarSize}
                        showBackground={true}
                        body={currentAtributes[userAttributeTypes.BODY]}
                        hat={currentAtributes[userAttributeTypes.HAT]}
                        mouth={currentAtributes[userAttributeTypes.MOUTH]}
                        accessory={currentAtributes[userAttributeTypes.ACCESSORY]}
                        clothingColor={currentAtributes[userAttributeTypes.CLOTHING_COLOR]}
                        eyes={currentAtributes[userAttributeTypes.EYES]}
                        clothing={currentAtributes[userAttributeTypes.CLOTHING]}
                        facialHair={currentAtributes[userAttributeTypes.FACIAL_HAIR]}
                        graphic={currentAtributes[userAttributeTypes.TSHIRT_GRAPHIC]}
                        hair={currentAtributes[userAttributeTypes.HAIR]}
                        hairColor={currentAtributes[userAttributeTypes.HAIR_COLOR]}
                        hatColor={currentAtributes[userAttributeTypes.HAT_COLOR]}
                        eyebrows={currentAtributes[userAttributeTypes.EYEBROWS]}
                        lipColor={currentAtributes[userAttributeTypes.LIP_COLOR]}
                        skinTone={currentAtributes[userAttributeTypes.SKIN_TONE]}
                    />

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

                        {tagGusto(nombreAtributo[attrTypes[attrTypeIndex]])}

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

    header: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'flex-end',
    },

    chip: {
        marginHorizontal: 20,
        flexDirection: 'row',
    },

    body: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },

    arrowButtonsContainer: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    cardArrowButton: {
        width: 50,
        height: 50,
        backgroundColor: colors.YELLOW,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    arrowButton: {
        width: 60,
        height: 60,
        backgroundColor: colors.PURPLE,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    saveButton: {
        width: 70,
        height: 70,
        backgroundColor: colors.PURPLE,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    randomButton: {
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

import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Platform, ToastAndroid, Alert } from 'react-native';
import { colors, strongerColor, screenSize, gustos, iconosGustos } from '../config';
import { TouchableOpacity, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { guardarGustos } from '../actions';

const commandsButtonsSize = 27;

export const DatosPersonalesCard = ({ usuario }) => {
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.ORANGE, strongerColor[colors.ORANGE]]}
        >
            <View style={styles.header}>
                <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => {}}>
                    <Entypo name="back-in-time" size={commandsButtonsSize} color={colors.YELLOW} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => {}}>
                    <Entypo name="save" size={commandsButtonsSize} color={colors.YELLOW} />
                </TouchableOpacity>
            </View>

            <View style={styles.textRow}>
                <Text style={[styles.textMessagePrimary, styles.textShadow]}>Datos personales</Text>
            </View>

            <View style={styles.body}>
                <View style={{ ...styles.inputView, height: '15%' }}>
                    <Text style={styles.label}>User Name</Text>
                    <TextInput
                        label="Email"
                        style={styles.textInput}
                        placeholder="Nombre"
                        placeholderTextColor="#000"
                        onChangeText={(nombre) => {}}
                    />
                </View>

                <View style={{ ...styles.inputView, height: '50%', marginTop: 20 }}>
                    <Text style={{ flexDirection: 'row' }}>User Name</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Escribe un mensaje"
                        placeholderTextColor="#000"
                        multiline={true}
                        textAlignVertical={'auto'}
                        onChangeText={(descripcion) => {}}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={[styles.textMessagePrimary, styles.textShadow]}>
                    swipe para otras opciones{'\n'}
                    {<MaterialIcons name="swipe" size={50} color={colors.YELLOW} />}
                </Text>
            </View>
        </LinearGradient>
    );
};

export const SeleccionGustosCard = () => {
    const usuario = useSelector((state) => state.general.usuario);

    const dispatch = useDispatch();

    const [gustosSeleccionados, setGustosSeleccionados] = useState(usuario.gustos);

    const gustosPorFila = 2;
    const maximosGustosPosibles = 4;
    const nombreGustos = Object.values(gustos);

    const showToastWithGravityAndOffset = (mensaje) => {
        if (Platform.OS === 'ios') {
            Alert.alert('No puedes seleccionar mas...');
        } else {
            ToastAndroid.showWithGravityAndOffset(
                mensaje,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                50,
                50
            );
        }
    };

    const getColorBotonGusto = (gusto) => {
        if (gustosSeleccionados.includes(gusto)) return colors.DARK_PINK;
        return colors.BLUE;
    };

    const handleSelect = (gusto) => {
        if (
            gustosSeleccionados.length == maximosGustosPosibles &&
            !gustosSeleccionados.includes(gusto)
        ) {
            showToastWithGravityAndOffset('No puedes seleccionar mas...');
            return;
        }

        if (gustosSeleccionados.includes(gusto))
            setGustosSeleccionados(gustosSeleccionados.filter((g) => g != gusto));
        else setGustosSeleccionados([...gustosSeleccionados, gusto]);
    };

    const save = () => {
        dispatch(guardarGustos(gustosSeleccionados));
        showToastWithGravityAndOffset('Gustos guardados');
    };

    const restore = () => {
        setGustosSeleccionados(usuario.gustos);
    };

    const botonGusto = (gusto) => (
        <TouchableOpacity onPress={() => handleSelect(gusto)}>
            <View style={{ ...styles.gustoContainer, backgroundColor: getColorBotonGusto(gusto) }}>
                <Text style={styles.textGustos}>{gusto}</Text>
                {iconosGustos[gusto]}
            </View>
        </TouchableOpacity>
    );

    return (
        <LinearGradient style={styles.container} colors={[colors.PINK, strongerColor[colors.PINK]]}>
            <View style={styles.header}>
                <TouchableOpacity style={[styles.button, styles.shadow]} onPress={restore}>
                    <Entypo name="back-in-time" size={commandsButtonsSize} color={colors.YELLOW} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.shadow]} onPress={save}>
                    <Entypo name="save" size={commandsButtonsSize} color={colors.YELLOW} />
                </TouchableOpacity>
            </View>

            <View style={styles.textRow}>
                <Text style={[styles.textMessagePrimary, styles.textShadow]}>
                    Seleccioná los tus intereses...
                </Text>
            </View>

            <Text style={[styles.textMessageSeconday, styles.textShadow]}>
                {gustosSeleccionados.length} de {maximosGustosPosibles}
            </Text>

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
                    {<MaterialIcons name="swipe" size={50} color={colors.YELLOW} />}
                </Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        padding: 10,
        height: `${screenSize.height >= 750 ? screenSize.ratio * 48 : screenSize.ratio * 56}%`,
    },

    header: {
        marginTop: 10,
    },

    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputView: {
        backgroundColor: '#FFF',
        borderColor: colors.PURPLE,
        borderWidth: 3,
        borderRadius: 30,
        width: '100%',
    },

    textArea: {
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20,
        height: 100,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },

    textInput: {
        height: 50,
        flex: 1,
        paddingLeft: 25,
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

    label: {},

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

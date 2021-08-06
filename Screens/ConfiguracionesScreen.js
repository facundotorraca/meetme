import React, { useEffect, useState } from 'react';
import { colors, gustos } from '../config';
import SettingsComponent from '../components/Settings';
import { StyleSheet, View, Text } from 'react-native';
import UserEditor from '../components/UserEditor';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export const InformacionPersonal = (props) => {
    const sizeIcons = 27;
    const gustosPorFila = 3;
    const nombreGustos = Object.values(gustos);

    const [selectedTags, setSelectedTags] = useState([]);

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
    };

    const botonGusto = (gusto) => (
        <TouchableOpacity>
            <View style={styles.gustoContainer}>
                <Text style={styles.textGustos}>{gusto}</Text>
                {iconosGustos[gusto]}
            </View>
        </TouchableOpacity>
    );

    const gustosSelector = () => {
        const botonesGustos = [];

        let filaGustos = [];
        nombreGustos.forEach((gusto, index) => {
            filaGustos.push(botonGusto(gusto));
            if ((index + 1) % gustosPorFila == 0) {
                botonesGustos.push(
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{filaGustos}</View>
                );
                filaGustos = [];
            }
        });

        // si quedaron algunos
        if (filaGustos.length != 0)
            botonesGustos.push(
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{filaGustos}</View>
            );

        return botonesGustos;
    };

    return <View style={styles.container}>{gustosSelector()}</View>;
};

export const EditarCard = (props) => {
    const miUsuario = useSelector((state) => state.general.usuario);

    return (
        <View style={styles.container}>
            <View style={styles.userCardContainer}>
                <UserEditor user={miUsuario} color={miUsuario.colorCard} />
            </View>
        </View>
    );
};

const CofiguracionesScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const saveSetting = (key, value) => {
        return;
    };

    const settingsOptions = [
        {
            title: 'Avatar',
            subTitle: 'Selecciona tu avatar',
            onPress: () => navigation.navigate('EditarCard'),
            icon: <FontAwesome name="user-circle-o" size={40} color={colors.PURPLE} />,
        },
        {
            title: 'Informacion',
            subTitle: 'Edita tu informacion personal y gustos',
            icon: <MaterialIcons name="description" size={40} color={colors.PURPLE} />,
            onPress: () => navigation.navigate('InformacionPersonal'),
        },
        {
            title: 'Sobre nosotros',
            subTitle: null,
            onPress: () => {},
            icon: <MaterialIcons name="info" size={40} color={colors.PURPLE} />,
        },
        {
            title: 'Terminos y condiciones',
            subTitle: null,
            onPress: () => {},
            icon: <FontAwesome name="book" size={40} color={colors.PURPLE} />,
        },
    ];

    const prefArr = [
        {
            name: 'First Name',
            selected: sortBy === 'First Name',

            onPress: () => {
                saveSetting('sortBy', 'First Name');
                setSortBy('First Name');
                setModalVisible(false);
            },
        },
        {
            name: 'Last Name',
            selected: sortBy === 'Last Name',
            onPress: () => {
                saveSetting('sortBy', 'Last Name');
                setSortBy('Last Name');
                setModalVisible(false);
            },
        },
    ];

    const getSettings = async () => {
        const user = { email: 'test' };
        setEmail(user.email);
    };
    useEffect(() => {
        getSettings();
    }, []);

    return (
        <SettingsComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            settingsOptions={settingsOptions}
            prefArr={prefArr}
        />
    );
};

export default CofiguracionesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    gustoContainer: {
        flexDirection: 'row',
        borderRadius: 40,
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginHorizontal: 4,
        backgroundColor: colors.BLUE,
    },

    userCardContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 180,
        backgroundColor: 'white',
    },

    textGustos: {
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        marginRight: 10,
        color: 'white',
    },
});

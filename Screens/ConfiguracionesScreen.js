import React, { useEffect, useState } from 'react';
import { colors, gustos } from '../config';
import SettingsComponent from '../components/Settings';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import UserEditor from '../components/UserEditor';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export const InformacionPersonal = (props) => {
    const sizeIcons = 27;
    const gustosPorFila = 2;
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
        [gustos.MODA]: <FontAwesome5 name="tshirt" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.VIAJAR]: <FontAwesome5 name="plane" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.TECNOLOGIA]: <FontAwesome5 name="laptop" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.ANIMALES]: <FontAwesome5 name="dog" size={sizeIcons} color={colors.YELLOW} />,
        [gustos.CIENCIA]: <MaterialIcons name="science" size={sizeIcons} color={colors.YELLOW} />,
    };

    const handlePress = (gusto) => {
        console.log(selectedTags);
        if (selectedTags.includes(gusto)) setSelectedTags(selectedTags.filter((g) => g != gusto));
        else setSelectedTags([...selectedTags, gusto]);
    };

    const getColorBotonGusto = (gusto) => {
        if (selectedTags.includes(gusto)) return colors.DARK_PINK;
        return colors.BLUE;
    };

    const botonGusto = (gusto) => (
        <TouchableOpacity onPress={() => handlePress(gusto)}>
            <View style={{ ...styles.gustoContainer, backgroundColor: getColorBotonGusto(gusto) }}>
                <Text style={styles.textGustos}>{gusto}</Text>
                {iconosGustos[gusto]}
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={nombreGustos}
            numColumns={gustosPorFila}
            keyExtractor={(index) => index}
            style={styles.container}
            renderItem={({ item: gusto }) => botonGusto(gusto)}
        />
    );
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
            onPress: () => {},
            icon: <MaterialIcons name="info" size={40} color={colors.PURPLE} />,
        },
        {
            title: 'Terminos y condiciones',
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
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 40,
        paddingVertical: 5,
        marginHorizontal: 4,
        paddingHorizontal: 20,
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
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
    },
});

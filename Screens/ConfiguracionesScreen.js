import React, { useEffect, useState, useRef } from 'react';
import { colors } from '../config';
import SettingsComponent from '../components/Settings';
import { StyleSheet, View } from 'react-native';
import UserEditor from '../components/UserEditor';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { SeleccionGustosCard, DatosPersonalesCard } from '../components/SettingsCards';
import { RectButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import MyCard from '../components/MyCard';
import { desautorizar } from '../actions/index';

export const InformacionPersonal = (props) => {
    const usuario = useSelector((state) => state.general.usuario);

    const pantallas = {
        SELECCION_DE_GUSTOS: 'Seleccion de gustos',
        DATOS_PERSONALES: 'Datos personales',
        MY_CARD: 'My card',
    };

    useEffect(() => {}, [selectedTags]);

    const swipesRef = useRef(null);

    const [selectedTags, setSelectedTags] = useState([]);

    const handlePress = (gusto) => {
        if (selectedTags.includes(gusto)) setSelectedTags(selectedTags.filter((g) => g != gusto));
        else setSelectedTags([...selectedTags, gusto]);
    };

    const restore = () => {};
    const save = () => {};

    const obtenerPantalla = (pantalla) => {
        switch (pantalla) {
            case pantallas.SELECCION_DE_GUSTOS:
                return (
                    <SeleccionGustosCard
                        onGustoSelected={handlePress}
                        selectedGustos={selectedTags}
                    />
                );
            case pantallas.DATOS_PERSONALES:
                return <DatosPersonalesCard />;

            case pantallas.MY_CARD:
                return <MyCard />;

            default:
                throw new exception('Settings menu not found');
        }
    };

    const renderCard = (pantalla) => {
        return <RectButton style={styles.container}>{obtenerPantalla(pantalla)}</RectButton>;
    };

    return (
        <View style={styles.container}>
            <View style={styles.swipe}>
                <Swiper
                    ref={swipesRef}
                    backgroundColor={'white'}
                    cardVerticalMargin={20}
                    marginBottom={150}
                    onSwipedLeft={() => {}}
                    onSwipedRight={() => {}}
                    cards={[
                        pantallas.SELECCION_DE_GUSTOS,
                        pantallas.DATOS_PERSONALES,
                        pantallas.MY_CARD,
                    ]}
                    key={selectedTags.length}
                    cardIndex={0}
                    renderCard={renderCard}
                    stackSize={3}
                    stackSeparation={15}
                    useViewOverflow={Platform.OS === 'ios'}
                    infinite={true}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    swipeBackCard
                />
            </View>
        </View>
    );
};

export const EditarCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.userCardContainer}>
                <UserEditor />
            </View>
        </View>
    );
};

const CofiguracionesScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
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
        {
            title: 'Logout!',
            onPress: () => {
                dispatch(desautorizar());
            },
            icon: <FontAwesome5 name="door-open" size={35} color={colors.PURPLE} />,
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

    swipe: {
        flex: 1,
        backgroundColor: 'white',
    },

    userCardContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 180,
        backgroundColor: 'white',
    },
});

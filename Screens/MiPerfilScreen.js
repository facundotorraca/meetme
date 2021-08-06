import React, { useEffect, useState } from 'react';
import { colors } from '../config';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import SettingsComponent from '../components/Settings';
import { StyleSheet, View } from 'react-native';
import UserEditor from '../components/UserEditor';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

export const EditarCard = (props) => {
    const miUsuario = useSelector((state) => state.general.usuario);
    const buttonSize = 27;

    return (
        <View style={styles.container}>
            <View style={styles.userCardContainer}>
                <UserEditor user={miUsuario} color={miUsuario.colorCard} />
            </View>
        </View>
    );
};

const MiPerfilScreen = ({ navigation }) => {
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
            onPress: () => {},
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

export default MiPerfilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    userCardContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 180,
        backgroundColor: 'white',
    },
});

import React, { useEffect, useState } from 'react';
import SettingsComponent from '../components/Settings';

const UserSettingsScreen = () => {
    const [email, setEmail] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const saveSetting = (key, value) => {
        return;
    };

    const settingsOptions = [
        { title: 'Avatar', subTitle: 'Selecciona tu avatar', onPress: () => {} },
        { title: 'Name format', subTitle: 'First name first', onPress: () => {} },
        { title: 'Import', subTitle: null, onPress: () => {} },
        { title: 'Export', subTitle: null, onPress: () => {} },
        { title: 'Blocked numbers', subTitle: null, onPress: () => {} },
        { title: 'About RNContacts', subTitle: null, onPress: () => {} },
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

        if (sortPref) {
            setSortBy('First Name');
        }
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

export default UserSettingsScreen;

import React from 'react';
import StackChat from './StackChat';
import MiPerfil from '../components/MiPerfil';
import { colors } from '../config';
import HomeScreen from '../Screens/HomeScreen';
import { StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Actividades from '../Screens/ActividadesScreen';

const TabTopBar = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const Tab = createMaterialTopTabNavigator();

    const inactiveColor = 'white';
    const iconSize = 25;

    return (
        <Tab.Navigator
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                style: { ...styles.container },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    color: colors.PURPLE,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="fire"
                            size={iconSize}
                            color={focused ? colors.YELLOW : inactiveColor}
                        ></FontAwesome5>
                    ),
                }}
            />

            <Tab.Screen
                name="Chat"
                component={StackChat}
                options={{
                    title: 'Chat',
                    tabBarBadge: 3,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="comments"
                            size={iconSize}
                            color={focused ? colors.YELLOW : inactiveColor}
                        ></FontAwesome>
                    ),
                }}
            />

            <Tab.Screen
                name="Actividades"
                component={Actividades}
                options={{
                    title: 'Actividades',
                    tabBarBadge: 3,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="tasks"
                            size={iconSize}
                            color={focused ? colors.YELLOW : inactiveColor}
                        ></FontAwesome5>
                    ),
                }}
            />

            <Tab.Screen
                name="MiPerfil"
                component={MiPerfil}
                options={{
                    title: 'Me',
                    showIcon: true,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="user"
                            size={iconSize}
                            color={focused ? colors.YELLOW : inactiveColor}
                        ></FontAwesome>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: colors.PURPLE,
    },
});

export default TabTopBar;

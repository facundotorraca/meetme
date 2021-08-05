import React from 'react';
import StackChat from './StackChat';
import { colors } from '../config';
import { StyleSheet } from 'react-native';
import StackMiPerfil from './StackMiPerfil';
import HomeScreen from '../Screens/HomeScreen';
import Actividades from '../Screens/ActividadesScreen';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TabTopBar = () => {
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
                            size={iconSize - 2 /*es un poco mas grande que los normales*/}
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
                component={StackMiPerfil}
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

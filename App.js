import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { menus } from './config';
import Chat from './components/Chat';
import Inbox from './components/Inbox';
import Swipes from './components/Swipes';
import BottomBar from './components/BottomBar';
import HomeScreen from './Screens/HomeScreen';
import { Alert, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PubsScreen, { Invitacion, PubScreen } from './Screens/PubsScreen';
import Regalos, { Regalo, MensajeRegalo } from './Screens/RegalosScreen';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { InboxScreen } from './components/Inbox';
import MiPerfil from './components/MiPerfil';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const StackChat = createStackNavigator();
const StackMensajeria = () => {
    return (
        <StackChat.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <StackChat.Screen
                name="Inbox"
                component={InboxScreen}
                options={({ route }) => ({
                    headerTitle: false,
                })}
            />
            <StackChat.Screen name="Chat" component={Chat} />
        </StackChat.Navigator>
    );
};

const Tab = createMaterialTopTabNavigator();
const TabTop = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={StackMensajeria} />
            <Tab.Screen name="MiPerfil" component={MiPerfil} />
        </Tab.Navigator>
    );
};

const RootComponent = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'white',
                    },
                }}
            >
                <Stack.Screen name="Tab" component={TabTop} />
                <Stack.Screen
                    name="Meetme"
                    component={HomeScreen}
                    options={({ route }) => ({
                        headerTitle: false,
                    })}
                />

                <Stack.Screen
                    name="Pubs"
                    component={PubsScreen}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                    })}
                />

                <Stack.Screen
                    name="Pub"
                    component={PubScreen}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                    })}
                />

                <Stack.Screen
                    name="Invitacion"
                    component={Invitacion}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                    })}
                />

                <Stack.Screen
                    name="Regalos"
                    component={Regalos}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                    })}
                />

                <Stack.Screen
                    name="Regalo"
                    component={Regalo}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                    })}
                />

                <Stack.Screen
                    name="MensajeRegalo"
                    component={MensajeRegalo}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                    })}
                />

                <Stack.Screen
                    name="Mi Perfil"
                    component={MiPerfil}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const { store, persistor } = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootComponent />
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },

    swipe: {
        flex: 1,
        padding: 12,
        paddingTop: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
});

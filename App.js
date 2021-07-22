import React, { useState, useEffect, useRef } from 'react';
import HomeScreen from './Screens/HomeScreen';
import { Alert, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PubsScreen, { Invitacion, PubScreen } from './Screens/PubsScreen';
import Regalos, { Regalo, MensajeRegalo } from './Screens/RegalosScreen';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MiPerfil from './components/MiPerfil';
import TopBar from './components/TopBar';

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
                <Stack.Screen name="Tab" component={TopBar} />

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

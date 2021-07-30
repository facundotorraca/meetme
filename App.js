import React, { useState, useEffect, useRef } from 'react';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MiPerfil from './components/MiPerfil';
import TopBar from './navigation/TopBar';

// desactivar warning de las librerias
import { View, LogBox } from 'react-native';
LogBox.ignoreLogs(['Animated']);

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

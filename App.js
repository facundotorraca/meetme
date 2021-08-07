import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';
import TopBar from './navigation/TopBar';
import configureStore from './store/configureStore';

// desactivar warning de las librerias
import { LogBox } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
LogBox.ignoreLogs(['Animated']);

const RootComponent = () => {
    const autorizado = useSelector((state) => state.general.usuario.autorizado);
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
                {!autorizado ? (
                    <Stack.Screen name="Login" component={LoginScreen} />
                ) : (
                    <Stack.Screen name="Tab" component={TopBar} />
                )}
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

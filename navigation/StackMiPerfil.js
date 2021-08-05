import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MiPerfilScreen, { EditarCard } from '../Screens/MiPerfilScreen';

const Stack = createStackNavigator();

const StackMiPerfil = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen
                name="MiPerfil"
                component={MiPerfilScreen}
                options={({ route }) => ({
                    headerBackTitleVisible: true,
                })}
            />

            <Stack.Screen
                name="EditarCard"
                component={EditarCard}
                options={({ route }) => ({
                    headerBackTitleVisible: true,
                })}
            />
        </Stack.Navigator>
    );
};

export default StackMiPerfil;

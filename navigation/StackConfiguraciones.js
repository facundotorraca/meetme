import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CofiguracionesScreen, {
    EditarCard,
    InformacionPersonal,
} from '../Screens/ConfiguracionesScreen';
import PremiumScreen from '../Screens/PremiumScreen';

const Stack = createStackNavigator();

const StackConfiguraciones = () => {
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
                component={CofiguracionesScreen}
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

            <Stack.Screen
                name="InformacionPersonal"
                component={InformacionPersonal}
                options={({ route }) => ({
                    headerBackTitleVisible: true,
                })}
            />

            <Stack.Screen
                name="PremiumScreen"
                component={PremiumScreen}
                options={({ route }) => ({
                    headerBackTitleVisible: true,
                })}
            />
        </Stack.Navigator>
    );
};

export default StackConfiguraciones;

import React from 'react';
import Chat from '../components/Chat';
import Inbox from '../components/Inbox';
import { createStackNavigator } from '@react-navigation/stack';
import Regalos, { Regalo, MensajeRegalo } from '../Screens/RegalosScreen';
import Lugares, { Lugar, InvitacionLugar } from '../Screens/LugaresScreen';

const Stack = createStackNavigator();

const StackChat = () => {
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
                name="Inbox"
                component={Inbox}
                options={({ route }) => ({
                    headerBackTitleVisible: true,
                })}
            />
            <Stack.Screen name="Chat" component={Chat} />

            <Stack.Screen
                name="Lugares"
                component={Lugares}
                options={({ route }) => ({
                    headerBackTitleVisible: false,
                })}
            />

            <Stack.Screen
                name="Lugar"
                component={Lugar}
                options={({ route }) => ({
                    headerBackTitleVisible: false,
                })}
            />

            <Stack.Screen
                name="InvitacionLugar"
                component={InvitacionLugar}
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
        </Stack.Navigator>
    );
};

export default StackChat;

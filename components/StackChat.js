import React from 'react';
import Chat from './Chat';
import Inbox from './Inbox';
import { createStackNavigator } from '@react-navigation/stack';

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
        </Stack.Navigator>
    );
};

export default StackChat;

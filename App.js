import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { menus } from './config';
import Chat from './components/Chat';
import Inbox from './components/Inbox';
import Swipes from './components/Swipes';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import HomeScreen from './Screens/HomeScreen';
import { Alert, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PubsScreen, { Invitacion, PubScreen } from './Screens/PubsScreen';
import Regalos, { Regalo, MensajeRegalo } from './Screens/RegalosScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function InboxScreen({ navigation }) {
    const {top, bottom} = useSafeAreaInsets()
    return (
        <View style={{...styles.container, marginTop: top +10, marginBottom: bottom}}>
            <TopBar navigation={navigation} menu={menus.INBOX} />
            <Inbox navigation={navigation} />
        </View>
    );
}

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen
                    name="Meetme"
                    component={HomeScreen}
                    options={({ route }) => ({
                        headerTitle: false,
                    })}
                />

                <Stack.Screen
                    name="Inbox"
                    component={InboxScreen}
                    options={({ route }) => ({
                        headerTitle: false,
                    })}
                />

                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={({ route }) => ({
                        title: route.params.userName,
                        headerBackTitleVisible: false,
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
            </Stack.Navigator>
        </NavigationContainer>
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

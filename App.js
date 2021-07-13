import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chat from './components/Chat';
import Inbox from './components/Inbox';
import Swipes from './components/Swipes';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { menus } from './config';
import PubsScreen from './Screens/PubsScreen';
import HomeScreen from './Screens/HomeScreen';
import { Alert, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function InboxScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} menu={menus.INBOX}/>
            <Inbox navigation={navigation} />
        </View>
    );
}

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Meetme" 
                    component={HomeScreen} 
                    options={({ route }) => ({
                        headerTitle: false
                    })}
                />
                
                <Stack.Screen 
                    name="Inbox" 
                    component={InboxScreen} 
                    options={({ route }) => ({
                        headerTitle: false
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'                    
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

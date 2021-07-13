import React from 'react';
import { menus } from "../config";
import TopBar from "../components/TopBar";
import { View, StyleSheet } from 'react-native';

export default function PubsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} menu={menus.PUBS}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
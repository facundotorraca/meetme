import React from 'react';
import { useSelector } from 'react-redux';
import { BigHead } from 'react-native-bigheads';
import { actividades } from '../reducers/initialState';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const Actividades = () => {
    const lista = useSelector((state) => state.general.listaDeActividades).filter(
        (a) => a.tipo == actividades.INVITACION
    );

    const listaDeActividades = lista.slice().reverse();

    const usuarios = useSelector((state) => state.general.usuariosTotales);

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const buscarUsuario = (id) => {
        return usuarios.filter((u) => u.id == id).map((u) => u.nombre);
    };

    const actividadItem = ({ item }) => {
        return (
            <View style={styles.chatInfo}>
                <View style={styles.userImageWrapper}>
                    <BigHead
                        accessory="shades"
                        bgColor="yellow"
                        bgShape="circle"
                        body="chest"
                        clothing="tankTop"
                        clothingColor="black"
                        eyebrows="angry"
                        eyes="wink"
                        facialHair="mediumBeard"
                        graphic="vue"
                        hair="short"
                        hairColor="black"
                        hat="none"
                        hatColor="green"
                        lashes={false}
                        lipColor="purple"
                        mouth="open"
                        showBackground={true}
                        size={80}
                        skinTone="brown"
                    />
                </View>
                <View style={styles.chatDescription}>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.chatUserName}>
                            Tienes una actividad el{' '}
                            {item.fecha.toLocaleDateString('es-ES', dateOptions)}
                        </Text>
                        <Text style={styles.chatPostTime}> </Text>
                    </View>
                    <Text style={styles.messageText}>
                        En: {item.pub?.name} {'\n'}
                        Con el usuario: {buscarUsuario(item.usuarioId)}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={listaDeActividades}
                keyExtractor={(actividad) => actividad.id.toString()}
                renderItem={actividadItem}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    },

    chatCard: {
        width: '100%',
    },

    chatInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    userImageWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 10,
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    chatDescription: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 10,
        marginLeft: 0,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    chatUserName: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    chatPostTime: {
        fontSize: 12,
        color: '#666',
        paddingRight: 10,
    },

    messageText: {
        fontSize: 14,
        color: '#333333',
    },
});

export default Actividades;

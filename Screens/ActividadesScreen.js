import React from 'react';
import { useSelector } from 'react-redux';
import { userAttributeTypes } from '../config';
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
        return usuarios.filter((u) => u.id == id);
    };

    const actividadItem = ({ item }) => {
        const usuario = buscarUsuario(item.usuarioId)[0];

        return (
            <View style={styles.chatInfo}>
                <View style={styles.userImageWrapper}>
                    <BigHead
                        lashes={false}
                        bgColor="yellow"
                        bgShape="circle"
                        size={80}
                        showBackground={true}
                        body={usuario.atributos[userAttributeTypes.BODY]}
                        hat={usuario.atributos[userAttributeTypes.HAT]}
                        mouth={usuario.atributos[userAttributeTypes.MOUTH]}
                        accessory={usuario.atributos[userAttributeTypes.ACCESSORY]}
                        clothingColor={usuario.atributos[userAttributeTypes.CLOTHING_COLOR]}
                        eyes={usuario.atributos[userAttributeTypes.EYES]}
                        clothing={usuario.atributos[userAttributeTypes.CLOTHING]}
                        facialHair={usuario.atributos[userAttributeTypes.FACIAL_HAIR]}
                        graphic={usuario.atributos[userAttributeTypes.TSHIRT_GRAPHIC]}
                        hair={usuario.atributos[userAttributeTypes.HAIR]}
                        hairColor={usuario.atributos[userAttributeTypes.HAIR_COLOR]}
                        hatColor={usuario.atributos[userAttributeTypes.HAT_COLOR]}
                        eyebrows={usuario.atributos[userAttributeTypes.EYEBROWS]}
                        lipColor={usuario.atributos[userAttributeTypes.LIP_COLOR]}
                        skinTone={usuario.atributos[userAttributeTypes.SKIN_TONE]}
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
                        Con el usuario: {usuario.nombre}
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

import React, { useState, useRef, useEffect } from 'react';
import TopBar from '../components/TopBar_deprecated';
import { View, StyleSheet } from 'react-native';
import { menus } from '../config';
import BottomBar from '../components/BottomBar';
import Swipes from '../components/Swipes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Users = [
    {
        id: '1',
        userName: 'Juan Martinez',
        age: 23,
        preferences: ['Fiestas', 'Musica', 'Fotografia'],
        location: 'Belgrano, Buenos Aires.',
        img_id: '01.png',
        descripcion:
            'Hago fotos y toco el saxo. Soy una persona sincera pero sensible. Disfruto mucho salir con mis amigos mas que nada a bares y restaurants',
        messageTime: '4 mins ago',
        messageText: 'Holaa',
    },
    {
        id: '2',
        userName: 'Romina Colombo',
        age: 25,
        preferences: ['Deportes', 'Gaming'],
        location: 'Belgrano, Buenos Aires.',
        img_id: '11.png',
        descripcion:
            'Busco alguien que comparta mi pasión por el running (y que me pueda seguir el paso). Paso mi tiempo libre en los juegos online, mas que nada en el CS.',
        messageTime: '4 mins ago',
        messageText: 'Holaa',
    },
    {
        id: '3',
        userName: 'Franco Dartoy',
        age: 33,
        preferences: ['Deportes'],
        location: 'Devoto, Buenos Aires.',
        img_id: '09.png',
        descripcion:
            'Soy apasionado del futbol, fan de Boca y de Messi hasta la muerte. Si no miras futbol ni me hables',
        messageTime: '4 mins ago',
        messageText: 'Holaa',
    },
    {
        id: '4',
        userName: 'Rocío Fernandez',
        age: 30,
        preferences: ['Musica', 'Deportes', 'Cine'],
        location: 'Devoto, Buenos Aires.',
        img_id: '10.png',
        descripcion:
            'Si buscas resultados distintos no hagas siempre lo mismo y apuesta por esa persona que nunca dirías "es este".',
        messageTime: '4 mins ago',
        messageText: 'Holaa',
    },
    {
        id: '5',
        userName: 'Ignacio Dominguez',
        age: 45,
        preferences: ['Cine', 'Fiestas', 'Musica'],
        location: 'Tigre, Buenos Aires.',
        img_id: '06.png',
        descripcion:
            'Tranqui, cuando alguien nos pregunte vamos a decir que nos conocimos en un museo. Disfruto la vida lo mas que puedo ' +
            'Me gusta mirar peliculas e ir a fiestas. En mi tiempo libre escucho música.',
        messageTime: '4 mins ago',
        messageText: 'Holaa',
    },
    {
        id: '6',
        userName: 'Soledad Guerra',
        age: 49,
        preferences: ['Cine'],
        location: 'Tigre, Buenos Aires.',
        img_id: '04.png',
        descripcion:
            'Soy bastante reservada así que si te interesa lo hablamos. Eso sí, me encanta ir al cine.',
        messageTime: '4 mins ago',
        messageText: 'Holaa',
    },
];

export default function HomeScreen({ navigation }) {
    const swipesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { top, bottom } = useSafeAreaInsets();

    function handleLike() {
        nextUser();
    }

    function handlePass() {
        nextUser();
    }

    function nextUser() {
        const nextIndex = Users.length - 2 === currentIndex ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }

    function handlePassPress() {
        swipesRef.current.openRight();
    }

    function handleLikePress() {
        swipesRef.current.openLeft();
    }

    return (
        <View style={{ ...styles.container, marginTop: top + 10, marginBottom: bottom }}>
            <View style={styles.swipe}>
                {Users.length > 1 &&
                    Users.map(
                        (u, i) =>
                            currentIndex === i && (
                                <Swipes
                                    key={i}
                                    ref={swipesRef}
                                    users={Users}
                                    currentIndex={currentIndex}
                                    handleLike={handleLike}
                                    handlePass={handlePass}
                                />
                            )
                    )}
            </View>

            <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

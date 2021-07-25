import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import Swipes from '../components/Swipes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { matchearUsuario } from '../actions/index';
import { set } from 'react-native-reanimated';

export default function HomeScreen() {
    const dispatch = useDispatch();

    const [usersToShow, setUsersToShow] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const users = useSelector((state) => state.general.usuariosTotales);

    useEffect(() => {
        console.log(users);
        setUsersToShow(users.filter((u) => u.match == false));
    }, [users]);

    const swipesRef = useRef(null);
    const { top, bottom } = useSafeAreaInsets();

    function handleLike(usuario) {
        dispatch(matchearUsuario(usuario));
        console.log(currentIndex);
    }

    function handlePass() {
        const nextIndex = currentIndex + 1; // >= usersToShow.length ? 0 : currentIndex + 1;
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
                {usersToShow.length > 0 && (
                    <Swipes
                        key={currentIndex}
                        ref={swipesRef}
                        user={usersToShow[currentIndex]}
                        nextUser={usersToShow[currentIndex + 1]}
                        handleLike={() => handleLike(usersToShow[currentIndex])}
                        handlePass={() => handlePass()}
                    />
                )}
            </View>

            <BottomBar
                handleLikePress={handleLikePress}
                handlePassPress={handlePassPress}
                disabled={!usersToShow[currentIndex]}
            />
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

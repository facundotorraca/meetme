import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import Swipes from '../components/Swipes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { matchearUsuario } from '../actions/index';

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.general.usuariosTotales);
    let Users = users.filter((u) => u.match == false);

    const swipesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { top, bottom } = useSafeAreaInsets();

    function handleLike(usuario) {
        dispatch(matchearUsuario(usuario));
    }

    function handlePass() {
        nextUser();
    }

    function nextUser() {
        const nextIndex = Users?.length - 2 === currentIndex ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }

    function handlePassPress(usuario) {
        swipesRef.current.openRight();
    }

    function handleLikePress(usuario) {
        swipesRef.current.openLeft();
    }

    return (
        <View style={{ ...styles.container, marginTop: top + 10, marginBottom: bottom }}>
            <View style={styles.swipe}>
                {Users?.length > 1 &&
                    Users.map(
                        (u, i) =>
                            currentIndex === i && (
                                <Swipes
                                    key={i}
                                    ref={swipesRef}
                                    users={Users}
                                    currentIndex={currentIndex}
                                    handleLike={() => handleLike(u)}
                                    handlePass={() => handlePass(u)}
                                />
                            )
                    )}
            </View>

            <BottomBar
                handleLikePress={handleLikePress}
                handlePassPress={handlePassPress}
                disabled={Users.length == 0 ? true : false}
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

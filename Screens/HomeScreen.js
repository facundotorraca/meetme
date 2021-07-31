import React, { useState, useRef } from 'react';
import { Platform, ToastAndroid } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../components/UserCard';
import BottomBar from '../components/BottomBar';
import { matchearUsuario } from '../actions';
import EmptyUserCard from '../components/EmptyUsersCard';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const swipesRef = useRef(null);
    const [index, setIndex] = useState(0);

    const users = useSelector((state) => {
        const usersToShow = state.general.usuariosTotales.filter((u) => !u.leDiLike);

        // agrego un elemento null al final para poder
        // detectar que se terminaron los usuarios y
        // mostrar el card de fin de usuarios
        return [...usersToShow, null];
    });

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Has hecho match!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
        );
    };

    const renderCard = (user) => {
        return (
            <RectButton style={styles.container}>
                {user ? <UserCard user={user} color={user.colorCard} /> : <EmptyUserCard />}
            </RectButton>
        );
    };

    const handlePass = (index, user) => {
        setIndex(index + 1);
    };

    const handleLike = (index, user) => {
        if (!user) return;
        if (user.meDioLike) showToastWithGravityAndOffset();
        dispatch(matchearUsuario(user));
    };

    const leftLabel = {
        title: 'PASS',
        style: {
            label: {
                backgroundColor: 'red',
                color: 'white',
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30,
            },
        },
    };

    const rightLabel = {
        title: 'LIKE',
        style: {
            label: {
                backgroundColor: '#64EDCC',
                color: 'white',
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30,
            },
        },
    };

    return (
        <View style={styles.container}>
            <View style={styles.swipe}>
                <Swiper
                    ref={swipesRef}
                    backgroundColor={'white'}
                    cardVerticalMargin={20}
                    marginBottom={150}
                    onSwipedLeft={handlePass}
                    onSwipedRight={handleLike}
                    cards={users}
                    cardIndex={index}
                    renderCard={renderCard}
                    onSwipedAll={() => setIndex(0)}
                    stackSize={3}
                    useViewOverflow={Platform.OS === 'ios'}
                    stackSeparation={15}
                    key={users.length}
                    overlayLabels={{ left: leftLabel, right: rightLabel }}
                    infinite={true}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    swipeBackCard
                />
            </View>

            <BottomBar
                handleLikePress={() => swipesRef.current.swipeRight()}
                handlePassPress={() => swipesRef.current.swipeLeft()}
                disabled={!users[index]}
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
        backgroundColor: 'white',
    },
});

import React, { useState, useRef, useEffect } from 'react';
import { Platform, ToastAndroid, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../components/UserCard';
import BottomBar from '../components/BottomBar';
import { matchearUsuario } from '../actions';
import AdvertisingCard from '../components/AdvertisingCard';
import EmptyUserCard from '../components/EmptyUsersCard';

export default function HomeScreen() {
    const cardsBetweenAds = 3;
    const ads = 'ADS';

    const dispatch = useDispatch();
    const swipesRef = useRef(null);

    const [i, setI] = useState(0);
    const [index, setIndex] = useState(0);

    const getIndexPublicidad = () => {
        return cardsBetweenAds - (i % cardsBetweenAds) - 1;
    };

    const users = useSelector(
        (state) => {
            const usersToShow = state.general.usuariosTotales.filter((u) => !u.leDiLike);

            // agrego un elemento null al final para poder
            // detectar que se terminaron los usuarios y
            // mostrar el card de fin de usuarios

            let aux = [...usersToShow, null, null];

            const indexPublicidad = getIndexPublicidad();

            aux.splice(indexPublicidad, 0, ads);

            console.log(aux.map((u) => (u === ads ? u : u?.nombre ?? 'null')));

            return aux;
        },
        (a, b) => a.length === b.length
    );

    const showToastWithGravityAndOffset = () => {
        if (Platform.OS === 'ios') {
            Alert.alert(
                'Has hecho match!',
                'Ve a la pantalla de mensajes para entablar una conversación!'
            );
        } else {
            ToastAndroid.showWithGravityAndOffset(
                'Has hecho match!',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                25,
                50
            );
        }
    };

    const renderCard = (user) => {
        if (user === ads) {
            return (
                <RectButton style={styles.container}>
                    <AdvertisingCard />
                </RectButton>
            );
        }

        return (
            <RectButton style={styles.container}>
                {user ? <UserCard user={user} color={user.colorCard} /> : <EmptyUserCard />}
            </RectButton>
        );
    };

    const handlePass = (index, user) => {
        setI(i + 1);
        if (!user || user == ads) return;
        setIndex(index + 1);
    };

    const handleLike = (index, user) => {
        if (user == ads) {
            return handlePass(index, user);
        }

        setI(i + 1);
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
                    infinite={true}
                    overlayLabels={{ left: leftLabel, right: rightLabel }}
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

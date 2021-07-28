import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../components/UserCard';
import BottomBar from '../components/BottomBar';
import { matchearUsuario } from '../actions';
import EmptyUserCard from '../components/EmptyUsersCard';

export default function HomeScreen() {
    const users = useSelector((state) => {
        const aux = state.general.usuariosTotales.filter((u) => !u.leDiLike);
        return aux;
    });

    const dispatch = useDispatch();
    const swipesRef = useRef(null);
    const [index, setIndex] = useState(0);

    const renderCard = (user, index) => {
        if (!user) {
            return (
                <RectButton style={styles.container}>
                    <EmptyUserCard />
                </RectButton>
            );
        }

        return (
            <RectButton style={styles.container}>
                <UserCard user={user} color={user.colorCard} />
            </RectButton>
        );
    };

    const handlePass = (_, user) => {
        setIndex(index + 1);
    };

    const handleLike = (_, user) => {
        if (!user) return;
        dispatch(matchearUsuario(user));
    };

    return (
        <View style={styles.container}>
            <View style={styles.swipe}>
                <Swiper
                    ref={swipesRef}
                    backgroundColor={'white'}
                    cardVerticalMargin={20}
                    marginBottom={150}
                    //onSwiped={() => this.onSwiped('general')}
                    onSwipedLeft={handlePass}
                    onSwipedRight={handleLike}
                    //onSwipedTop={() => this.onSwiped('top')}
                    //onSwipedBottom={() => this.onSwiped('bottom')}
                    //onTapCard={this.swipeLeft}
                    cards={users}
                    cardIndex={index}
                    renderCard={renderCard}
                    onSwipedAll={() => setIndex(0)}
                    stackSize={3}
                    useViewOverflow={Platform.OS === 'ios'}
                    stackSeparation={15}
                    key={users.length}
                    overlayLabels={{
                        left: {
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
                        },
                        right: {
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
                        },
                    }}
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

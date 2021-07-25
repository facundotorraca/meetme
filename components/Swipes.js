import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import UserCard from './UserCard';
import { Swipeable } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import EmptyUserCard from './EmptyUsersCard';

function Swipes({ users, currentIndex, handleLike, handlePass, swipesRef }) {
    const [willLike, setWillLike] = useState(false);
    const [willPass, setWillPass] = useState(false);

    const renderLeftActions = () => {
        if (users.length == 1) {
            return (
                <RectButton style={styles.container}>
                    <EmptyUserCard />
                </RectButton>
            );
        }

        return (
            <RectButton style={styles.container}>
                <UserCard user={users[currentIndex + 1]} />
            </RectButton>
        );
    };

    const renderRightActions = () => {
        if (users.length == 1) {
            return (
                <RectButton style={styles.container}>
                    <EmptyUserCard />
                </RectButton>
            );
        }

        return (
            <RectButton style={styles.container}>
                <UserCard user={users[currentIndex + 1]} />
            </RectButton>
        );
    };

    return (
        <Swipeable
            ref={swipesRef}
            friction={3}
            leftThreshold={10}
            rightThreshold={10}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
            onSwipeableLeftOpen={() => {
                setWillLike(false);
                handleLike();
            }}
            onSwipeableRightOpen={() => {
                setWillPass(false);
                handlePass();
            }}
            onSwipeableLeftWillOpen={() => setWillLike(true)}
            onSwipeableRightWillOpen={() => setWillPass(true)}
        >
            <UserCard user={users[currentIndex]} willLike={willLike} willPass={willPass} />
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// para obtener acceso al ref
export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}></Swipes>);

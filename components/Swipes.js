import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import UserCard from './UserCard';
import { Swipeable } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import EmptyUserCard from './EmptyUsersCard';

function Swipes({ user, nextUser, handleLike, handlePass, swipesRef }) {
    const [willLike, setWillLike] = useState(false);
    const [willPass, setWillPass] = useState(false);

    const renderNextUser = () => {
        if (!nextUser) {
            return (
                <RectButton style={styles.container}>
                    <EmptyUserCard />
                </RectButton>
            );
        }

        return (
            <RectButton style={styles.container}>
                <UserCard user={nextUser} />
            </RectButton>
        );
    };

    return (
        <Swipeable
            ref={swipesRef}
            friction={3}
            leftThreshold={10}
            rightThreshold={10}
            renderLeftActions={user && renderNextUser}
            renderRightActions={user && renderNextUser}
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
            {user ? (
                <UserCard user={user} willLike={willLike} willPass={willPass} />
            ) : (
                <EmptyUserCard />
            )}
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

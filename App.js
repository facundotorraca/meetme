import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Constants from 'expo-constants';
import Swipes from './components/Swipes';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { Alert, StyleSheet, View } from 'react-native';


export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipesRef = useRef(null);

  const USERS_DATA_URL = 'https://randomuser.me/api/?gender=female&results=10';

  async function fetchUsers() {
    // for now, is fetching from an API
    // but we can add a vector if we dont 
    // want to use this users
    try {
      const { data } = await axios.get(USERS_DATA_URL);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Error al cargar usuarios', 
        '', 
        [{text: 'Reintentar', onPress: () => fetchUsers()}]
      );
    }
  }

  function handleLike() {
    nextUser();
  }

  function handlePass() {
    nextUser();
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex 
      ? 0 
      : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handlePassPress() {
	swipesRef.current.openRight();
  }

  function handleLikePress() {
	swipesRef.current.openLeft();
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.swipe}>
        {users.length > 1 && 
         users.map(
			(u, i) => currentIndex === i && (
				<Swipes 
					key={i} 
					ref={swipesRef}
					users={users} 
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
    marginTop: Constants.statusBarHeight
  },

  swipe: {
    flex: 1,
    padding: 10, 
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});


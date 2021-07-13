import React, { useState, useRef, useEffect } from 'react';
import TopBar from "../components/TopBar";
import { View, StyleSheet } from 'react-native';
import { menus } from '../config';
import BottomBar from '../components/BottomBar';
import Swipes from '../components/Swipes';
import axios from 'axios';


const Users = [
  {
    id: '1',
    userName: 'Juan Martinez',
    descripcion: 'No soy un chico normal. Tengo mis',
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Matias Perez',
    descripcion: 'No soy un chico normal. Tengo mis',
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Tomas Paredes',
    descripcion: 'No soy un chico normal. Tengo mis',
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Lionel Burgos',
    descripcion: 'No soy un chico normal. Tengo mis',
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Francisco Gonzalez',
    descripcion: 'No soy un chico normal. Tengo mis',
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Emanuel ',
    descripcion: 'No soy un chico normal. Tengo mis',
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
]

export default function HomeScreen({ navigation }) {
  const swipesRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          Alert.alert('Error al cargar usuarios', '', [
              { text: 'Reintentar', onPress: () => fetchUsers() },
          ]);
      }
  }

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

  useEffect(() => {
      fetchUsers();
  }, []);

  return (
      <View style={styles.container}>
          <TopBar navigation={navigation} menu={menus.MEETME} />

          <View style={styles.swipe}>
              {users.length > 1 &&
                  users.map(
                      (u, i) =>
                          currentIndex === i && (
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
      height: '100%'                    
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

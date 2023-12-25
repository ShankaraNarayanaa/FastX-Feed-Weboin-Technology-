import { StyleSheet, Text, View ,TouchableOpacity ,FlatList, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { getAllPost } from '../firebase/operation';

const Home = ({navigation}) => {
  const [Posts, setPosts] = useState();
  useEffect(() => {
      async function fetchData() {
        const data = await getAllPost();
        setPosts(data);
      }
      fetchData();
  }, []);

  console.log(Posts);
  return (
      <ScrollView>
        {Posts && 
          Posts.map((item, index) => <Cards post={item} key={index}/>)}
      </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({})
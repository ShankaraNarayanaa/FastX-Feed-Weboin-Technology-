import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Cards from '../components/Cards';
import { getAllPost } from '../firebase/operation';

const Home = ({ navigation }) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPost();
      const data1 = data.filter((post) => post.options === 'Post');
      setPosts(data1);
    }
    fetchData();
  }, []);

  const renderPost = ({ item }) => (
    <Cards post={item} />
  );

  return (
    <FlatList
      data={Posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPost}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import ReelsCards from '../components/ReelsCards';
import { getAllPost } from '../firebase/operation';

const Reels = ({ navigation }) => {
  const [ReelsPosts, setReelsPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPost();
      // Filter posts to include only Reels
      const reelsPosts = data.filter((post) => post.options === 'Reels');
      setReelsPosts(reelsPosts);
    }
    fetchData();
  }, []);

  const renderPost = ({ item }) => <ReelsCards post={item} />;

  return (
    <FlatList
      data={ReelsPosts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPost}
    />
  );
};

export default Reels;

const styles = StyleSheet.create({});

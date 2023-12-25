import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Box , Button, Input, Text} from 'native-base';
import { addPost } from '../firebase/operation';


const Posts = ({navigation}) => {
  const [Username,setUsername] = useState("");
  const [Userlocation,setLocation] = useState("");
  const [UserURL,setURL] = useState("");


  const handleSubmit = () => {
    const data = {
      username:Username,
      location: Userlocation,
      url: UserURL,
    };
  
  const response = addPost(data);

    if(response != ""){
      setUsername("");
      setLocation("");
      setURL("");
      navigation.navigate("Home")
    };
  };

  
  return (
   <Box p={5} justifyContent="center" flex={1}>
      <Input 
          placeholder='UserName'
          value={Username}
          onChangeText={setUsername}
          placeholderTextColor="#00ffcc"
          borderRadius={5}
          borderColor="#0066cc"
          borderWidth={2}
          p={3}
          mb={8}
          height={50}
          backgroundColor="#fff"
      />  
      <Input 
          placeholder='Location'
          value={Userlocation}
          onChangeText={setLocation}
          placeholderTextColor="#00ffcc"
          borderRadius={5}
          borderColor="#0066cc"
          borderWidth={2}
          p={3}
          mb={8}
          height={50}
          backgroundColor="#fff"
      />  
      <Input 
          placeholder='Image URL'
          value={UserURL}
          onChangeText={setURL}
          placeholderTextColor="#00ffcc"
          borderRadius={5}
          borderColor="#0066cc"
          borderWidth={2}
          p={3}
          mb={8}
          height={50}
          backgroundColor="#fff"
      />  

    <Button bg="blue.300" borderRadius={5} height={50} onPress={handleSubmit}>
        <Text color="#fff" fontWeight="bold">POST</Text>
    </Button>     
   </Box>
  );
}

export default Posts;

const styles = StyleSheet.create({})
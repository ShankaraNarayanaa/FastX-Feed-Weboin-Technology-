import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Box , Button, Input, Text, Select} from 'native-base';
import { addPost } from '../firebase/operation';


const Posts = ({navigation}) => {
  const [Username,setUsername] = useState("");
  const [Userlocation,setLocation] = useState("");
  const [UserURL,setURL] = useState("");
  const [UserSelection, setSelection] = useState("");


  const handleSubmit = () => {
    const data = {
      username:Username,
      location: Userlocation,
      url: UserURL,
      options: UserSelection,
    };
  
  const response = addPost(data);
    if(response != "")
    {
      setUsername("");
      setLocation("");
      setURL("");
      setSelection("");

      if (UserSelection === 'Reels') 
      {
        navigation.navigate('Reels');
      } 
      else 
      {
        navigation.navigate('Home');
      }
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

      <Select
        placeholder="Options"
        selectedValue={UserSelection}
        onValueChange={(itemValue) => setSelection (itemValue)}
        borderRadius={5}
        borderColor="#0066cc"
        borderWidth={2}
        p={3}
        mb={8}
        height={50}
        backgroundColor="#fff"
      >
        <Select.Item label="Post" value="Post" />
        <Select.Item label="Story" value="Story" />
        <Select.Item label="Reels" value="Reels" />
      </Select>

    <Button bg="blue.300" borderRadius={5} height={50} onPress={handleSubmit}>
        <Text color="#fff" fontWeight="bold">POST</Text>
    </Button>     
   </Box>
  );
}

export default Posts;

const styles = StyleSheet.create({})
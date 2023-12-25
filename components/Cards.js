import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Box, HStack, VStack, Text} from 'native-base';
import { faHeart, faShare, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Cards = ({ post }) => {
  return (
    <Box 
        height={460} 
        width="95%" 
        background="white" 
        margin={2}
        shadow="2"
        borderRadius="md"
    >
    <VStack height="100%" width="100%">
        <HStack height="10%" space={2} padding={2}>
            <Box
            height={10}
            width={10}
            backgroundColor="gray.100"
            borderRadius="full"
            borderWidth={2}
            borderColor="#660099"
            >
            <Text margin="auto" fontWeight="bold">{post.username[0]}</Text>
            </Box>
            <VStack>
                <Text fontWeight="bold">{post.username}</Text>
                <Text fontWeight="light" fontSize="xs">{post.location}</Text>
            </VStack>
        </HStack>
        <Box height="80%" pt={3}>
            <Image source={{uri:post.url,
            }}
            style={{height:"100%",width:"100%"}}
            resizeMode="cover"
        />
        </Box>
        <HStack height="10%" alignItems="center" justifyContent="space-between">
            <HStack space={6} pl={4}>
                <FontAwesomeIcon icon={faHeart} size={24} color="#ff3333"/>
                <FontAwesomeIcon icon={faShare} size={24} color="#9999ff"/>
                <FontAwesomeIcon icon={faComment} size={24} color="#cccc00"/>
            </HStack>
            <Box pr={4}>
                <FontAwesomeIcon icon={faBookmark} size={24} color="#00cccc"/>
            </Box>
        </HStack>
    </VStack>
    </Box>
  );
};

export default Cards

const styles = StyleSheet.create({})
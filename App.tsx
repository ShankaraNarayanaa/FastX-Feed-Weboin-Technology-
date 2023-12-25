import { AppRegistry } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faClipboard, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NativeBaseProvider} from "native-base";

// Import your screen components (replace these with the actual paths)
import Home from './screens/Home';
import Search from './screens/Search';
import Posts from './screens/Post';
import Reels from './screens/Reels';
import Profile from './screens/Profile';
import { Image, Text, Dimensions, StyleSheet } from 'react-native';

library.add(faHome, faSearch, faClipboard, faUser, faVideo);

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
            return <FontAwesomeIcon icon="home" size={24} color="skyblue" />;
            },

            headerTitle: () => (<Image source={require("./assets/FastX.png")}
            style={{width:340, height: 50}}
            resizeMode='contain'
            />  
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon="search" size={24} color="skyblue" />,

            headerTitle: () => (<Image source={require("./assets/FastX.png")}
            style={{width:340, height: 50}}
            resizeMode='contain'
            />  
            ),
          }}
        />
        <Tab.Screen
          name="Reels"
          component={Reels}
          options={{
            tabBarIcon: () =>  <FontAwesomeIcon icon="video" size={24} color= "skyblue" />,
            headerTitle: () => (<Image source={require("./assets/FastX.png")}
            style={{width:340, height: 50}}
            resizeMode='contain'
            />     
            ),
          }}
        />
        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon="clipboard" size={24} color="skyblue" />,
            headerTitle: () => (<Image source={require("./assets/FastX.png")}
            style={{width:340, height: 50}}
            resizeMode='contain'
            />  
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon="user" size={24} color="skyblue" />,
            headerTitle: () => (<Image source={require("./assets/FastX.png")}
            style={{width:340, height: 50}}
            resizeMode='contain'
            />  
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

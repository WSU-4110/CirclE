
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import algoliasearch from 'algoliasearch/lite';
import {Configure, InstantSearch } from 'react-instantsearch-core';
//import { Highlight } from './Highlight';

import Welcome from './Screens/Welcome';
import CreateAccount from './Screens/CreateAccount';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import Category1 from './Screens/Category1'; 
import Category2 from './Screens/Category2';
import Category3 from './Screens/Category3'; 
import Category4 from './Screens/Category4';
import Category5 from './Screens/Category5';
import LoadingScreen from './Screens/LoadingScreen';
import ProfilePage from './Screens/ProfilePage';

import DiyProjects from './Screens/DiyProjects';
import Settings from './Screens/Settings';


import Ratings from './Screens/Ratings';

import OrganizationHome from './Screens/OrganizationHome';  // new import
import userdefineditems from './Screens/userdefineditems';  // new import
import SavedItems from './Screens/SavedItems';  // new import
import Newsletter from './Screens/Newsletter';
import Chatroom from './Screens/chatroom';
import Location from './Screens/Location';
import orgPage from './Screens/orgPage';
import SimpleChat from './Screens/simplechat';
import FurnitureCat from './Screens/FurnitureCat';
import CosmatCat from './Screens/CosmatCat';



import firebase from 'firebase/compat/app'
import 'firebase/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/database';
import Orgevents from './Screens/orgevents';
import OrgNew from './Screens/orgNew';

//const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c');

// Initializing Firebase///////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyA-1_M8ZRIe6N-AgWKZwWsgtLOmVnLApjQ",
  authDomain: "circlee-a4b5d.firebaseapp.com",
  databaseURL: "https://circlee-a4b5d-default-rtdb.firebaseio.com/",
  projectId: "circlee-a4b5d",
  storageBucket: "circlee-a4b5d.appspot.com",
  messagingSenderId: "361381373341",
  appId: "1:361381373341:web:0838b1f671b92f56d2bb74",
  measurementId: "G-NGWS4NW9QB"
  
};

export const d = firebase.initializeApp(firebaseConfig);



//const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c');

// Initialize Firebase
// Make sure to replace the configuration with your Firebase project's details


//const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c');

// Initialize Firebase
// Make sure to replace the configuration with your Firebase project's details


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Location') {
          iconName = focused ? 'location' : 'location-sharp';
        } else if (route.name === 'Chatroom') {
          iconName = focused ? 'chatbox' : 'chatbox-sharp';
        }

        else if (route.name === 'orgPage') {
          iconName = focused ? 'chatbox' : 'chatbox-sharp';
        }
        else if (route.name === 'OrgPage') {
          iconName = focused ? 'chatbox' : 'chatbox-sharp';
        }

        else if (route.name === 'DiyProjects') {
          iconName = focused ? 'apps-outline' : 'apps-outline';
        }
        else if (route.name === 'Newsletter') {
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        }
        else if (route.name === 'Add Item') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';

        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",  // Moved this from tabBarOptions
      tabBarInactiveTintColor: "gray",  // Moved this from tabBarOptions
      tabBarStyle: [  // Moved this from tabBarOptions
        {
          display: "flex"
        },
        null
      ]
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen name="Location" component={Location} />
    <Tab.Screen name="Chatroom" component={Chatroom} />
    <Tab.Screen name="Newsletter" component={Newsletter} />
    <Tab.Screen name="Add Item" component={userdefineditems} />
    <Tab.Screen name="orgPage" component={orgPage} />
    <Tab.Screen name="DiyProjects" component={DiyProjects} />

  </Tab.Navigator>
);

export default function App() {
  return (
    

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile' }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ title: 'Loading' }} />
        <Stack.Screen options={{headerShown: false}}  name="HomeScreen" component={BottomTabNavigator} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Welcome' }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Create Account' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OrganizationHome" component={OrganizationHome} options={{ title: 'Organization Home' }} />
        <Stack.Screen name="Category1" component={Category1} options={{ title: 'Category 1' }} />
        <Stack.Screen name="Category2" component={Category2} options={{ title: 'Category 2' }} />
        <Stack.Screen name="Category3" component={Category3} options={{ title: 'Category 3' }} />
        <Stack.Screen name="DiyProjects" component={DiyProjects} options={{ title: 'DiyProjects' }} />
        <Stack.Screen name="Category4" component={Category4} options={{ title: 'Category 4' }} />
        <Stack.Screen name="orgevents" component={Orgevents} options={{ title: 'Organization Events' }} />
        <Stack.Screen name="orgNew" component={OrgNew} options={{ title: 'Organization News' }} />
        <Stack.Screen name="userdefineditems" component={userdefineditems} options={{ title: 'user defined items' }} />
        <Stack.Screen name="SavedItems" component={SavedItems} options={{ title: 'Saved Items' }} />
        <Stack.Screen name="Ratings" component={Ratings} options={{ title: 'Ratings' }} />
        <Stack.Screen name="Newsletter" component={Newsletter} options={{ title: 'Newsletter' }} />
        <Stack.Screen name="Chatroom" component={Chatroom} options={{ title: 'Chatroom' }} />
        <Stack.Screen name="SimpleChat" component={SimpleChat} options={{ title: 'SimpleChat' }} />
        <Stack.Screen name="Location" component={Location} options={{ title: 'Location' }} />
        <Stack.Screen name="orgPage" component={orgPage} options={{ title: 'orgPage' }} />
        <Stack.Screen name="FurnitureCat" component={FurnitureCat} options={{ title: 'FurnitureCat' }} />
        <Stack.Screen name="CosmatCat" component={CosmatCat} options={{ title: 'CosmatCat' }} />

        {/* Add more category screens here */}
      </Stack.Navigator>
    </NavigationContainer>

  
  );
}




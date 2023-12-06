
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
import LoadingScreen from './Screens/LoadingScreen';
import ProfilePage from './Screens/ProfilePage';
import NewCategory from './Screens/NewCategory';

import OrganizationHome from './Screens/OrganizationHome';  // new import
import userdefineditems from './Screens/userdefineditems';  // new import
import SavedItems from './Screens/SavedItems';  // new import


import Settings from './Screens/Settings';

import chatroom from './Screens/chatroom';
import Location from './Screens/Location';
import orgPage from './Screens/orgPage';



import firebase from 'firebase/compat/app'
import 'firebase/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/database';

//const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c');

// Initialize Firebase
// Make sure to replace the configuration with your Firebase project's details

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        else if (route.name === 'orgPage') {
          iconName = focused ? 'chatbox' : 'chatbox-sharp';
        }
        else if (route.name === 'NewCategory') {
          iconName = focused ? 'NewCategory' : 'NewCategory-sharp';
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
    <Tab.Screen name="chatroom" component={chatroom} />
    <Tab.Screen name="User Items" component={userdefineditems} />
    <Tab.Screen name="orgPage" component={orgPage} />
    <Tab.Screen name="NewCategory" component={NewCategory} />

  </Tab.Navigator>
);

export default function App() {
  return (
    

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile' }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ title: 'Loading' }} />
        <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Welcome' }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Create Account' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OrganizationHome" component={OrganizationHome} options={{ title: 'Organization Home' }} />
        <Stack.Screen name="Category1" component={Category1} options={{ title: 'Category 1' }} />
        <Stack.Screen name="Category2" component={Category2} options={{ title: 'Category 2' }} />
        <Stack.Screen name="Category3" component={Category3} options={{ title: 'Category 3' }} />
        <Stack.Screen name="NewCategory" component={NewCategory} options={{ title: 'NewCategory' }} />
        <Stack.Screen name="userdefineditems" component={userdefineditems} options={{ title: 'user defined items' }} />
        <Stack.Screen name="SavedItems" component={SavedItems} options={{ title: 'Saved Items' }} />

        {/* Add more category screens here */}
      </Stack.Navigator>
    </NavigationContainer>

  
  );
}




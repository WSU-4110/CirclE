// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import Category1 from './Screens/Category1'; // Import the Category1 component
import Category2 from './Screens/Category2'; // Import the Category2 component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Category1" component={Category1} options={{ title: 'Category 1' }} />
        <Stack.Screen name="Category2" component={Category2} options={{ title: 'Category 2' }} />
        {/* Add more category screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screens/Welcome';
import CreateAccount from './Screens/CreateAccount';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import Category1 from './Screens/Category1'; 
import Category2 from './Screens/Category2'; 
import LoadingScreen from './Screens/LoadingScreen';
import ProfilePage from './Screens/ProfilePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile' }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ title: 'Loading' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Welcome' }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Create Account' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Category1" component={Category1} options={{ title: 'Category 1' }} />
        <Stack.Screen name="Category2" component={Category2} options={{ title: 'Category 2' }} />
        <Stack.Screen name="Category3" component={Category3} options={{ title: 'Category 3' }} />
        <Stack.Screen name="Category4" component={Category4} options={{ title: 'Category 4' }} />
        <Stack.Screen name="reduce1" component={reduce1} options={{ title: 'new in reducing' }} />
        <Stack.Screen name="Recycle1" component={Recycle1} options={{ title: 'new in recycle' }} />
        <Stack.Screen name="reuse1" component={reuse1} options={{ title: 'new in resue' }} />
        <Stack.Screen name="Orgevents1" component={Orgevents1} options={{ title: 'new in orgs' }} />
        {/* Add more category screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

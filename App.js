import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Initialize a Stack Navigator
const Stack = createStackNavigator();

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Title for the Home Screen */}
      <Text style={styles.title}>Welcome to the Homepage!</Text>
      
      {/* Search Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
      />

      {/* Categories Buttons */}
      <View style={styles.categories}>
        {/* Button to navigate to Electronics Screen */}
        <Button
          title="Electronics"
          onPress={() => navigation.navigate('Electronics')}
        />
        {/* Button to navigate to Sports and Recreational Screen */}
        <Button
          title="Sports and Recreational"
          onPress={() => navigation.navigate('SportsAndRecreational')}
        />
        {/* Button to navigate to Travel and Luggage Screen */}
        <Button
          title="Travel and Luggage"
          onPress={() => navigation.navigate('TravelAndLuggage')}
        />
      </View>

      {/* Newsletter Section */}
      <View style={styles.newsletter}>
        {/* Title for the Newsletter Section */}
        <Text style={styles.newsletterTitle}>Subscribe to our newsletter:</Text>
        
        {/* Input field for email */}
        <TextInput
          style={styles.input}
          placeholder="Your email..."
        />
        
        {/* Button to subscribe */}
        <Button title="Subscribe" onPress={() => console.log("Subscribed")} />
      </View>
    </View>
  );
}

// Electronics Screen Component
function ElectronicsScreen() {
  return (
    <View style={styles.container}>
      {/* Add content specific to Electronics page */}
    </View>
  );
}

// Sports and Recreational Screen Component
function SportsAndRecreationalScreen() {
  return (
    <View style={styles.container}>
      {/* Add content specific to Sports and Recreational page */}
    </View>
  );
}

// Travel and Luggage Screen Component
function TravelAndLuggageScreen() {
  return (
    <View style={styles.container}>
      {/* Add content specific to Travel and Luggage page */}
    </View>
  );
}

// Main App Component
export default function App() {
  return (
    // Wrap the entire app with Navigation Container
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define Screens */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Electronics"
          component={ElectronicsScreen}
          options={{ title: 'Electronics' }}
        />
        <Stack.Screen
          name="SportsAndRecreational"
          component={SportsAndRecreationalScreen}
          options={{ title: 'Sports and Recreational' }}
        />
        <Stack.Screen
          name="TravelAndLuggage"
          component={TravelAndLuggageScreen}
          options={{ title: 'Travel and Luggage' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the Components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  categories: {
    width: '100%',
    marginBottom: 20,
  },
  newsletter: {
    width: '100%',
  },
  newsletterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

// Initialize a Stack Navigator
const Stack = createStackNavigator();

// Home Screen Component
function HomeScreen({ navigation }) {
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category.trim() === '') {
      // If the category is empty, fetch all items
      axios.get('http://127.0.0.1:5000/items/Electronics')
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching items:', error);
        });
    } else {
      // Fetch items based on the selected category
      const endpoint = `http://127.0.0.1:5000/items/Electronics`;
      axios.get(endpoint)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching items:', error);
          // Handle errors as needed, e.g., display an error message to the user
        });
    }
  }, [category]);

  return (
    <View style={styles.container}>
      {/* Title for the Home Screen */}
      <Text style={styles.title}>Welcome to the Homepage!</Text>

      {/* Search Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => setCategory(text)}
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

      {/* FlatList to display items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            {/* Display item details here */}
            <Text>{item.name}</Text>
            {/* Add more item details as needed */}
          </View>
        )}
      />
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
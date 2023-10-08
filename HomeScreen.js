// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      {/* Entire screen background color */}
      <View style={styles.background}>
        <Text style={styles.title}>Welcome to the Homepage!</Text>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <Button title="Category 1" onPress={() => navigation.navigate('Category1')} />
        <Button title="Category 2" onPress={() => navigation.navigate('Category2')} />
        {/* Add more categories here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This ensures the outer container takes up the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'lightgreen', // Background color set to light green
    padding: 20,
    borderRadius: 10,
    width: '80%', //  adjust the width 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%', 
    padding: 10,
    margin: 10,
    backgroundColor: '#f1f1f1',
  },
});

export default HomeScreen;


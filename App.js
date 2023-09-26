import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Homepage!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Search..."
      />

      <View style={styles.categories}>
        <Button title="Electronics" onPress={() => console.log("Electronics")} />
        <Button title="Category 2" onPress={() => console.log("Category 2")} />
        <Button title="Category 3" onPress={() => console.log("Category 3")} />
      </View>

      <View style={styles.newsletter}>
        <Text style={styles.newsletterTitle}>Subscribe to our newsletter:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email..."
        />
        <Button title="Subscribe" onPress={() => console.log("Subscribed")} />
      </View>
    </View>
  );
}

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
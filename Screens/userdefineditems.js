import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const UserDefinedItems = () => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  // Reference to your Firebase database
  const itemsRef = firebase.database().ref('userDefinedItems');

  // Function to add item to Firebase
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemRef = itemsRef.push();
      newItemRef.set({
        id: newItemRef.key,
        name: newItem
      });
      setNewItem('');
    }
  };

  // Fetch items from Firebase when the component mounts
  useEffect(() => {
    itemsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const firebaseItems = data ? Object.values(data) : [];
      setItems(firebaseItems);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>User Defined Items</Text>
        <TextInput
          style={styles.input}
          placeholder="Add new item..."
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />
        <Button title="Add Item" onPress={handleAddItem} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388E3C',
  },
  input: {
    height: 40,
    borderColor: '#A5D6A7',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
  },
});

export default UserDefinedItems;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Alert } from 'react-native';  // Add this import at the top
import { TouchableOpacity } from 'react-native';  // Add TouchableOpacity


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

  const handleDeleteItem = (id) => {
    Alert.alert(
      'Warning',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const itemRef = firebase.database().ref(`/userDefinedItems/${id}`);
            itemRef.remove();
            setItems(items.filter(item => item.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
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
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
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
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F1F1F1',
      padding: 15,
      marginVertical: 5,
      borderRadius: 5,
    },
    deleteButton: {
      backgroundColor: '#FF0000',
      padding: 10,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: '#FFFFFF',
    },
  });
  

export default UserDefinedItems;

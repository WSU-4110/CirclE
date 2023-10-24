import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Alert, ScrollView, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const UserDefinedItems = () => {
  const [newItem, setNewItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [items, setItems] = useState([]);
  const itemsRef = firebase.database().ref('userDefinedItems');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemRef = itemsRef.push();
      newItemRef.set({
        id: newItemRef.key,
        name: newItem,
        category: selectedCategory
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['General', 'Electronics', 'Clothing', 'Food'].map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TextInput
          style={styles.input}
          placeholder="Add new item..."
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />

<TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
  <Text style={styles.addButtonText}>Add Item</Text>
</TouchableOpacity>
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
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',  // Dark gray
  },
  deleteButtonOutside: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#F44336',  // Red
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  deleteButtonText: {
    color: '#FFF',  // White
  },
    // Add Item Button
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#2196F3',  
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addButtonText: {
    fontSize: 16,
    color: '#FFF',  // White
  },
    // Delete Button
  deleteButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#F44336',  
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  deleteButtonText: {
    color: '#FFF',  
    },
    // Category Buttons
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',  
    elevation: 3,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },
  selectedCategory: {
    backgroundColor: '#4CAF50',  
  },
  categoryText: {
    fontSize: 16,
    color: '#333', 
  },
  selectedCategoryText: {
    color: '#FFF', 
  },
    });
    

export default UserDefinedItems;

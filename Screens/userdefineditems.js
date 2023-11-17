// UserDefinedItems.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UserDefinedItems = () => {
  const [newItem, setNewItem] = useState('');
  const [recyclingLocation, setRecyclingLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (newItem.trim() !== '' && recyclingLocation.trim() !== '') {
      const newId = new Date().getTime().toString();
      const newItemObj = {
        id: newId,
        name: newItem,
        category: selectedCategory,
        recyclingLocation: recyclingLocation,
      };
      setItems([...items, newItemObj]);
      setNewItem('');
      setRecyclingLocation('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Mock category selection for testing
  const categories = ['General', 'Electronics', 'Clothing', 'Food'];
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new item..."
        value={newItem}
        onChangeText={setNewItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter recycling location..."
        value={recyclingLocation}
        onChangeText={setRecyclingLocation}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>Add Item</Text>
      </TouchableOpacity>

      {/* Category selection for testing */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
            <Text style={selectedCategory === category ? styles.selectedCategoryText : styles.categoryText}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {items.map((item) => (
  <View key={item.id} style={styles.listItem}>
    <Text>{item.name}</Text>
    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item.id)}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  </View>
))}
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
  recyclingText: {
    fontSize: 14,
    color: '#666', // Light gray
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

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  categoryText: {
    // Styles for category buttons
  },
  selectedCategoryText: {
    // Styles for selected category
  },
  // ... rest of your styles
});

    

export default UserDefinedItems;

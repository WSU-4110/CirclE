// UserDefinedItems.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UserDefinedItems = () => {
  const [newItem, setNewItem] = useState('');
  const [recyclingLocation, setRecyclingLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

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

  const resetCategories = () => {
    setSelectedCategory('General');
  };

  const incrementItemCount = () => {
    setItemCount(itemCount + 1);
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
  
      {/* Category selection */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity 
            key={category} 
            onPress={() => setSelectedCategory(category)}
            style={selectedCategory === category ? styles.selectedCategory : styles.categoryButton}
          >
            <Text style={selectedCategory === category ? styles.selectedCategoryText : styles.categoryText}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
  
      {/* Items list */}
      {items.map((item) => (
        <View key={item.id} style={styles.listItem}>
          <Text>{item.name}</Text>
          <TouchableOpacity 
            style={styles.deleteButton} 
            onPress={() => handleDeleteItem(item.id)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
  
      {/* New buttons for resetCategories and incrementItemCount */}
      <TouchableOpacity onPress={resetCategories} style={styles.button}>
        <Text>Reset Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementItemCount} style={styles.button}>
        <Text>Increment Item Count</Text>
      </TouchableOpacity>
  
      {/* Displaying the item count */}
      <Text>Item Count: {itemCount}</Text>
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
    color: '#333', // Dark gray
  },
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
    color: '#FFF', // White
  },
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
    color: '#FFF', // White
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
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
  button: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

    

export default UserDefinedItems;

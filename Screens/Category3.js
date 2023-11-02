import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar } from 'react-native';

import ImagePicker from 'react-native-image-picker';
import algoliasearch from 'algoliasearch';


const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c')

const algoliaIndex = searchClient.initIndex('Sell_items');

const Category3 = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  const submitItem = () => {
    const itemData = {
      name,
      description,
      category,
      image,
    };

    // Save the item data to Firestore


    // Save the item data to Algolia
    saveItemToAlgolia(itemData);
  };

 

  const saveItemToAlgolia = (itemData) => {
    // Add the item data to Algolia
    algoliaIndex.addObject(itemData, (err, content) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Item added to Algolia:', content);
        // Reset the form fields
        setName('');
        setDescription('');
        setCategory('');
        setImage(null);
      }
    });
  };

  return (
    <View>
      <Text>Item Name:</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter item name"
      />

      <Text>Item Description:</Text>
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter item description"
      />

      <Text>Item Category:</Text>
      <TextInput
        value={category}
        onChangeText={(text) => setCategory(text)}
        placeholder="Enter item category"
      />

      <Button title="Submit Item" onPress={submitItem} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#E8F5E9',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2a7f62',
  },
  tinyLogo: {
    width: 280,
    height: 130,
    borderRadius: 8,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    backgroundColor: '#FFF9C4',
    height: 200,
    justifyContent: 'center',
    marginVertical: 12,
    marginHorizontal: 16,
    padding: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: '#2a7f62',
  },
  listContent: {
    paddingBottom: 60,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  pageButton: {
    padding: 10,
    backgroundColor: '#FFF9C4',
    borderRadius: 8,
    elevation: 4,
  },
  pageButtonText: {
    fontSize: 18,
    color: '#2a7f62',
  },
});


export default Category3;

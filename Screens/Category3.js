import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import algoliasearch from 'algoliasearch/reactnative';


const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c')

const algoliaIndex = algoliaClient.initIndex('Sell_items');

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

export default Category3;

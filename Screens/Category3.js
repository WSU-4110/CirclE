import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch('ZGVYKOZVLW', 'c766c1f14843c6346b506053b96c6c56');
const algoliaIndex = searchClient.initIndex('Sell_items');

const Category3  = () => {
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

    // Save the item data to Algolia with auto-generating objectID
    saveItemToAlgolia(itemData);
  };

  const saveItemToAlgolia = (itemData) => {
    algoliaIndex.saveObject(itemData, { autoGenerateObjectIDIfNotExist: true }, (err, content) => {
      if (err) {
        console.error(err);
        Alert.alert('Error', 'Failed to save item to Algolia.');
      } else {
        console.log('Item added to Algolia:', content);
        Alert.alert('Success', 'Item added to Algolia.');
        // Reset the form fields
        setName('');
        setDescription('');
        setCategory('');
        setImage(pickImage);
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

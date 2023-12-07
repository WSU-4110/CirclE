import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch('ZGVYKOZVLW', 'c766c1f14843c6346b506053b96c6c56');
const algoliaIndex = searchClient.initIndex('Circle_events');

const orgevents = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Camera and Camera Roll permission is required');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const submitItem = async () => {
    try {
      // Save the item data to Algolia with auto-generating objectID
      const itemData = {
        name,
        description,
        category,
      };
  
      console.log('Item Data:', itemData); // Log item data for debugging
  
      await saveItemToAlgolia(itemData);
      Alert.alert('Success', 'Item added to Algolia.');
  
      // Reset the form fields
      setName('');
      setDescription('');
      setCategory('');
      setImage(null);
    } catch (error) {
      console.error('Error submitting item:', error);
      Alert.alert('Error', 'Failed to submit item.');
    }
  };
  

  const saveItemToAlgolia = (itemData) => {
    algoliaIndex.saveObject(itemData, { autoGenerateObjectIDIfNotExist: true }, (err, content) => {
      if (err) {
        console.error(err);
        Alert.alert('Error', 'Failed to save item to Algolia.');
      } else {
        console.log('Item added to Algolia:', content);
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

      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Open Camera" onPress={takePicture} />

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <Button title="Submit Item" onPress={submitItem} />
    </View>
  );
};

export default orgevents;

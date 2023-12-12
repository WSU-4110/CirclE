import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const OrgSellItems = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [enteredItems, setEnteredItems] = useState([]);

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
      // Save the item data to Firebase Realtime Database
      const userId = firebase.auth().currentUser.uid;
      const itemsRef = firebase.database().ref(`users/${userId}/Sell`); // Use the same path for consistency
      const newItemRef = itemsRef.push();
  
      // Check if image is defined before setting it
      const itemData = {
        name,
        description,
        category,
        ...(image && { image }), // Include image only if it is defined
      };
  
      newItemRef.set(itemData);
  
      Alert.alert('Success', 'Item added to Firebase Realtime Database.');
  
      // Reset the form fields
      setName('');
      setDescription('');
      setCategory('');
      setImage(null);
  
      // Fetch and set the entered items to update the second section
      fetchEnteredItems();
    } catch (error) {
      console.error('Error submitting item:', error);
      Alert.alert('Error', 'Failed to submit item.');
    }
  };
  
  const fetchEnteredItems = async () => {
    try {
      const userId = firebase.auth().currentUser.uid;
      const itemsRef = firebase.database().ref(`users/${userId}/Sell`); // Use the same path for consistency
  
      itemsRef.on('value', (snapshot) => {
        const itemsData = snapshot.val();
        if (itemsData) {
          const itemsArray = Object.keys(itemsData).map(itemId => ({
            id: itemId,
            ...itemsData[itemId],
          }));
          setEnteredItems(itemsArray);
        } else {
          setEnteredItems([]);
        }
      });
    } catch (error) {
      console.error('Error fetching entered items:', error);
    }
  };
  

  return (
    <View>
      {/* First Section: Entering Values */}
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

      <View>
        <Text>Entered Items:</Text>
        <FlatList
          data={enteredItems}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'lightgreen', padding: 10, marginBottom: 10, borderRadius: 5 }}>
              <Text>Name: {item.name}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Category: {item.category}</Text>
              {/* Add logic to display image if available */}
             
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default OrgSellItems;

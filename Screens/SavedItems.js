import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const SavedItems = ({ route }) => {
  const { items } = route.params;

  // Reference to your Firebase database
  const itemsRef = firebase.database().ref('homeScreenItems');

  // Function to save items to Firebase
  const handleSaveItems = () => {
    itemsRef.set(items);
  };

  return (
    <View style={styles.container}>
      <Button title="Save Items to Database" onPress={handleSaveItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedItems;

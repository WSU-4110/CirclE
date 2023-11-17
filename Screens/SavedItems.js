// SavedItems.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';

const SavedItems = () => {
  const [likedItems, setLikedItems] = useState([]);
  
  // Reference to the user's likes in Firebase
  const userId = firebase.auth().currentUser.uid;
  const userLikesRef = firebase.database().ref(`users/${userId}/Likes`);

  useEffect(() => {
    // Fetch the list of liked items from Firebase
    userLikesRef.on('value', snapshot => {
      const likesData = snapshot.val();
      if (likesData) {
        const itemsArray = Object.keys(likesData).map(itemId => {
          return {
            id: itemId,
            liked: likesData[itemId].liked, // Ensure this matches the structure of your data
          };
        });
        setLikedItems(itemsArray.filter(item => item.liked));
      } else {
        setLikedItems([]);
      }
    });

    // Cleanup listener
    return () => userLikesRef.off();
  }, [userId, userLikesRef]);

  const handleLikeToggle = (itemId) => {
    // Toggle the liked status of the item
    const itemRef = firebase.database().ref(`users/${userId}/likes/${itemId}`);
    itemRef.once('value', snapshot => {
      if (snapshot.exists()) {
        itemRef.set(!snapshot.val().liked); // Ensure correct property is toggled
      } else {
        itemRef.set({ liked: true }); // Adjust based on your data structure
      }
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Item ID: {item.id}</Text>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => handleLikeToggle(item.id)}
      >
        <Text style={styles.likeButtonText}>{item.liked ? 'Unlike' : 'Like'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liked Items</Text>
      {likedItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemText}>Item ID: {item.id}</Text>
          {/* Optionally render Like/Unlike button here, if needed */}
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
  },
  likeButton: {
    padding: 5,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  likeButtonText: {
    color: 'white',
  },
});

export default SavedItems;

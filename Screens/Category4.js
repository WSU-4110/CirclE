import React, { useState, useEffect } from 'react';
import app from './firebaseConfig'; // Import the initialized Firebase app
import { collection, getDocs } from 'firebase/firestore';
import { View, StatusBar, Text, Button, StyleSheet, FlatList, Pressable } from 'react-native';
import { getFirestore, onSnapshot } from 'firebase/firestore';

const Category4 = () => {
  const [documentData, setDocumentData] = useState([]);
  const collectionPath = 'Kitchen'; // Replace with your collection name

  useEffect(() => {
    const db = getFirestore(app);
    const categoryCollection = collection(db, collectionPath);

    // Listen for changes in the collection
    const unsubscribe = onSnapshot(categoryCollection, (querySnapshot) => {
      const documentData = [];
      querySnapshot.forEach((doc) => {
        const { name, text } = doc.data();
        documentData.push({
          id: doc.id,
          name,
          
        });
      });
      setDocumentData(documentData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <Text>Electronic Items</Text>
      <FlatList
        style={{ height: '100%' }}
        data={documentData}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.name}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemHeading: {
    fontSize: 36,
  },
  itemText: {
    fontSize: 32,
  },
});

export default Category4;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';

// Make sure that `db` is initialized correctly as a Firestore instance
import { db } from '../Screens/firebase';

const Category1 = () => {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    // Specify the collection path you want to query
    const collectionPath = 'Categories/ElectronicItems/ElecSubCat1'; // Remove the leading '/'

    // Create a reference to the specified collection
    const categoryCollection = collection(db, collectionPath);

    // Query the collection and fetch the documents
    getDocs(categoryCollection)
      .then((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push(doc.data());
        });
        setDocumentData(documents);
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      });
  }, []);

  return (
    console.log(documentData),
    <View>
      <Text>Category 1 Page</Text>
      <FlatList
        data={documentData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.Name}</Text>
        )}
      />
    </View>
  );
};

export default Category1;

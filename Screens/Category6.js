import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Categories').get()
.then(collectionSnapshot => {
    console.log('Total users: ', collectionSnapshot.size);
    collectionSnapshot
        .forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.id,
                documentSnapshot.data());
        });
});

const Category1 = () => {
  const [data1, setDocumentData] = useState([]);

  useEffect(() => {
    // Specify the collection path you want to query
    

    firebase.firestore().collection('Categories').get().then((querySnapshot) => {
      querySnapshot.forEach(snapshot => {
          let data1 = snapshot.data();
          console.log(data1);
      }
  })
  
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

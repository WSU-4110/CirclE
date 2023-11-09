import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';

// Make sure that `db` is initialized correctly as a Firestore instance
import {db} from '../Screens/firebaseConfig';
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

        // Log the data here
        console.log(documents);
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      });
  }, []);

  return (
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

  //////

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

export default Category1;

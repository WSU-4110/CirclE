import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, StatusBar } from 'react-native';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { initializeApp } from 'firebase/app'; // Import initializeApp from firebase/app

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-1_M8ZRIe6N-AgWKZwWsgtLOmVnLApjQ",
  authDomain: "circlee-a4b5d.firebaseapp.com",
  databaseURL: "https://circlee-a4b5d-default-rtdb.firebaseio.com/",
  projectId: "circlee-a4b5d",
  storageBucket: "circlee-a4b5d.appspot.com",
  messagingSenderId: "361381373341",
  appId: "1:361381373341:web:0838b1f671b92f56d2bb74",
  measurementId: "G-NGWS4NW9QB"
};

const app = initializeApp(firebaseConfig); // Initialize the Firebase app

const Category1 = () => {
  const [electronicItems, setElectronicItems] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const electronicItemsRef = ref(db, 'ElectronicItems');

    const onSnapshot = onValue(electronicItemsRef, (snapshot) => {
      const items = snapshot.val();
      if (items) {
        const itemList = Object.keys(items).map((key) => ({
          key,
          ...items[key],
        }));
        setElectronicItems(itemList);
      }
    });

    return () => off(electronicItemsRef, onSnapshot);
  }, []);

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Text>Electronic Items</Text>
      <FlatList
        style={{ height: '100%' }}
        data={electronicItems}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Pressable style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.key}</Text>
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
    color: 'black',
  },
});

export default Category1;

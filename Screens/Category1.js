
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { View, Text, FlatList, StyleSheet, Pressable, StatusBar } from 'react-native';
import { getDatabase, ref, onValue, off } from 'firebase/compat/database';
import React, { useState, useEffect } from 'react';





const Category1 = ({ firebaseApp }) => {
  const [electronicItems, setElectronicItems] = useState([]);
  const db = getDatabase(firebaseApp);

  useEffect(() => {
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
  }, [db]);


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
    color: 'black', // Fix the color name here
  },
});

export default Category1;

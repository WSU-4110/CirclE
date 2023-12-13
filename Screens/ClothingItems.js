

// ** Page definition: this is the one of 6 categories for clothing items: with call to database/ action modal / profit idicator 


// Shayan Bhatti - did the isProfitable indicator

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { initializeApp } from 'firebase/app';

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

const app = initializeApp(firebaseConfig);

const ActionModal = ({ visible, onClose, title }) => (
  <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{title} Actions</Text>
        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
          <Text style={styles.textStyle}>Reuse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
          <Text style={styles.textStyle}>Reduce</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
          <Text style={styles.textStyle}>Recycle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
          <Text style={styles.textStyle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const Category5 = () => {
  const [carItems, setCarItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const db = getDatabase(app);
    const carItemsRef = ref(db, 'ClothingItems');

    const onSnapshot = onValue(carItemsRef, (snapshot) => {
      const items = snapshot.val();
      if (items) {
        const itemList = Object.keys(items).map((key) => ({
          key,
          ...items[key],
        }));
        setCarItems(itemList);
      }
    });

    return () => off(carItemsRef, onSnapshot);
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Text>Car Items</Text>
      <FlatList
        style={{ height: '100%' }}
        data={carItems}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Pressable style={styles.container} onPress={() => openModal(item)}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.key}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
              <Text style={styles.ecoRatingText}>Eco Rating: {item.ecoRating}/5</Text>
              {item.isProfitable && (
                <Text style={styles.profitIndicator}>💲 isProfitable</Text>
              )}
              {/* Additional item details can be added here */}
            </View>
          </Pressable>
        )}
      />
      {selectedItem && (
        <ActionModal visible={!!selectedItem} onClose={closeModal} title={selectedItem.key} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  ecoRatingText: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
  profitIndicator: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#E8F5E1',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Category5;

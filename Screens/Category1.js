//Electronic items
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Modal, TouchableOpacity, Image, StatusBar } from 'react-native';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import DropDownPicker from 'react-native-dropdown-picker';

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

const ActionModal = ({ visible, onClose, onSelectAction, electronicItems }) => {
  const actionItems = [
    { label: 'Reuse', value: 'reuse' },
    { label: 'Reduce', value: 'reduce' },
    { label: 'Recycle', value: 'recycle' },
  ];

  const [selectedAction, setSelectedAction] = useState(null);

  const handleActionSelection = (action) => {
    setSelectedAction(action);
    onSelectAction(action);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select an Action:</Text>

          {actionItems.map((action) => (
            <TouchableOpacity
              key={action.value}
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleActionSelection(action.value)}
            >
              <Text style={styles.textStyle}>{action.label}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Category1 = () => {
  const [electronicItems, setElectronicItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionModalVisible, setActionModalVisible] = useState(false);
  const [flatListModalVisible, setFlatListModalVisible] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

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

  const openActionModal = (item) => {
    setSelectedItem(item);
    setActionModalVisible(true);
  };

  const closeActionModal = () => {
    setActionModalVisible(false);
    setSelectedItem(null);
  };

  const openFlatListModal = () => {
    setActionModalVisible(false);
    setFlatListModalVisible(true);
  };

  const closeFlatListModal = () => {
    setFlatListModalVisible(false);
  };

  const handleActionSelection = (action) => {
    setSelectedAction(action);
    openFlatListModal(); // Open the modal with the FlatList when an action is selected
  };
  

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Text>Electronic Items</Text>
      <FlatList
        style={{ height: '100%' }}
        data={electronicItems}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Pressable style={styles.container} onPress={() => openActionModal(item)}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.key}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
              <Text style={styles.ecoRatingText}>Eco Rating: {item.ecoRating}/5</Text>

              {/* Profit indication */}
              {item.isProfitable && (
                <View style={styles.profitIndicatorContainer}>
                  <Text style={styles.profitIndicator}>💲 isProfitable</Text>
                </View>
              )}
              {/* Add your image logic here */}
            </View>
          </Pressable>
        )}
      />

      {actionModalVisible && (
        <ActionModal
          visible={actionModalVisible}
          onClose={closeActionModal}
          onSelectAction={handleActionSelection}
          electronicItems={electronicItems}
        />
      )}

{flatListModalVisible && (
  <Modal animationType="slide" transparent={true} visible={flatListModalVisible} onRequestClose={closeFlatListModal}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>FlatList Modal</Text>

        <FlatList
          data={electronicItems}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            // Check if the current item's key matches the modal title
            item.key === selectedItem.key && (
              <View style={styles.innerContainer}>
                <Text style={styles.ecoDetailsText}>
                  {selectedAction === 'reuse' && item.reuse}
                  {selectedAction === 'reduce' && item.reduce}
                  {selectedAction === 'recycle' && item.recycle}
                </Text>
              </View>
            )
          )}
        />

        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={closeFlatListModal}>
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
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

  profitIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profitIndicator: {
    fontSize: 20,
    color: 'green',
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

export default Category1;
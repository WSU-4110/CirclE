import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Alert,
  View,
  Modal,
} from 'react-native';

const images = [
  { uri: require('../assets/camera.png'), name: 'Items:Camera' },
  { uri: require('../assets/gameSystem.png'), name: 'Items: Gaming  products' },
  { uri: require('../assets/laptop.png'), name: 'Items: Laptop' },
  { uri: require('../assets/monitor.png'), name: 'Items: Monitor' },
  { uri: require('../assets/smartphone.png'), name: 'Items: Smartphone' },
  { uri: require('../assets/tablet.png'), name: 'Items: Tablet' },
  { uri: require('../assets/headphone.png'), name: 'Items: Headphones' },
  { uri: require('../assets/speaker.png'), name: 'Items: Speaker' },
  { uri: require('../assets/keyboard.png'), name: 'Items: Keyboards' },
  { uri: require('../assets/USB.png'), name: 'Items: USB Flash Drives' },
];

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: images[index].name,
  imageIndex: index % images.length,
});

const getItemCount = _data => images.length;

const ActionModal = ({ visible, onClose, title }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{title} Actions</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}
        >
          <Text style={styles.textStyle}>Reuse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}
        >
          <Text style={styles.textStyle}>Reduce</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}
        >
          <Text style={styles.textStyle}>Recycle</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}
        >
          <Text style={styles.textStyle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const Item = ({ title, imageIndex }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity 
        style={styles.item}
        onPress={handlePress}
      >
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.tinyLogo}
          source={images[imageIndex].uri}
        />
      </TouchableOpacity>
      <ActionModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        title={title} 
      />
    </>
  );
};

const NewCategory = ({ navigation }) => {
  const showFirstPageAlert = () => {
    Alert.alert("Attention", "This is the first page!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>circl-E Eco Friendly recycle Items</Text>
      <VirtualizedList
        data={Array(4).fill(null)}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} imageIndex={item.imageIndex} navigation={navigation} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={showFirstPageAlert} style={styles.pageButton}>
          <Text style={styles.pageButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Category2')} style={styles.pageButton}>
          <Text style={styles.pageButtonText}>Next Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  // New styles for the modal
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

export default NewCategory;

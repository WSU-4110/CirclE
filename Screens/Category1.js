import React from 'react';
import firebase from 'firebase/compat/app'
//import 'firebase/firestore';


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
} from 'react-native';

const images = [
  { uri: require('../assets/HealthAndPersonalCare.png'), name: 'Health & Personal Care' },
  { uri: require('../assets/HomeDecorAndFurnishings.png'), name: 'Home Decor & Furnishings' },
  { uri: require('../assets/Pets.png'), name: 'Pets' },
  { uri: require('../assets/ClothingAndAccessories.png'), name: 'Clothing & Accessories' },
];

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: images[index].name,
  imageIndex: index % images.length,
});

const getItemCount = _data => 4;

const Item = ({ title, imageIndex, navigation }) => {
  const handlePress = async () => {
    try {
      const documentSnapshot = await firebase.firestore()
        .collection('Categories')
        .doc(title)
        .get();
      
      const firebaseData = documentSnapshot.data();
      console.log(firebaseData); 

    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.item}
      onPress={handlePress}
      testID="virtualized-item"
    >
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.tinyLogo}
        source={images[imageIndex].uri}
      />
    </TouchableOpacity>
  );
};



const Category1 = ({ navigation }) => {
  const showFirstPageAlert = () => {
    Alert.alert("Attention", "This is the first page!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>circl-E Eco Friendly recycle categories</Text>
      <VirtualizedList
        data={Array(4).fill(null)}  // Added this to provide data to VirtualizedList
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} imageIndex={item.imageIndex} navigation={navigation} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={showFirstPageAlert} style={styles.pageButton}>
          <Text style={styles.pageButtonText} accessibilityRole="button">Previous</Text>
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
export { getItemCount };
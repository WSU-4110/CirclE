// Importing necessary React and React Native components and libraries
import React from 'react';
import firestore from '@react-native-firebase/firestore';
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
// Array of image objects, each with a URI and a name
const images = [
  { uri: require('../assets/HealthAndPersonalCare.png'), name: 'Health & Personal Care' },
  { uri: require('../assets/HomeDecorAndFurnishings.png'), name: 'Home Decor & Furnishings' },
  { uri: require('../assets/Pets.png'), name: 'Pets' },
  { uri: require('../assets/ClothingAndAccessories.png'), name: 'Clothing & Accessories' },
];
// Function to get an item's data by index from the images array
const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: images[index].name,
  imageIndex: index % images.length,
});
// Function to get the total count of items in the images array
const getItemCount = _data => 4;
// Item component for rendering each item in the list
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
    >
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.tinyLogo}
        source={images[imageIndex].uri}
      />
    </TouchableOpacity>
  );
};
// Main component for the category screen


    <SafeAreaView style={styles.container}>=
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
      <View style={styles.paginationContainer}> // SafeAreaView to ensure the content is rendered within the safe area boundaries of the device
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

  //////
// StyleSheet for styling various components in the app
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


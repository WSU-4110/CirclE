import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  VirtualizedList,
  StyleSheet,
  Text, //remain the same for previous pages
  StatusBar,
  Image,
  Alert,
  View,
} from 'react-native';

const images = [
  { uri: require('../assets/Crafts_and_Hobbies.png'), name: 'Crafts and Hobbies' },
  { uri: require('../assets/Electronic.png'), name: 'Electronic' },
  { uri: require('../assets/Emergency_and_Safety.png'), name: 'Emergency and Safety' },
  { uri: require('../assets/Entertainment.png'), name: 'Entertainment' },
];

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: images[index].name,
  imageIndex: index % images.length,
});

const getItemCount = _data => 4;

const Item = ({ title, imageIndex, navigation }) => (
  <TouchableOpacity 
    style={styles.item}
    onPress={() => {} }
  >
    <Text style={styles.title}>{title}</Text>
    <Image
      style={styles.tinyLogo}
      source={images[imageIndex].uri}
    />
  </TouchableOpacity>
);

const Category2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>circl-E Eco Friendly recycle categories</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Category1')} style={styles.pageButton}>
          <Text style={styles.pageButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Category3')} style={styles.pageButton}>
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
});

export default Category2;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, ScrollView, Image,TouchableOpacity,ImageBackground } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';



const HomeScreen = ({ navigation }) => {
  const handleIconPress = (pageName) => {
    // Navigate to the specified page when an icon is pressed
    navigation.navigate(pageName);
  };

  const HandleCategoryPress1 = (category1) => {
    setSearch(category1);

    const endpoint = `http://127.0.0.1:5000/items/${category}`;
    axios.get(endpoint)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      })
      .finally(() => {
        navigation.navigate(category1);
      });
  };


  return (



    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background1}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/Logo1.png')}
          style={styles.logo}
          resizeMode="contain"


        />
       <Text style={styles.text}>Recycling with Circle</Text>
<TextInput
  style={styles.input}
  placeholder="Search..."
/>

        {/* Container for horizontal scroll view and category buttons */}
        <View style={styles.horizontalScrollContainer}>
          
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.containerButton} onPress={() => handleCategoryPress('Category1')}>
          <Image source={require('../assets/clothiing__ce.jpg')} style={styles.image} />
          <Text>Section 1 Title</Text>
        </TouchableOpacity>
        <Button title="Button 1" onPress={() => handleCategoryPress('Category1')} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.containerButton} onPress={() => handleCategoryPress('Category2')}>
          <Image source={require('../assets/clothiing__ce.jpg')} style={styles.image} />
          <Text>Section 2 Title</Text>
        </TouchableOpacity>
        <Button title="Button 2" onPress={() => handleCategoryPress('Category2')} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.containerButton} onPress={() => handleCategoryPress('Category1')}>
          <Image source={require('../assets/clothiing__ce.jpg')} style={styles.image} />
          <Text>Section 3 Title</Text>
        </TouchableOpacity>
        <Button title="Button 3" onPress={() => handleCategoryPress('Category3')} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.containerButton} onPress={() => handleCategoryPress('Category1')}>
          <Image source={require('../assets/clothiing__ce.jpg')} style={styles.image} />
          <Text>Section 4 Title</Text>
        </TouchableOpacity>
        <Button title="Button 4" onPress={() => handleCategoryPress('Category4')} />
      </View>
    </ScrollView>
        </View>
        {/* First Row of Icons */}
        
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleIconPress('Category3')}>
            <Image
              source={require('../assets/laptop_ce.jpg')}
              style={styles.icon}
              resizeMode="contain"
            />
            <View style={styles.overlay} />
            
            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('Category3')}>
            <Image
              source={require('../assets/kitchen_ce.jpg')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('Category3')}>
            <Image
              source={require('../assets/furniture_ce.jpg')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Second Row of Icons */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleIconPress('Category3')}>
            <Image
              source={require('../assets/Health_Makeup.jpg')}
              style={styles.icon}
              resizeMode="contain"
            />

            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('Category3')}>
            <Image
              source={require('../assets/carparts_ce.jpg')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('Category3')}>
            <Image
              source={require('../assets/clothiing__ce.jpg')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

// constant values here 
const styles = StyleSheet.create({
  background1: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    marginTop: 10,
  },
  signup: {
    fontSize: 16,
    marginTop: 20,
    color: 'blue',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
     // Dark green with some opacity
  },

  horizontalScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  horizontalScroll: {
    alignItems: 'center',
  },
  login: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 100,
    height: 100,
    margin: 10,
    marginLeft:10,
  },
  horizontalScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  horizontalScroll: {
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center', // Center the icon and label horizontally
  },
  icon: {
    width: 100,  // Set the width and height of your icon
    height: 100,
    resizeMode: 'contain', // Ensure the image fits within the container
  },
  iconLabel: {
    fontSize: 18,
    marginTop: 10, // Add spacing between the icon and label
  },

  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3498db', // Button background color
    borderRadius: 5,
    marginBottom: 10,

  },
  input: {
    height: 40,
    borderColor: '#A5D6A7',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    height: 40,
    borderColor: '#A5D6A7',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom:10
  },
  section: {
    width: 200, // Adjust the section width as needed
    height:200,
    margin: 10, // Adjust the margin as needed
  },
  containerButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#90EE90',
    borderRadius: 5,
  },
  
  
});

export default HomeScreen;
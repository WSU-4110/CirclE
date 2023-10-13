<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
=======
import React from 'react';
import { View, Text, Image, StyleSheet,Button, TouchableOpacity, ImageBackground,ScrollView } from 'react-native';
>>>>>>> Nini_tools

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
<<<<<<< HEAD
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Welcome to the Homepage!</Text>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
<<<<<<< HEAD

        {/* Container for horizontal scroll view and category buttons */}
        <View style={styles.horizontalScrollContainer}>
          <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
            {/* Add horizontal scroll view content here */}
            <Button title="reduce1" onPress={() => handleCategoryPress1('Category1')} />
            <Button title="reuse1" onPress={() => handleCategoryPress1('Category1')} />
            <Button title="Recycle1" onPress={() => handleCategoryPress1('Category1')} />
            <Button title="Orgevents1" onPress={() => handleCategoryPress1('Category1')} />
          </ScrollView>

          <Button title="Category 1" onPress={() => handleCategoryPress('Category1')} />
          <Button title="Category 2" onPress={() => handleCategoryPress('Category2')} />
          <Button title="Category 3" onPress={() => handleCategoryPress('Category3')} />
          <Button title="Category 4" onPress={() => handleCategoryPress('Category4')} />
        </View>

=======
        <Button title="Category 1" onPress={() => handleCategoryPress('Category1')} />
        <Button title="Category 2" onPress={() => handleCategoryPress('Category2')} />
        <Button title="ProfilePage" onPress={() => navigation.navigate('ProfilePage')} />
>>>>>>> 171e24aceb25e4e14560e9eec4c6989486a526e4
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
=======
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background1}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/Logo1.png')}
          style={styles.logo}
          resizeMode="contain"
>>>>>>> Nini_tools
        />
        <Text style={styles.text}>Travel with people. Make new friends.</Text>
        {/* Container for horizontal scroll view and category buttons */}
        <View style={styles.horizontalScrollContainer}>
          <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
            {/* Add horizontal scroll view content here */}
            <Button title="reduce1" onPress={() => handleCategoryPress1('Category1')} />
            <Button title="reuse1" onPress={() => handleCategoryPress1('Category1')} />
            <Button title="Recycle1" onPress={() => handleCategoryPress1('Category1')} />
            <Button title="Orgevents1" onPress={() => handleCategoryPress1('Category1')} />
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

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'blue', // Change the color to your preference
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: 'gray', // Change the border color to your preference
  },
  icon: {
    width: 30,
    height: 30,
  },
  // Add more styles as needed for your components
});
const styles = StyleSheet.create({
<<<<<<< HEAD

=======
  background1: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
>>>>>>> Nini_tools
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default HomeScreen;

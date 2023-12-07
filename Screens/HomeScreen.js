
import { View, StatusBar, Text, TextInput, Button, StyleSheet, FlatList, ScrollView, Image,TouchableOpacity,ImageBackground,SafeAreaView} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

import algoliasearch from 'algoliasearch';
import { InstantSearch,Configure} from 'react-instantsearch-native';
import SearchBox from './SearchBox';

import InfiniteHits from './InfiniteHits';
//import { InfiniteHits } from './InfiniteHits'; 
import Highlight from './Highlight';
import { collection, getDocs, query, where } from "firebase/firestore";

import {db} from './firebaseConfig';
import React, { useState, useEffect } from 'react';


const searchClient1 = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c')






const HomeScreen = ({ navigation }) => {

  
    // Firestore is ready, you can now use it
   
    // Rest of your code



  
// search bar code
  const handleIconPress = (pageName) => {
    // Navigate to the specified page when an icon is pressed
    navigation.navigate(pageName);
  };

  


  return (

<ScrollView>

    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background1}
    >
       <View style={styles.container}>
    <View style={styles.headerContainer}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('../assets/Logo1.png')}
        style={[styles.logo, { marginRight: 10 }]}
        resizeMode="contain"
      />
      <Text style={styles.boldText}>Sustainability Simplified With Circle</Text>
    
       </View>
      
    </View>
    <SafeAreaView style={styles.searchContainer}>
      <InstantSearch searchClient={searchClient1} indexName="Cirle_items">
        <SearchBox />
        <InfiniteHits hitComponent = {Hit} />
      </InstantSearch>
  
    </SafeAreaView>

        {/* Container for horizontal scroll view and category buttons */}
        <Text style={styles.boldText3}>Popular on CirclE</Text>
        <View style={styles.horizontalScrollContainer}>
          
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScroll}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.containerButton} onPress={() => handleIconPress('Newsletter')}>
          <Image source={require('../assets/ddowj.jpg')} style={styles.image} />
          <Text>Learn about Pepsico pollution</Text>
        </TouchableOpacity>
        <Button title="Button 1" onPress={() => handleIconPress('Newsletter')} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.containerButton} onPress={() => handleIconPress('Newsletter')}>
          <Image source={require('../assets/download.jpg')} style={styles.image} />
          <Text>Warning Against Acid Rain"</Text>
        </TouchableOpacity>
        <Button title="Button 2" onPress={() => handleIconPress('Category2')} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.containerButton} onPress={() => handleCategoryPress('Newslette')}>
          <Image source={require('../assets/clothiing__ce.jpg')} style={styles.image} />
          <Text>WHY You should thrift</Text>
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
        <Text style={styles.boldText2}>Browse CircleE categories</Text>
        <View style={styles.row}>
          
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => handleIconPress('Category1')}
            >
              <View style={styles.iconUnderlay}>
                    <View style={styles.iconGreyUnderlay} />
                    <View style={styles.overlay} />
      <View style={styles.label}>
        <Text style={styles.labelText}>Electronic</Text>
                    </View>
              <Image
                source={require('../assets/laptop_ce.jpg')}
                style={[styles.icon, { marginRight: 20 }]} // Adjust the margin for spacing
                resizeMode="contain"
              />
               <View style={styles.iconGreenUnderlay} />
                  </View>
            </TouchableOpacity>



            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => handleIconPress('Category4')}
            >
              <View style={styles.iconUnderlay}>
                    <View style={styles.iconGreyUnderlay} />
                    <View style={styles.overlay} />
      <View style={styles.label}>
        <Text style={styles.labelText}>Kitchen</Text>
                    </View>
              <Image
                source={require('../assets/kitchen_ce.jpg')}
                style={[styles.icon, { marginRight: 20 }]} // Adjust the margin for spacing
                resizeMode="contain"
              />
               <View style={styles.iconGreenUnderlay} />
                  </View>
            </TouchableOpacity>




            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => handleIconPress('Category2')}
            >
            
                    <View style={styles.iconGreyUnderlay} />
                    <View style={styles.overlay} />
      <View style={styles.label}>
        <Text style={styles.labelText}>Furniture</Text>
                    </View>
              <Image
                source={require('../assets/furniture_ce.jpg')}
                style={styles.icon}
                resizeMode="contain"
              />
               <View style={styles.iconGreenUnderlay} />
           
            </TouchableOpacity>
          </View>

          {/* Second Row of Icons */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => handleIconPress('Category2')}
            >
             
                    <View style={styles.iconGreyUnderlay} />
                    <View style={styles.overlay} />
      <View style={styles.label}>
        <Text style={styles.labelText}>Cosmetics</Text>
                    </View>
              <Image
                source={require('../assets/Health_Makeup.jpg')}
                style={[styles.icon, { marginRight: 20 }]} // Adjust the margin for spacing
                resizeMode="contain"
              />
              <View style={styles.iconGreenUnderlay} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => handleIconPress('Category5')}
            >
             
                    <View style={styles.iconGreyUnderlay} />
                    <View style={styles.overlay} />
      <View style={styles.label}>
        <Text style={styles.labelText}>Car Parts</Text>
                    </View>
              <Image
                source={require('../assets/carparts_ce.jpg')}
                style={[styles.icon, { marginRight: 20 }]} // Adjust the margin for spacing
                resizeMode="contain"
              />
             <View style={styles.iconGreenUnderlay} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => handleIconPress('Category3')}
            >
              <View style={styles.iconGreyUnderlay} />
                    <View style={styles.overlay} />
      <View style={styles.label}>
        <Text style={styles.labelText}>Clothing</Text>
                    </View>
              <Image
                source={require('../assets/clothiing__ce.jpg')}
                style={styles.icon}
                resizeMode="contain"
              />
             <View style={styles.iconGreenUnderlay} />
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

// constant values here 

function Hit({ hit }) {
  return (
    <Text>{hit.name}</Text>
  );
}
const styles = StyleSheet.create({
  background1: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 0.4, // Adjust this value to control the proportion
    width: '95%', // 100% of the parent width
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // Background color for the search bar
    // borderTopWidth: 1, // Add a top border if needed
    borderBottomWidth: 1, // Add a bottom border if needed
    //borderColor: 'gray', // Border color
    height: 300,
    marginTop: 10, // Adjust the top margin to lower the container
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Add margin to separate from other content
  },

  overlay: {
    
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.5, // Adjust the opacity to your preference
    borderRadius: 50,
     // Dark green with some opacity
  },
label: {
   
    
   // bottom: 5,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  labelText: {
    //backgroundColor: 'lightgreen',
   // paddingVertical: 4,
   // paddingHorizontal: 10,
    //borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  horizontalScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  horizontalScroll: {
    alignItems: 'center',
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  boldText2: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop:15,
    marginRight: 150,
  },
  boldText3: {
    fontWeight: "bold",
    fontSize: 18,
    //marginBottom: 5,
    marginTop:25,
    marginRight: 220,
  },
  login: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  safe: {
    flex: 1,
    backgroundColor: '#252b33',
  },
  container222: {
    flex: 5,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
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
    flex: 1,
    alignItems: 'center', // Center the icon and label horizontally
    margin: 10,
  },
  iconUnderlay: {
    width: 120,  // Set the desired width for the container
    height: 120, // Set the desired height for the container
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGreyUnderlay: {
    position: 'absolute',
    top: -3,    // Slight top margin to make it slightly bigger
    right: -5,  // Slight right margin to make it slightly bigger
    bottom: -3, // Slight bottom margin to make it slightly bigger
    left: -5,   // Slight left margin to make it slightly bigger
    backgroundColor: 'lightgreen', // Grey underlay color
    borderRadius: 60, // Half of the width and height to make it round
    marginRight: 10,
  },
  iconGreenUnderlay: {
    position: 'absolute',
    bottom: -10, // Slight bottom margin to make it slightly bigger
    backgroundColor: 'grey', // Green underlay color
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  icon: {
    width: 100,  // Set the width and height of your icon
    height: 100,
    borderRadius: 50,
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
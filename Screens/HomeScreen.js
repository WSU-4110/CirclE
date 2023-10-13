import React from 'react';
import { View, Text, Image, StyleSheet,Button, TouchableOpacity, ImageBackground,ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleIconPress = (pageName) => {
    // Navigate to the specified page when an icon is pressed
    navigation.navigate(pageName);
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

const styles = StyleSheet.create({
  background1: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
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
});

export default HomeScreen;

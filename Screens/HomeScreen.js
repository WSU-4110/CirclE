import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = () => {
        if (search.trim() !== '') {
          const endpoint = `http://127.0.0.1:5000/items/${search}`;
          axios.get(endpoint)
            .then((response) => {
              setItems(response.data);
            })
            .catch((error) => {
              console.error('Error fetching items:', error);
            });
        }
      };

      fetchData();
    }, [search])
  );

  const handleCategoryPress = (category) => {
    setSearch(category);

    const endpoint = `http://127.0.0.1:5000/items/${category}`;
    axios.get(endpoint)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      })
      .finally(() => {
        navigation.navigate(category);
      });
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
        />
      </View>
    </View>
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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'lightgreen',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#f1f1f1',
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

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
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

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to the Homepage!</Text>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <Button title="Category 1" onPress={() => handleCategoryPress('Category1')} />
        <Button title="Category 2" onPress={() => handleCategoryPress('Category2')} />
        <Button title="Category 3" onPress={() => handleCategoryPress('Category3')} />
        <Button title="User Items" onPress={() => navigation.navigate('userdefineditems')} />
        <Button title="Go to Save Page" onPress={() => navigation.navigate('save', { items })} />




        <Button title="ProfilePage" onPress={() => navigation.navigate('ProfilePage')} />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388E3C',
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
});

export default HomeScreen;
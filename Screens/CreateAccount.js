//CreateAccount.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // The user account has been created
        console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
        
        // Get the UID of the new user
        var uid = userCredential.user.uid;
  
        // Create a new entry in the database using the UID as the key
        firebase.database().ref('users/' + uid).set({
          username: username,
          email: email,
          // add any additional user info here
        });
  
        navigation.navigate('Home');
      })
      .catch((error) => {
        // Error occurred
        console.error(error.message);
      });
  };

  return (

    
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Image
            style={styles.logo}
            source={require('../assets/Logo1.png')}
        />
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={handleCreateAccount}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <Button title="Back" onPress={() => navigation.goBack()} color="#8BC34A" />
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CreateAccount;


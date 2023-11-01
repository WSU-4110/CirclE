// Import required modules
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const CreateAccount = () => {
  // Initialize React Navigation and component state
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOrganization, setIsOrganization] = useState(false);

  // Function to handle account creation
  const handleCreateAccount = () => {
    // Create a new user using Firebase Auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // If successful, save the user info in Firebase Realtime Database
        const uid = userCredential.user.uid;
        firebase.database().ref('users/' + uid).set({
          username,
          email,
          isOrganization,
        });

        // Navigate to the appropriate home screen based on account type
        if (isOrganization) {
          navigation.navigate('OrganizationHome');
        } else {
          navigation.navigate('Home');
        }
      })
      .catch((error) => {
        // Log any errors
        console.error(error.message);
      });
  };

  // Function to explain the purpose of the organization switch
  const explainSwitch = () => {
    Alert.alert("Is this an organization account?", "Toggle this switch on if you're registering as an organization. This will tailor the app's features to better suit organizational needs.");
  };

  // Render the component
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        // Display app logo
        <Image style={styles.logo} source={require('../assets/Logo1.png')} />
        
        // Organization switch and help icon
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Is this an organization account?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isOrganization ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsOrganization(!isOrganization)}
            value={isOrganization}
          />
          <TouchableOpacity onPress={explainSwitch}>
            <Text style={styles.infoIcon}>i</Text>
          </TouchableOpacity>
        </View>
        
        // Account creation form
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        // Account creation button
        <TouchableOpacity onPress={handleCreateAccount}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </View>
        </TouchableOpacity>

        // Navigation back button
        <Button title="Back" onPress={() => navigation.goBack()} color="#8BC34A" />
      </View>
    </View>
  );
};

// Styles for the component
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
  infoIcon: {
    marginLeft: 10,
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default CreateAccount;
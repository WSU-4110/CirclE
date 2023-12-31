//CreateAccount.js          
// Created CreateAccount.js by Shayan Bhatti and did all the frontend and backend.

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

  // Function to send verification email
  const sendVerificationEmail = (user) => {
    user.sendEmailVerification()
      .then(() => {
        Alert.alert('Verification Email Sent', 'Please check your email to verify your account.');
      })
      .catch((error) => {
        console.error('Error sending verification email:', error);
      });
  };
// Function to handle account creation
const handleCreateAccount = () => {
  // Create a new user using Firebase Auth
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential; // Destructuring to get user object
      
      if (user) {
        sendVerificationEmail(user); // Send verification email only if user object exists

        firebase.database().ref('users/' + user.uid).set({
          username,
          email,
          isOrganization,
        });

        // Navigate to the appropriate home screen based on user type
        if (isOrganization) {
          navigation.navigate('OrganizationHome');
        } else {
          navigation.navigate('HomeScreen');
        }
      }
    })
    .catch((error) => {
      // Display error message if account creation fails
      console.error(error.message);
    });
};

  
  // Function to explain the switch
  const explainSwitch = () => {
    Alert.alert("Is this an organization account?", "Toggle this switch on if you're registering as an organization. This will tailor the app's features to better suit organizational needs.");
  };

  // Return the JSX component
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.logo} source={require('../assets/Logo1.png')} />
        
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

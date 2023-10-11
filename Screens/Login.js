// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Perform authentication logic here
    console.log(`Username: ${username}, Password: ${password}`);

    // Navigate to HomeScreen after successful login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Entire screen background color */}
      <View style={styles.background}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This ensures the outer container takes up the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'lightgreen', // Background color set to light green
    padding: 20,
    borderRadius: 10,
    width: '80%', // You can adjust the width as needed
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%', // Make the input fields occupy the entire width
    padding: 10,
    margin: 10,
    backgroundColor: '#f1f1f1',
  },
});

export default Login;

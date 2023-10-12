
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// the Login component
const Login = () => {
  // Initialize React Navigation
  const navigation = useNavigation();
  
  // Declare state variables for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = () => {
    // Check if the username and password are correct
    if (username === 'admin' && password === 'password') {
      setError(null); // Reset error message
      navigation.navigate('Home'); // Navigate to Home screen
    } else {
      setError('Invalid username or password'); // Set error message
    }
  };

  // Function to handle the Create Account button press
  const handleCreateAccountPress = () => {
    navigation.navigate('CreateAccount'); // Navigate to Create Account screen
  };

  // Render the component
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.logo} source={require('../assets/Logo1.png')} />
        <Text style={styles.title}>Login</Text>
        {/* Conditional rendering of error message */}
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)} // Update username state
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} // Update password state
        />
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        {/* Forgot Password handler */}
        <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Redirecting to forgot password screen.')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        {/* Create Account handler */}
        <TouchableOpacity onPress={handleCreateAccountPress}>
          <Text style={styles.signUp}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define styling for the component
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
  forgotPassword: {
    marginTop: 10,
    color: '#007BFF',
  },
  signUp: {
    marginTop: 10,
    color: '#007BFF',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

// Export the Login component
export default Login;

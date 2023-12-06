import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
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

// Login component responsible for user authentication
const Login = () => {
  // Navigation hook for React Navigation
  const navigation = useNavigation();

  // State variables to hold email, password, and any error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Function to handle successful login
  const handleSuccessfulLogin = (uid) => {
    // Fetch user details from the database
    firebase.database().ref(`/users/${uid}`).once('value').then((snapshot) => {
      const isOrganization = snapshot.val().isOrganization;

      // Navigate to the appropriate home screen based on user type
      const targetScreen = isOrganization ? 'OrganizationHome' : 'HomeScreen';
      navigation.navigate(targetScreen);
    });
  };

  const handlePasswordReset = () => {
    if (email) {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert('Password Reset Email Sent', 'Please check your email to reset your password.');
        })
        .catch((error) => {
          console.error('Error sending password reset email:', error);
        });
    } else {
      Alert.alert('Enter Email', 'Please enter your email address to reset your password.');
    }
  };

  const handleLogin = () => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => handleSuccessfulLogin(userCredential.user.uid))
      .catch((error) => setError(error.message));
  };

  // Function to navigate to the Create Account screen
  const navigateToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.logo} source={require('../assets/Logo1.png')} />
        <Text style={styles.title}>Login</Text>
        
        {/* Display error message if it exists */}
        {error && <Text style={styles.errorText}>{error}</Text>}

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
          secureTextEntry
          onChangeText={setPassword}
        />
        
        {/* Login button */}
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>

        {/* Reset Password link */}
      <TouchableOpacity onPress={handlePasswordReset}>
        <Text style={styles.forgotPassword}>Reset Password</Text>
      </TouchableOpacity>
        
        {/* Navigation to Forgot Password and Create Account */}
        
        <TouchableOpacity onPress={navigateToCreateAccount}>
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

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import ProfilePage from './ProfilePage';

const Settings = ({ navigation }) => {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  // Function to change profile visibility
  const handleToggleProfile = () => {
    setProfileVisible(!isProfileVisible);
  };

  // Function for log out
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Go to login page
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* ProfilePage */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleToggleProfile}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      {/* Contact Support*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Call us at 586-446-2440')}
      >
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>

      {/*Change Password */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('ChangePassword')}
      >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      {/* Delete Account */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleNavigation('DeleteAccount')}
      >
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>

      {/* sign-out */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleSignOut}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      {/* Render the ProfilePage if isProfileVisible is true */}
      {isProfileVisible && <ProfilePage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 13,
    borderRadius: 16,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: 'lightcoral',
    padding: 13,
    borderRadius: 16,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'lightcoral',
    padding: 13,
    borderRadius: 16,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Settings;

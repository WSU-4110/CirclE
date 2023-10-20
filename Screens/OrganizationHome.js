import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase/compat/app';

const OrganizationHome = ({ navigation }) => {
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate('Login');
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Organization Home!</Text>
      {/* Add organization-specific features and layout here */}
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default OrganizationHome;

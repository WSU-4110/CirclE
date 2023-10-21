import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import firebase from 'firebase/compat/app';

// Function to handle user sign out
const handleSignOut = (navigation) => {
  firebase.auth().signOut()
    .then(() => {
      navigation.navigate('Login');
    })
    .catch((error) => {
      console.error(error);
    });
};

// Custom button component
const ActionButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.actionButton} onPress={onPress}>
    <Text style={styles.actionButtonText}>{title}</Text>
  </TouchableOpacity>
);

// Modal for creating a new listing
const CreateListingModal = ({ visible, setVisible }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={() => setVisible(false)}
  >
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Create a Reusable Listing</Text>
      <TextInput placeholder="Enter item details" style={styles.modalInput} />
      <ActionButton title="Submit" onPress={() => setVisible(false)} />
    </View>
  </Modal>
);

// Modal for editing an existing listing
const EditListingModal = ({ visible, setVisible }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={() => setVisible(false)}
  >
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Edit a Reusable Listing</Text>
      <TextInput placeholder="Update item details" style={styles.modalInput} />
      <ActionButton title="Submit" onPress={() => setVisible(false)} />
    </View>
  </Modal>
);

// Main component
const OrganizationHome = ({ navigation }) => {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CircleE!</Text>
      <Text style={styles.subtitle}>Promoting Reuse, Recycle, and Reduce</Text>
      <View style={styles.actionContainer}>
        <ActionButton title="Create Listing" onPress={() => setCreateModalVisible(true)} />
        <ActionButton title="Edit Listing" onPress={() => setEditModalVisible(true)} />
        <ActionButton title="Sign Out" onPress={() => handleSignOut(navigation)} />
      </View>
      <CreateListingModal visible={createModalVisible} setVisible={setCreateModalVisible} />
      <EditListingModal visible={editModalVisible} setVisible={setEditModalVisible} />
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F4F8', // Light blue-grey background for a subtle look
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#4CAF50', // Eco-friendly green to emphasize the recycle-reuse theme
    marginBottom: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    width: '100%',
    marginBottom: 20,
  },
});

export default OrganizationHome;

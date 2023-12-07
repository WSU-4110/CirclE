import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch('ZGVYKOZVLW', 'c766c1f14843c6346b506053b96c6c56');
const algoliaIndex = searchClient.initIndex('Blender');
const algoliaIndex2 = searchClient.initIndex('Circle_events');

const saveBlenderItemToAlgolia = async (itemDetails) => {
  try {
    // Ensure that the itemDetails has a unique objectID
    if (!itemDetails.objectID) {
      // You can generate your own unique objectID or let Algolia generate it
      // For simplicity, let's use Algolia's auto-generation here
      const { objectID } = await algoliaIndex.saveObject(itemDetails, {
        autoGenerateObjectIDIfNotExist: true,
      });
      itemDetails.objectID = objectID;
    } else {
      await algoliaIndex.saveObject(itemDetails);
    }

    console.log('Item added to Algolia (Blender):', itemDetails);
  } catch (error) {
    console.error('Error saving item to Algolia (Blender):', error);
    Alert.alert('Error', 'Failed to save item to Algolia (Blender).');
  }
};

const saveCircleEventsItemToAlgolia = async (itemDetails) => {
  try {
    await algoliaIndex2.saveObject(itemDetails);
    console.log('Item added to Algolia (Circle Events):', itemDetails);
  } catch (error) {
    console.error('Error saving item to Algolia (Circle Events):', error);
    Alert.alert('Error', 'Failed to save item to Algolia (Circle Events).');
  }
};

const OrganizationHome = ({ navigation }) => {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [newsletterModalVisible, setNewsletterModalVisible] = useState(false);

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ActionButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Text style={styles.actionButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const CreateListingModal = ({ visible, setVisible }) => {
    const [itemDetails, setItemDetails] = useState('');

    const handleSubmission = () => {
      const context = 'CircleEvents';
      if (context === 'CircleEvents') {
        saveCircleEventsItemToAlgolia(itemDetails);
      }

      setVisible(false);
    };

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Create a Reusable Listing</Text>
          <TextInput
            placeholder="Enter item details"
            style={styles.modalInput}
            onChangeText={(text) => setItemDetails(text)}
          />
          <ActionButton title="Submit" onPress={handleSubmission} />
        </View>
      </Modal>
    );
  };

  const CreateNewsletterModal = ({ visible, setVisible }) => {
    const [itemDetails, setItemDetails] = useState('');

    const handleSubmission = () => {
      const context = 'Blender';
      if (context === 'Blender') {
        saveBlenderItemToAlgolia(itemDetails);
      }

      setVisible(false);
    };

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Create a Newsletter</Text>
          <TextInput
            placeholder="Enter newsletter details"
            style={styles.modalInput}
            onChangeText={(text) => setItemDetails(text)}
          />
          <ActionButton title="Submit" onPress={handleSubmission} />
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CircleE!</Text>
      <Text style={styles.subtitle}>Promoting Reuse, Recycle, and Reduce</Text>
      <View style={styles.actionContainer}>
        <ActionButton title="Sell on Circle" onPress={() => navigation.navigate('Category3')} />
        <ActionButton title="Create Listing" onPress={() => navigation.navigate('orgevents')} />
        <ActionButton title="Edit Listing" onPress={() => setEditModalVisible(true)} />
        <ActionButton title="Create Newsletter" onPress={() => navigation.navigate('orgNew')} />
        <ActionButton title="Sign Out" onPress={handleSignOut} />
      </View>
      <CreateListingModal visible={createModalVisible} setVisible={setCreateModalVisible} />
      {/* Add EditListingModal here */}
      <CreateNewsletterModal visible={newsletterModalVisible} setVisible={setNewsletterModalVisible} />
    </View>
  );
};





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
   // flexDirection: 'row',
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
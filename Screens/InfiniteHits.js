/**************
   this is a page that uses code design: this achieves modularity as it can be reused multiple time for 
   differnt lists and search functionality 

********************/





import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';
import Highlight from './Highlight';
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";
import { SafeAreaView } from 'react-native';
import algoliasearch from 'algoliasearch';
import Modal from 'react-native-modal';
const searchClient = algoliasearch('ZGVYKOZVLW', 'c766c1f14843c6346b506053b96c6c56');
const algoliaIndex = searchClient.initIndex('Cirle_items');
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dn4olwzqx'
  },
});
const ActionModal = ({ visible, onClose, title, item }) => {
  const [selectedAction, setSelectedAction] = useState(null);

  const handleAction = (action) => {
    // Handle the selected action here
    console.log(`Performing action: ${action}`);
  
    // Access the relevant information from the item
    if (item) {
      if (action === 'Reuse' && item.reuse !== undefined) {
        console.log(`Item Reuse: ${item.reuse}`);
      }
      if (action === 'Reduce' && item.reduce !== undefined) {
        console.log(`Item Reduce: ${item.reduce}`);
      }
      if (action === 'Recycle' && item.recycle !== undefined) {
        console.log(`Item Recycle: ${item.recycle}`);
      }
    }
  
    // Update the state to track the selected action
    setSelectedAction(action);
  };
  




  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title} Actions</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => handleAction('Reuse')}
          >
            <Text style={styles.textStyle}>Reuse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => handleAction('Reduce')}
          >
            <Text style={styles.textStyle}>Reduce</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => handleAction('Recycle')}
          >
            <Text style={styles.textStyle}>Recycle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Conditionally render another modal based on the selected action */}
      {selectedAction && (
        <NestedModal action={selectedAction} onClose={() => setSelectedAction(null)} />
      )}
    </Modal>
  );
};

const NestedModal = ({ action, title, onClose }) => (
  <Modal animationType="slide" transparent={true} visible={true} onRequestClose={onClose}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Nested Modal for {action}</Text>
        {/* Display additional content based on the selected action */}
        <Text style={styles.textStyle}>Item: {title}</Text>
        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
          <Text style={styles.textStyle}>Close Nested Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);



const InfiniteHits = ({ hits, hasMore, refineNext }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => {
    const myImage = cld.image(item.poster_path);

    return (
      <TouchableOpacity onPress={() => openModal(item)}>
        <View style={styles.item}>
          <SafeAreaView>
            <AdvancedImage cldImg={myImage} style={{ width: 80, height: 80 }} />
          </SafeAreaView>
          <Text style={styles.titleText}>
            <Highlight attribute="name" hit={item} />
            <Text style={{ textAlign: 'left' }}> {item.Material} </Text>
            
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={hits}
        keyExtractor={(item) => item.objectID}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReached={() => hasMore && refineNext()}
        onEndReachedThreshold={3}
        renderItem={renderItem}
      />
      {selectedItem && (
        <ActionModal
          visible={isModalVisible}
          onClose={closeModal}
          title={selectedItem.name}
        />
      )}
    </>
  );
};

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refineNext: PropTypes.func.isRequired,
};




const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 49,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    backgroundColor: 'lightgreen',
  },

  
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemHeading: {
    fontSize: 36,
  },
  itemText: {
    fontSize: 32,
    color: 'black',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  // Styles for the modal (copied from the previous code)
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#E8F5E1',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default connectInfiniteHits(InfiniteHits);

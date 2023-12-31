import * as React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import SearchBox from './SearchBox';
import { InstantSearch, Configure } from 'react-instantsearch-native';
import algoliasearch from 'algoliasearch';
import InfiniteHits from './InfiniteHits';


const searchClient1 = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c');

const OrgPage = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <View style={styles.container}>
      <View style={styles.searchButtonContainer}>
        <Button title="Search" onPress={handleModal} />
      </View>
      <View style={styles.sectionsContainer}>
        <Section title="Org Products" >
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <InstantSearch searchClient={searchClient1} indexName="Sell_items">
              <InfiniteHits hitComponent={Hit} />
            </InstantSearch>
          </ScrollView>
        </Section>
        <Section title="Org News">
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <InstantSearch searchClient={searchClient1} indexName="Blender">
              <InfiniteHits hitComponent={Hit} />
            </InstantSearch>
          </ScrollView>
        </Section>
        <Section title="Org Events">
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <InstantSearch searchClient={searchClient1} indexName="Circle_events">
              <InfiniteHits hitComponent={Hit} />
            </InstantSearch>
          </ScrollView>
        </Section>
      </View>
      <Modal
        isVisible={isModalVisible}
        style={styles.modalContainer}
        onBackdropPress={handleModal}
      >
        <View style={styles.modalContent}>
          <InstantSearch searchClient={searchClient1} indexName="Sell_items">
            <SearchBox />
            <InfiniteHits hitComponent={Hit} />
          </InstantSearch>
        </View>
      </Modal>
    </View>
  );
}

const Section = ({ title, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchButtonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  sectionsContainer: {
    flex: 1,
    flexDirection: "column",
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: 300, // Adjust the maximum height as needed
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFACD", // Light yellow background color
    padding: 10, // Add padding to provide some space around the content
    borderRadius: 8, // Add border radius for rounded corners
  },
  searchButtonText: {
    color: "white",
    fontSize: 18,
  },
 // Update the sectionTitle style:
sectionTitle: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 10,
  color: "#2c3e50", // Choose your preferred color
},

  scrollContent: {
    // Add styling for the content inside the ScrollView for Org Events section
  },
});

function Hit({ hit }) {
  return <Text>{hit.name}</Text>;
}

export default OrgPage
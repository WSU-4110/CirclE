import * as React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import SearchBox from './SearchBox';
import { InstantSearch,Configure} from 'react-instantsearch-native';
import algoliasearch from 'algoliasearch';
import InfiniteHits from './InfiniteHits';


const searchClient1 = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c')


const OrgPage = () => {
 


  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleModal}>
    
      <InstantSearch searchClient={searchClient1} indexName="Circle_data">
        <SearchBox />
       
      </InstantSearch>
  
   
           
          </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
       
    
    <InstantSearch searchClient={searchClient1} indexName="Circle_data">
      <SearchBox />
<InfiniteHits hitComponent = {Hit} />
      </InstantSearch>
  
 
         
        
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

function Hit({ hit }) {
  return <Text>{hit.name}</Text>;
}
export default OrgPage;
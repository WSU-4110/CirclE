// orgPage.js
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import algoliasearch from 'algoliasearch';
import {InstantSearch} from 'react-instantsearch-native';
import SearchBox from './SearchBox';
import InfiniteHits from './InfiniteHits';
import Highlight from './Highlight';



const searchClient1 = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c')


const styles = StyleSheet.create({
  
});

const OrgPage = () => {
  return (
    <SafeAreaView style={styles.searchContainer}>
      

      <InstantSearch searchClient={searchClient1} indexName="Circle_data">
        <SearchBox />
        <InfiniteHits hitComponent = {Hit} />
      </InstantSearch>
  
    </SafeAreaView>
      
      
  );
};
function Hit({ hit }) {
  return (
    <Text>{hit.name}</Text>
  );
}
export default OrgPage;

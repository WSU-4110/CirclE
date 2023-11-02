import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {connectInfiniteHits} from 'react-instantsearch-native';
import Highlight from './Highlight';
import { useInfiniteHits } from 'react-instantsearch-core';


const InfiniteHits =  ({hits, hasMore, refineNext}) => {
    console.log(hits)
    return (
      <FlatList
        data={hits}
        keyExtractor={(item) => item.objectID}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReached={() => hasMore && refineNext()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titleText}>
          <Highlight attribute="name" hit={item} />
        </Text>
          </View>
        )}
      />
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
      padding: 10,
      flexDirection: 'column',
      //backgroundColor: 'coral',
    },
    titleText: {
      fontWeight: 'bold',
    },
  });
  
export default connectInfiniteHits(InfiniteHits);
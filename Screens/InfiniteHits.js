import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';
import Highlight from './Highlight';
import { ListItem, Avatar } from 'react-native-elements'; // Import ListItem and Avatar components
import { useInfiniteHits } from 'react-instantsearch-core';

const InfiniteHits = ({ hits, hasMore, refineNext }) => (
  <FlatList
    data={hits}
    keyExtractor={(item) => item.objectID}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refineNext()}
    onEndReachedThreshold={3}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Avatar
          rounded
          source={{ uri: item.backdrop_path }} // Use the URI for the image
          size="medium" // Adjust the size as needed
          containerStyle={styles.avatarContainer}
        />
        <Text style={styles.titleText}>
          <Highlight attribute="name" hit={item} />
          <Text style={{ textAlign: 'left' }}> {item.title} </Text>
          <Text style={{ textAlign: 'left' }}>{item.genre}</Text>
        </Text>
      </View>
    )}
  />
);

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
    flexDirection: 'row', // Adjust flexDirection to create the desired layout
    backgroundColor: 'lightgreen', // Light green background
    alignItems: 'center', // Center content vertically
  },
  titleText: {
    marginLeft: 19, // Add left margin for spacing
  },
  avatarContainer: {
    backgroundColor: 'lightgreen', // Add white background for the circular avatar
  },
});

export default connectInfiniteHits(InfiniteHits);

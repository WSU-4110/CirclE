// Mock FlatList component
import React from 'react';
import { View } from 'react-native';

const FlatlisrMock = ({ data, renderItem }) => {
  // Simulate rendering of FlatList items
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>{renderItem({ item })}</View>
      ))}
    </View>
  );
};

export default FlatlisrMock;

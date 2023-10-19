import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';

// 图片数组，您可以在这里添加更多的图片路径
const images = [
  require('../assets/dog.jpeg'),  // 静态引入图片路径
  // ... 更多图片路径
];

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
  imageIndex: index % images.length,  // 这将确保图片在数组中循环
});

const getItemCount = _data => 12;

const Item = ({title, imageIndex}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={styles.tinyLogo}
      source={images[imageIndex]}
    />
  </View>
);

const Category1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({item}) => <Item title={item.title} imageIndex={item.imageIndex} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  tinyLogo: {
    width: 280,
    height: 100,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 180,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    marginBottom: 10
  },
});

export default Category1;

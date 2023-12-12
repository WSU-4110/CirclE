//Created by Ankith Goutham
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet,Button, Image, Animated } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const logoTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create a translation animation for the logo
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoTranslateX, {
          toValue: 20,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(logoTranslateX, {
          toValue: -20,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  useEffect(() => {
    // Delay navigation by 2000 milliseconds (2 seconds)
    const delay = 2000;

    // Set up a timer to navigate after the delay
    const timer = setTimeout(() => {
      // Navigate to the next screen (e.g., 'LoginOptions') after the delay
      navigation.navigate('Welcome');
    }, delay);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.Image
          style={[styles.logo, { transform: [{ translateX: logoTranslateX }] }]}
          source={require('../assets/Logo1.png')}
        />
        <Text style={styles.title}>CircleE is Loading...</Text>
        <Button title="Welcome" onPress={() => navigation.navigate('Welcome')} />

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
  },
  background: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333', 
  },
});

export default LoadingScreen;

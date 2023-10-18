import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

//  Using the factory design pattern for the Login Options, this is the abstract
class LoginOptionsFactory {
  createLoginOption(navigation) {
    // This'll be used by subclasses
  }
}

// Using the factory design pattern for the Login Options
class ConcreteLoginOptionsFactory extends LoginOptionsFactory {
  createLoginOption(navigation, optionName) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(optionName)}
      >
        <Text style={styles.buttonText}>{optionName}</Text>
      </TouchableOpacity>
    );
  }
}

const LoginOptions = ({ navigation }) => {
  const factory = new ConcreteLoginOptionsFactory();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/Logo1.png')}
          />
        </View>
        <Text style={styles.title}>Choose an Option:</Text>
        {factory.createLoginOption(navigation, 'Login')}
        {factory.createLoginOption(navigation, 'CreateAccount')}
        {factory.createLoginOption(navigation, 'HomeScreen')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388E3C',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginOptions;

import React from 'react';
import { View, Text, Button } from 'react-native';

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Page</Text>
      <Button 
        title="Go to Profile Page" 
        onPress={() => navigation.navigate('ProfilePage')}
      />
    </View>
  );
};

export default Settings;

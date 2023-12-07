import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { DeadSimpleChat } from 'deadsimplechat-sdk-react-native';
import { StatusBar } from 'expo-status-bar';
import SimpleChat from './simplechat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatroom: {
    width: 370,
    height: 250,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {Platform.OS === 'android' ? (
        <DeadSimpleChat
          roomId="2fZ07hXau"
          publicKey="pub_4e506a67593255396b657570525356394c4f6b4b6f7a4d6b447776596f78746b4868442d734266706d6b396d54734435"
          style={styles.chatroom}
        />
      ) : (
        <SimpleChat style={styles.chatroom} />
      )}
    </View>
  );
}




{/* 
 */}

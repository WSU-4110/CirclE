import React, { useState } from 'react';
import { View, Image, TextInput, Button, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const SimpleChat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi there!', sentAt: '10:10 AM', username: "Recycle123" },
    { text: 'Where can I recycle clothes.', sentAt: '10:12 AM', username: "Recycle123" },
  ]);
  
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, sentAt: new Date().toLocaleTimeString(), username: 'User-1' }]);
      setCurrentMessage('');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView style={styles.messagesContainer} 
        ref={ref => this.scrollView = ref}
        onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
        {messages.map((message, index) => (
        <View key={index} style={styles.messageBubble}>
            <Image source={require('../assets/images.png')} style={styles.profilePic} />
            <View style={styles.messageTextContainer}>
            <Text style={styles.username}>{message.username}</Text>
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.messageTime}>{message.sentAt}</Text>
            </View>
        </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={currentMessage}
          onChangeText={setCurrentMessage}
          placeholder="Type your message"
          onSubmitEditing={sendMessage}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    messagesContainer: {
      flex: 1,
      padding: 10,
    },
    messageBubble: {
      flexDirection: 'row',
      padding: 10,
      marginVertical: 5,
      borderRadius: 15,
      maxWidth: '80%',
      alignSelf: 'flex-start', 
      backgroundColor: 'white', 
    },
    myMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#dcf8c6', 
    },
    otherMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#fff', 
    },
    messageContent: {
      flexShrink: 1,
    },
    profilePic: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: 10,
    },
    messageText: {
      fontSize: 16,
      color: 'black',
    },
    messageTime: {
      fontSize: 12,
      color: 'grey',
      marginTop: 4,
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
      borderTopWidth: 1,
      borderColor: '#ccc',
      backgroundColor: 'white',
    },
    input: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: 'white',
    },
  });
  

export default SimpleChat;

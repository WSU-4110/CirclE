import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//Username from email
const getUsernameFromEmail = (email) => {
    return email.split('@')[0];
};

const ProfilePage = ({ navigation }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isProfileVisible, setProfileVisible] = useState(true);

    useEffect(() => {
        // Fetch the current user from Firebase authentication
        const user = firebase.auth().currentUser;
        if (user) {
            // Set the current user in the component's state
            setCurrentUser(user);
        }
    }, []);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isProfileVisible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.tile}>
                    <View style={styles.userPhotoContainer}>
                        {/* Display profile photo */}
                        <Image source={require('../assets/images.png')} style={styles.userPhoto} />
                    </View>

                    <Text style={styles.userName}>
                        {/* Display the username/Guest */}
                        User: {currentUser ? getUsernameFromEmail(currentUser.email) : 'Guest'}
                    </Text>
                    <Text style={styles.userId}>
                        ID: {currentUser ? currentUser.uid : 'N/A'}
                    </Text>
                    <View style={styles.textSpacing} />
                    <Text style={styles.emailText}>
                        Email: {currentUser ? currentUser.email : 'N/A'}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setProfileVisible(false)}
                        style={styles.closeButton}
                    >
                        {/* Close Button*/}
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    tile: {
        backgroundColor: '#E8F5E9',
        padding: 10,
        borderRadius: 10,
        width: 300,
    },
    userPhotoContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    textSpacing: {
        marginVertical: 10,
    },
    userPhoto: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    userId: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'green',
    },
    emailText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    closeButton: {
        backgroundColor: 'red',
        width: 60,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    closeButtonText: {
        color: 'white',
    },
});

export default ProfilePage;

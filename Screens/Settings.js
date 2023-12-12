import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import ProfilePage from './ProfilePage';

const Settings = ({ navigation }) => {
    const [isProfileVisible, setProfileVisible] = useState(false);

    const handleNavigation = (screenName) => {
        navigation.navigate(screenName);
    };

    // Function to change profile visibility
    const handleToggleProfile = () => {
        setProfileVisible(!isProfileVisible);
    };

    // Function for log out
    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                // Go to the login page
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.error('Sign-out error:', error);
            });
    };

    // Function to delete account
    const handleDeleteAccount = () => {
        Alert.alert(
            'Delete Account',
            'Are you sure you want to delete your account? This action is irreversible.',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        const user = firebase.auth().currentUser;
                        if (user) {
                            user
                                .delete()
                                .then(() => {
                                    //Go to the login page
                                    navigation.navigate('Login');
                                })
                                .catch((error) => {
                                    console.error('Account deletion error:', error);
                                });
                        }
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            {/* ProfilePage */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleToggleProfile}
            >
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>

            {/* Change Password */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleNavigation('ChangePassword')}
            >
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>

            {/* Contact Support */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Call us at 586-446-2440')}
            >
                <Text style={styles.buttonText}>Contact Support</Text>
            </TouchableOpacity>

            {/* Ratings */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleNavigation('Ratings')}

            >
                <Text style={styles.buttonText}>Ratings</Text>
            </TouchableOpacity>

            {/* Delete Saved Items */}
            <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleNavigation('SavedItems')}
                    >
                    <Text style={styles.buttonText}>Saved Items</Text>
                </TouchableOpacity>

            {/* Delete Account */}
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDeleteAccount}
            >
                <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>

            {/* Sign Out */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>

            {/* Show the ProfilePage if true */}
            {isProfileVisible && <ProfilePage />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8F5E9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 13,
        borderRadius: 16,
        width: 200,
        alignItems: 'center',
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: 'lightcoral',
        padding: 13,
        borderRadius: 16,
        width: 200,
        alignItems: 'center',
        marginBottom: 10,
    },
    deleteButton: {
        backgroundColor: 'lightcoral',
        padding: 13,
        borderRadius: 16,
        width: 200,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Settings;
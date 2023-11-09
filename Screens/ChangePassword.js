import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const ChangePasswordPage = ({ navigation }) => {
    // State to manage the new password and password change success
    const [newPassword, setNewPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);

    // Function to handle the password change
    const handleChangePassword = () => {
        const user = firebase.auth().currentUser;

        if (user) {
            user.updatePassword(newPassword)
                .then(() => {
                    setPasswordChanged(true);
                })
                .catch((error) => {
                    console.error('Password change error:', error);
                });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Change Password</Text>

            {/* Text input*/}
            <TextInput
                style={styles.passwordInput}
                placeholder="New Password"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
            />

            {/* Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleChangePassword}
            >
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>

            {/* Success Message*/}
            {passwordChanged && <Text style={styles.successMessage}>Password Changed !</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8F5E9',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    passwordInput: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    successMessage: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#4CAF50', 
        padding: 10,
        borderRadius: 16, 
        width: 200,
        alignItems: 'center',
        marginBottom: 200,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ChangePasswordPage;

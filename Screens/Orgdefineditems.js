import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



const Orgdefineditems = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userPhotoContainer}>
                <Image
                    source={require('../assets/images.png')} //Image Path
                    style={styles.userPhoto}
                />
                <TouchableOpacity style={styles.editButton} onPress={() => alert('Edit Photo')}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userId}>User ID: 00003234</Text>
            <TouchableOpacity style={styles.button} onPress={() => alert('Allow user to change Password')}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.buttonSpacing} />
            <TouchableOpacity style={styles.button} onPress={() => alert('Allow user to view email address')}>
                <Text style={styles.buttonText}>Email Address</Text>
            </TouchableOpacity>
            <View style={styles.buttonSpacing} />
            <TouchableOpacity style={styles.button} onPress={() => alert('Will link to helpline')}>
                <Text style={styles.buttonText}>Support</Text>
            </TouchableOpacity>
            <View style={styles.buttonSpacing} />
            <TouchableOpacity style={styles.button} onPress={() => alert('Will take the user to the login page')}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
            <View style={styles.buttonSpacing} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SavedItems')}>
                <Text style={styles.buttonText}>Saved Items</Text>
            </TouchableOpacity>
            <View style={styles.buttonSpacing} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ratings')}>
                <Text style={styles.buttonText}>Ratings</Text>
            </TouchableOpacity>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8F5E9',
        padding: 30,
        borderRadius: 10,
        width: '100%',
    },
    userPhotoContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    userPhoto: {
        width: 100,
        height: 100,
        borderRadius: 50, 
    },
    editButton: {
        backgroundColor: '#4CAF50',
        width: 30,
        height: 30,
        borderRadius: 15, 
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        bottom: 0,
    },
    editButtonText: {
        color: 'white',
        fontSize: 12,
    },
    userId: {
        fontSize: 15,
        marginBottom: 30,
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 28,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 16,
        width: 200,
        alignItems: 'center',
        marginBottom: 15,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonSpacing: {
        marginVertical: 5,

    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },

});

export default Orgdefineditems;

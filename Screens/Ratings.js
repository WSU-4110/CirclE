import React, { useState, useEffect } from 'react';
import { View, Text,Image, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const Leaderboard = () => {
    const [users, setUsers] = useState([]);
    const [newRecyclingAmount, setNewRecyclingAmount] = useState('');

    const initializeUserData = (userId) => {
        const userRef = firebase.database().ref(`users/${userId}/recyclingData`);
        userRef.once('value', (snapshot) => {
            if (!snapshot.exists()) {
                userRef.set({
                    totalRecycled: 0,
                    rating: 0,
                });
            }
        });
    };

    useEffect(() => {
        const userId = firebase.auth().currentUser.uid;
        initializeUserData(userId);

        const usersRef = firebase.database().ref('users');
        usersRef.on('value', (snapshot) => {
            const usersData = snapshot.val();
            const sortedUsers = Object.keys(usersData)
                .map(key => ({
                    ...usersData[key],
                    uid: key,
                }))
                .filter(user => user.recyclingData && user.recyclingData.rating)
                .sort((a, b) => b.recyclingData.rating - a.recyclingData.rating);

            setUsers(sortedUsers);
        });

        return () => usersRef.off();
    }, []);

    const handleLogRecycling = () => {
        const userId = firebase.auth().currentUser.uid;
        const userRef = firebase.database().ref(`users/${userId}/recyclingData`);

        userRef.transaction((currentData) => {
            if (currentData) {
                const additionalAmount = parseInt(newRecyclingAmount, 10) || 0;
                currentData.totalRecycled = (currentData.totalRecycled || 0) + additionalAmount;
                currentData.rating = calculateRating(currentData.totalRecycled);
            }
            return currentData;
        });

        setNewRecyclingAmount('');
    };

    const calculateRating = (totalRecycled) => {
        return Math.min(10, Math.floor(totalRecycled / 100));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log Your Recycling Activity</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Amount of..."
                value={newRecyclingAmount}
                keyboardType="numeric"
                onChangeText={(text) => setNewRecyclingAmount(text)}
            />
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={handleLogRecycling}
            >
                <Text style={styles.addButtonText}>Log Recycling</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Leaderboard</Text>
            <FlatList
                data={users}
                keyExtractor={item => item.uid}
                renderItem={({ item }) => (
                    <View style={styles.userContainer}>
                        <Image
                        source={require('../assets/images.png')} 
                        style={styles.userPhoto}
                        />
                        <Text style={styles.username}>{item.username}</Text>
                        <Text style={styles.rating}>Rating: {item.recyclingData.rating}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E8F5E9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#388E3C',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#A5D6A7',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
        width: '100%',
    },
    addButton: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#2196F3',
        marginBottom: 20,
        width: '50%',  
        alignSelf: 'center',
    },
    addButtonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        alignSelf: 'center',    
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    userPhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    rating: {
        fontSize: 18,
        color: '#388E3C',
    },
    // ...other styles you might need
});

export default Leaderboard;

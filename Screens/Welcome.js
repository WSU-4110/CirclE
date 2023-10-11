import React from 'react';
import { View, Text, Button } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <View>
            <Text>Sample Welcome Page/ Testing Login and Create Account</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Create Account"
                onPress={() => navigation.navigate('CreateAccount')}
            />
        </View>
    );
};

export default Welcome;

import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Settings from './Settings';

// Mock the Alert component to handle the delete account confirmation
jest.mock('react-native/Libraries/Alert/Alert', () => {
    return {
        alert: jest.fn(),
    };
});

// Mock the navigation prop
const mockNavigation = {
    navigate: jest.fn(),
};

// Mock the firebase.auth() function
jest.mock('firebase/compat/auth', () => ({
    auth: jest.fn(() => ({
        signOut: jest.fn(() => Promise.resolve()),
        currentUser: {
            delete: jest.fn(() => Promise.resolve()),
        },
    })),
}));

describe('Settings', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Settings navigation={mockNavigation} />);

        expect(getByText('Settings')).toBeTruthy();
        expect(getByText('Profile')).toBeTruthy();
        expect(getByText('Change Password')).toBeTruthy();
        expect(getByText('Contact Support')).toBeTruthy();
        expect(getByText('Delete Account')).toBeTruthy();
        expect(getByText('Log Out')).toBeTruthy();
    });

    it('toggles profile visibility on button press', () => {
        const { getByText, queryByTestId } = render(<Settings navigation={mockNavigation} />);

        fireEvent.press(getByText('Profile'));

        expect(queryByTestId('profile-page')).toBeNull();
    });

    it('navigates to ChangePassword screen on button press', () => {
        const { getByText } = render(<Settings navigation={mockNavigation} />);

        fireEvent.press(getByText('Change Password'));

        expect(mockNavigation.navigate).toHaveBeenCalledWith('ChangePassword');
    });

    it('shows confirmation alert and deletes account on button press', async () => {
        const { getByText } = render(<Settings navigation={mockNavigation} />);

        // Mock the Alert.alert
        jest.spyOn(global, 'alert').mockImplementation(() => { });

        fireEvent.press(getByText('Delete Account'));

        await waitFor(() => {
            expect(global.alert).toHaveBeenCalledWith(
                'Confirmation',
                'Are you sure you want to delete your account?',
                [
                    { text: 'Cancel', onPress: expect.any(Function), style: 'cancel' },
                    { text: 'Delete', onPress: expect.any(Function) },
                ]
            );
        });

        // Mock the user confirmation
        act(() => {
            const callback = global.alert.mock.calls[0][2][1];
            callback(); // This triggers the 'Delete' option in the alert
        });

        await waitFor(() => {
            expect(firebase.auth().currentUser.delete).toHaveBeenCalled();
        });
    });

    it('signs out on Log Out button press', async () => {
        const { getByText } = render(<Settings navigation={mockNavigation} />);

        // Mock the signOut function
        jest.spyOn(firebase.auth(), 'signOut').mockResolvedValue();

        fireEvent.press(getByText('Log Out'));

        // Wait for the sign out to complete
        await waitFor(() => {
            expect(firebase.auth().signOut).toHaveBeenCalled();
            expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
        });
    });
});

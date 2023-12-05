import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Settings from './Settings';
import { Alert as ReactNativeAlert } from 'react-native';


// Mock the Alert component to handle the delete account confirmation

jest.mock('react-native/Libraries/Alert/Alert', () => ({
    alert: jest.fn(),
}));


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
    it('displays confirmation alert on Delete Account button press', () => {
        const { getByText } = render(<Settings navigation={mockNavigation} />);

        fireEvent.press(getByText('Delete Account'));

        expect(ReactNativeAlert.alert).toHaveBeenCalledWith(
            'Delete Account',
            'Are you sure you want to delete your account? This action is irreversible.',
            expect.any(Array)
        );
    });






      
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProfilePage from './ProfilePage';

const mockNavigation = {
    navigate: jest.fn(),
};

describe('ProfilePage Component', () => {
    it('renders correctly', () => {
        const { getByText, getByTestId } = render(<ProfilePage navigation={mockNavigation} />);

        // Check if key elements are present
        expect(getByText('John Doe')).toBeTruthy();
        expect(getByTestId('user-photo')).toBeTruthy();
        expect(getByText('User ID: 00003234')).toBeTruthy();
        expect(getByText('Edit')).toBeTruthy();
        expect(getByText('Settings')).toBeTruthy();
        expect(getByText('Email Address')).toBeTruthy();
        expect(getByText('Support')).toBeTruthy();
        expect(getByText('Sign Out')).toBeTruthy();
        expect(getByText('Saved Items')).toBeTruthy();
    });

    it('navigates to SavedItems screen when "Saved Items" button is pressed', () => {
        const { getByText } = render(<ProfilePage navigation={mockNavigation} />);
        fireEvent.press(getByText('Saved Items'));
        expect(mockNavigation.navigate).toHaveBeenCalledWith('SavedItems');
    });

    it('displays alert when "Edit Photo" button is pressed', () => {
        const { getByText } = render(<ProfilePage navigation={mockNavigation} />);

        fireEvent.press(getByText('Edit Photo'));

        const originalAlert = global.alert;
        global.alert = jest.fn();

        expect(global.alert).toHaveBeenCalledWith('Edit Photo');
        global.alert = originalAlert;
    });



});

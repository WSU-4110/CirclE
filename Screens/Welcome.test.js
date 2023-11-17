import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginOptions from './Welcome';

describe('LoginOptions component', () => {
//Tests that the rendering happens correctly
  test('renders correctly', () => {
    const { getByText } = render(<LoginOptions />);
    
    expect(getByText('Choose an Option:')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Create Account')).toBeTruthy();
    expect(getByText('Continue As Guest')).toBeTruthy();
  });
//Tests that the Login Screen gets navigated to
  test('navigates to Login screen', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<LoginOptions navigation={{ navigate: mockNavigate }} />);
    
    fireEvent.press(getByText('Login'));
    expect(mockNavigate).toHaveBeenCalledWith('Login');
  });
//Tests that this page takes to the Create Account Screen
  test('navigates to Create Account screen', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<LoginOptions navigation={{ navigate: mockNavigate }} />);
    
    fireEvent.press(getByText('Create Account'));
    expect(mockNavigate).toHaveBeenCalledWith('CreateAccount');
  });
//Tests that this screen navigates to HomeScreen as a guest
  test('navigates to HomeScreen as guest', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<LoginOptions navigation={{ navigate: mockNavigate }} />);
    
    fireEvent.press(getByText('Continue As Guest'));
    expect(mockNavigate).toHaveBeenCalledWith('HomeScreen');
  });

});
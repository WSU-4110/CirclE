import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import LoadingScreen from './LoadingScreen';

jest.useFakeTimers(); // Mock timers for setTimeout

describe('LoadingScreen component', () => {
  test('navigates to Welcome screen after 2 seconds', async () => {
    const navigationMock = { navigate: jest.fn() };
    render(<LoadingScreen navigation={navigationMock} />);

    // Advance timers by 2 seconds to trigger navigation
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Check if navigation function has been called
    expect(navigationMock.navigate).toHaveBeenCalledWith('Welcome');
  });

  test('navigates to Welcome screen when button is pressed', async () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByTestId } = render(<LoadingScreen navigation={navigationMock} />);

    // Simulate button press
    fireEvent.press(getByTestId('welcome-button'));

    // Check if navigation function has been called
    expect(navigationMock.navigate).toHaveBeenCalledWith('Welcome');
  });
});
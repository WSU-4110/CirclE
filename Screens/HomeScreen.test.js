import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    // Render the component
    const { getByText, getByTestId } = render(<HomeScreen />);

    // Check if important elements are rendered
    expect(getByText('Sustainability Simplified With Circle')).toBeDefined();
    expect(getByTestId('search-box')).toBeDefined();
    expect(getByText('Popular on CircleE')).toBeDefined();
    expect(getByText('Browse CircleE categories')).toBeDefined();

    // Add more assertions as needed based on your UI

    // For example, you might want to check if specific images are rendered:
    expect(getByTestId('electronic-image')).toBeDefined();
    expect(getByTestId('kitchen-image')).toBeDefined();
    expect(getByTestId('furniture-image')).toBeDefined();

    // Or if specific buttons are rendered:
    expect(getByText('Button 1')).toBeDefined();
    expect(getByText('Button 2')).toBeDefined();
    expect(getByText('Button 3')).toBeDefined();
  });
});

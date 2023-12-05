import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { connectSearchBox } from 'react-instantsearch-native';
import SearchBox from './SearchBox';

// Mock the entire 'react-instantsearch-native' module
jest.mock('react-instantsearch-native', () => ({
  ...jest.requireActual('react-instantsearch-native'), // Use actual implementations for other functions
  connectSearchBox: jest.fn((SearchBoxComponent) => SearchBoxComponent), // Mock connectSearchBox
}));

describe('SearchBox', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SearchBox currentRefinement="" refine={() => {}} />);
    const input = getByPlaceholderText('Search CirclE');

    expect(input).toBeDefined();
  });

  it('calls refine function when text changes', () => {
    const refineMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchBox currentRefinement="" refine={refineMock} />);
    const input = getByPlaceholderText('Search CirclE');

    fireEvent.changeText(input, 'test');

    expect(refineMock).toHaveBeenCalledWith('test');
  });
});

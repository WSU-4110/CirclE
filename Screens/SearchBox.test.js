import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBox from './SearchBox';

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


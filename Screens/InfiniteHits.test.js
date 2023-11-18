import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InfiniteHits from './InfiniteHits';
import {describe, expect, test} from '@jest/globals';
describe('InfiniteHits', () => {
  const hits = [
    { objectID: '1', name: 'Hit 1', title: 'Title 1', genre: 'Genre 1', backdrop_path: 'url1' },
    { objectID: '2', name: 'Hit 2', title: 'Title 2', genre: 'Genre 2', backdrop_path: 'url2' },
    // Add more hits as needed for testing
  ];

  it('renders correctly', () => {
    const { getByText } = render(<InfiniteHits hits={hits} hasMore={true} refineNext={() => {}} />);
    
    // Example: Check if the title of the first hit is rendered
    const title1 = getByText('Title 1');
    expect(title1).toBeDefined();
  });

  it('triggers refineNext on end reached', () => {
    const refineNextMock = jest.fn();
    const { getByTestId } = render(<InfiniteHits hits={hits} hasMore={true} refineNext={refineNextMock} />);
    
    // Simulate reaching the end of the list
    fireEvent.scroll(getByTestId('flatList'), { nativeEvent: { contentOffset: { y: 100 } } });
    
    // Check if refineNextMock was called
    expect(refineNextMock).toHaveBeenCalled();
  });

  // Add more tests as needed to cover different aspects of your component
});

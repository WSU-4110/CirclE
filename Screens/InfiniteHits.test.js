import React from 'react';
import { render, fireEvent, pretty } from '@testing-library/react-native';
import InfiniteHits from './InfiniteHits';

// Mock the dependencies
jest.mock('react-instantsearch-native', () => ({
  ...jest.requireActual('react-instantsearch-native'),
  connectInfiniteHits: (Component) => Component, // Mock connectInfiniteHits
}));

// Mock FlatList in your test file
jest.mock('react-native/Libraries/Lists/FlatList', () => {
  const FlatList = () => null; // Mock FlatList component
  FlatList.displayName = 'FlatList'; // Add displayName to prevent warnings
  return FlatList;
});

// Your tests...

describe('InfiniteHits', () => {
  const hits = [
    { objectID: '1', name: 'Hit 1', title: 'Title 1', genre: 'Genre 1', backdrop_path: 'url1' },
    { objectID: '2', name: 'Hit 2', title: 'Title 2', genre: 'Genre 2', backdrop_path: 'url2' },
  ];

  it('renders the first item correctly', () => {
    const { getByText, root } = render(
      <InfiniteHits hits={hits} hasMore={true} refineNext={() => {}} />,
    );
  
    // Log the rendered component to the console for inspection
    console.log(pretty(root));
  
    // Example: Check if the title of the first hit is rendered
    const firstItemTitle = getByText('Title 1', { exact: false }); // Allow partial matches
    expect(firstItemTitle).toBeDefined();
  });
  
});

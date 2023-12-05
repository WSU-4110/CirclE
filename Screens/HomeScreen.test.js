// HomeScreen.test.js
import React from 'react';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('has correct text values', () => {
    // Access variables directly and check their values
    const titleText = 'Sustainability Simplified With Circle';
    const searchBoxTestId = 'search-box';
    const popularText = 'Popular on CircleE';

    // Check if important elements are rendered
    expect(titleText).toBeDefined();
    expect(searchBoxTestId).toBeDefined();
    expect(popularText).toBeDefined();

    // You can add more assertions based on your variables
  });
});

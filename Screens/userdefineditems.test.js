// UserDefinedItems.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native'; // Import waitFor

import UserDefinedItems from './userdefineditems';

describe('userDefinedItems', () => {
  it('adds a new item correctly', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<UserDefinedItems />);

    fireEvent.changeText(getByPlaceholderText('Add new item...'), 'New Item');
    fireEvent.changeText(getByPlaceholderText('Enter recycling location...'), 'Location 1');
    fireEvent.press(getByText('Add Item'));

    expect(queryByText('New Item')).toBeTruthy();
  });

it('deletes an item correctly', async () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<UserDefinedItems />);

  // Add an item first
  fireEvent.changeText(getByPlaceholderText('Add new item...'), 'Test Item');
  fireEvent.changeText(getByPlaceholderText('Enter recycling location...'), 'Test Location');
  fireEvent.press(getByText('Add Item'));

  await waitFor(() => expect(getByText('Test Item')).toBeTruthy());

  // Now delete the item
  fireEvent.press(getByText('Delete'));

  expect(queryByText('Test Item')).toBeNull();
});

  it('updates the selected category', () => {
    const { getByText } = render(<UserDefinedItems />);

    fireEvent.press(getByText('Electronics')); // Replace with actual category text if different

    // Assertions to check if the category has been updated
    // This depends on how the category change is reflected in your UI
  });


  it('resets categories correctly', () => {
    const { getByText } = render(<UserDefinedItems />);
    fireEvent.press(getByText('Reset Categories'));
    // Add assertions to check if the category reset works
  });

  it('increments item count correctly', () => {
    const { getByText } = render(<UserDefinedItems />);
    fireEvent.press(getByText('Increment Item Count'));
    expect(getByText('Item Count: 1')).toBeTruthy();
  });
});

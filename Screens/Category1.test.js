import React from 'react';
import { render } from '@testing-library/react-native';
import Category1 from './Category1';
import { act } from 'react-test-renderer';

// Mocking Firebase to avoid actual database calls during testing
jest.mock('./firebaseConfig', () => ({
  __esModule: true,
  default: {
    firestore: jest.fn(),
  },
}));

// Mocking Firebase's onSnapshot function
jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  collection: jest.fn(),
  onSnapshot: jest.fn(),
}));

describe('Category1', () => {
  it('renders correctly and fetches items from the database', async () => {
    // Mock data to simulate the querySnapshot
    const mockData = [
      { id: '1', name: 'Item 1', text: 'Description 1' },
      { id: '2', name: 'Item 2', text: 'Description 2' },
    ];

    // Mock onSnapshot to simulate the behavior when the data changes
    const onSnapshotMock = jest.fn().mockImplementationOnce((callback) => {
      act(() => {
        callback({
          docs: mockData.map((item) => ({
            id: item.id,
            data: () => ({ ...item }),
          })),
        });
      });
    });

    // Mock the collection method
    const collectionMock = jest.fn(() => ({
      onSnapshot: onSnapshotMock,
    }));

    // Set the mock for the collection
    jest.spyOn(require('firebase/firestore'), 'collection').mockImplementationOnce(collectionMock);

    // Render the component
    const { getByText, queryByText } = render(<Category1 />);

    // Wait for the asynchronous operations to complete
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Check if the component renders correctly
    expect(getByText('Electronic Items')).toBeDefined();

    // Check if the items are rendered
    mockData.forEach((item) => {
      expect(getByText(item.name)).toBeDefined();
      expect(getByText(item.text)).toBeDefined();
    });

    // Ensure that onSnapshot was called
    expect(onSnapshotMock).toHaveBeenCalled();
  });
});

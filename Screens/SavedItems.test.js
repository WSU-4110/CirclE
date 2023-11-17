// SavedItems.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import SavedItems from './SavedItems';

// Simplified mock for Firebase
jest.mock('firebase/compat/app', () => ({
  auth: () => ({
    currentUser: {
      uid: 'testUid'
    },
    changeAuthState: jest.fn(),
  }),
  database: jest.fn().mockReturnValue({
    ref: jest.fn().mockReturnValue({
      on: jest.fn((event, callback) => {
        callback({
          val: () => ({
            '1': { id: '1', liked: true },
            '2': { id: '2', liked: false }
          })
        });
        return { off: jest.fn() };
      }),
      set: jest.fn(),
      once: jest.fn(),
    }),
  }),
}));

describe('SavedItems', () => {
    it('should render liked items correctly', async () => {
      const { getByText } = render(<SavedItems />);
      await waitFor(() => {
        expect(getByText('Item ID: 1')).toBeTruthy();
      });
    });

});

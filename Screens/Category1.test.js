// Category1.test.js

import React from 'react';
import { render, fireEvent, waitFor} from '@testing-library/react-native';
import Category1 from './Category1'; // The path to your Category1 component
import firebase from 'firebase/compat/app';
import { Alert } from 'react-native';
import { getItemCount } from './Category1';

// Mock navigation
const navigation = {
  navigate: jest.fn(),
};

// Mock firebase firestore
jest.mock('firebase/compat/app', () => {
  return {
    firestore: jest.fn().mockReturnThis(),
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn(() => Promise.resolve({
      data: jest.fn().mockReturnValue({ dummyData: true }),
    })),
  };
});

describe('Category1', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Category1 navigation={navigation} />);
    expect(getByText('circl-E Eco Friendly recycle categories')).toBeTruthy();
  });

 
  it('renders each category item with correct text', () => {
    const { getByText } = render(<Category1 navigation={{}} />);
    expect(getByText('Health & Personal Care')).toBeTruthy();
    expect(getByText('Home Decor & Furnishings')).toBeTruthy();
    expect(getByText('Pets')).toBeTruthy();
    expect(getByText('Clothing & Accessories')).toBeTruthy();
  });
  

it('has a next page button', () => {
  const { getByText } = render(<Category1 navigation={{}} />);
  const nextPageButton = getByText('Next Page');
  expect(nextPageButton).toBeTruthy();
});

  it('calls Alert.alert on first page alert button press', () => {
    jest.spyOn(Alert, 'alert');
    const { getByText } = render(<Category1 navigation={navigation} />);
    const button = getByText('Previous');
    fireEvent.press(button);
    expect(Alert.alert).toHaveBeenCalledWith("Attention", "This is the first page!");
  });

  it('navigates to the next page on button press', () => {
    const { getByText } = render(<Category1 navigation={navigation} />);
    const button = getByText('Next Page');
    fireEvent.press(button);
    expect(navigation.navigate).toHaveBeenCalledWith('Category2');
  });


  it('renders VirtualizedList items correctly', () => {
    const { getByText } = render(<Category1 navigation={navigation} />);
    expect(getByText('Health & Personal Care')).toBeTruthy();
    expect(getByText('Home Decor & Furnishings')).toBeTruthy();
    expect(getByText('Pets')).toBeTruthy();
    expect(getByText('Clothing & Accessories')).toBeTruthy();
  });
 



  it('renders correct number of items in VirtualizedList', async () => {
    const { getAllByTestId } = render(<Category1 navigation={navigation} />);
    
    // 等待元素变得可用
    await waitFor(() => {
      expect(getAllByTestId('virtualized-item').length).toBe(getItemCount(null));
    });
  });
  






});

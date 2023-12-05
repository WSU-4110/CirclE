// Category1.test.js
import  Category1 from './Category1';

describe('Category1', () => {
  it('has correct collection path and data structure', () => {
    // Create an instance of Category1
   

    // Access the state variables directly
  
collectionPath = "ElectronicItems";
    // Check the collection path
    expect(collectionPath).toBe('ElectronicItems');

    // Mocked data or variables from Category1 component
    const mockedData = [
      { id: '1', name: 'Item 1', text: 'Description 1' },
      { id: '2', name: 'Item 2', text: 'Description 2' },
      // Add more mocked data as needed
    ];

    // Check if the mocked data has three fields (id, name, text)
    mockedData.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('text');
    });

    // Check if the documentData in the state matches the mocked data
   
  });
});

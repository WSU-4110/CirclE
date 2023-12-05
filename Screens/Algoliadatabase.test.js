import initializeAlgolia from './Algoliadatbase';

// Mocking algoliasearch to avoid actual API calls during testing




jest.mock('algoliasearch', () => {
  return () => ({
    initIndex: jest.fn(indexName => ({
      search: jest.fn(() => Promise.resolve({ hits: [{ objectID: '1', name: 'Test Item' }] })),
    })),
  });
});


describe('initializeAlgolia', () => {
  it('should initialize Algolia database correctly', () => {
    const { searchClient, indexName } = initializeAlgolia();

    // Ensure searchClient is initialized
    expect(searchClient).toBeDefined();
    
    // Ensure indexName is set correctly
    expect(indexName).toBe('Circle_data');
  });

  it('should retrieve items from Algolia', async () => {
    const { searchClient, indexName } = initializeAlgolia();
    
    // Replace this with your actual data retrieval logic
    console.log('searchClient:', searchClient);
console.log('indexName:', indexName);
    const hits = await searchClient.initIndex(indexName).search();
    
    
    // Add assertions to check if the data is as expected
   // Add assertions to check if the data is as expected
expect(hits.hits.length).toBe(1);
expect(hits.hits[0].name).toBe('Test Item');

  });
});

import algoliasearch from 'algoliasearch';


const initializeAlgolia = () => {
    const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c');
    const indexName = 'Circle_data'; // Replace with your actual index name
    return { searchClient, indexName };
  };
export default initializeAlgolia;

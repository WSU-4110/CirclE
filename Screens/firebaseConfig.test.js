// firebaseConfig.test.js
import { firebaseConfig } from './firebaseConfig';

describe('Firebase Configuration', () => {
  it('should have the correct Firebase configuration', () => {
    // Get the Firebase app configuration
    const options = firebaseConfig;

    // Check if the Firebase app has the expected configuration
    expect(options.apiKey).toBe('AIzaSyA-1_M8ZRIe6N-AgWKZwWsgtLOmVnLApjQ');
    expect(options.authDomain).toBe('circlee-a4b5d.firebaseapp.com');
    expect(options.databaseURL).toBe('https://circlee-a4b5d-default-rtdb.firebaseio.com/');
    expect(options.projectId).toBe('circlee-a4b5d');
    expect(options.storageBucket).toBe('circlee-a4b5d.appspot.com');
    expect(options.messagingSenderId).toBe('361381373341');
    expect(options.appId).toBe('1:361381373341:web:0838b1f671b92f56d2bb74');
    expect(options.measurementId).toBe('G-NGWS4NW9QB');
  });
});

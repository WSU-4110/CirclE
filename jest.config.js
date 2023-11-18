module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['@testing-library/react-native/dont-cleanup-after-each'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};

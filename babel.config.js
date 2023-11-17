// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true }],
    'module:metro-react-native-babel-preset',
  ],
  // Add these plugins if not already present
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
  ],
};

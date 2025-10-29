// apps/mobileApp/metro.config.js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * <https://reactnative.dev/docs/metro>
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    unstable_enableSymlinks: true, // this enable the use of Symlinks
    unstable_enablePackageExports: true,
    alias: {
      // Force Metro to use a single React instance from the mobile app
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    },
    // Explicitly resolve modules from the monorepo root and mobile app
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '../../node_modules'),
    ],
    // Ensure these packages are resolved from mobile app's node_modules
    resolverMainFields: ['react-native', 'browser', 'main'],
    platforms: ['ios', 'android', 'native'],
  },
  // this specifies the folder where are located the node_modules for the project
  watchFolders: [
    path.join(__dirname, '..', '..'),
    path.join(__dirname, '../../packages'),
  ],
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
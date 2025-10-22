# React Native Usage Example

```tsx
// App.tsx - React Native Application
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@ngunawan/ui/native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => console.log('Button pressed!')}
        style={styles.primaryButton}
        titleStyle={styles.primaryButtonText}
      >
        Primary Action
      </Button>
      
      <Button
        onPress={() => console.log('Secondary button pressed!')}
        style={styles.secondaryButton}
        titleStyle={styles.secondaryButtonText}
      >
        Secondary Action
      </Button>
      
      <Button
        disabled
        style={styles.disabledButton}
      >
        Disabled Button
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 200,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 200,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 200,
  },
});

export default App;
```

## Metro Configuration

For React Native projects, you may need to configure Metro to resolve the package correctly:

```js
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for resolving .native.tsx files
config.resolver.platforms = ['native', 'ios', 'android', 'web'];

module.exports = config;
```
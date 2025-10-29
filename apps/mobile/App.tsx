/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Button } from "@ngunawan/ui/native";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
 <View style={styles.buttonContainer}>
        <Button onPress={() => console.log('Button pressed!')}>
          Hello from @ngunawan/ui/native
        </Button>
        <Button 
          onPress={() => console.log('Second button pressed!')}
          disabled
          style={styles.disabledButton}
        >
          Disabled Button
        </Button>
      </View>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 20,
    gap: 10,
  },
  disabledButton: {
    marginTop: 10,
  },
});

export default App;

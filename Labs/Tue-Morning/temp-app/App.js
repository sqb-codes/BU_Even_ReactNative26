import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { styles } from './app.styles';
import city from './assets/city.jpg';

export default function App() {
  return (
    <ImageBackground 
      source={city} 
      style={styles.backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text>Temperature Conversion App</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

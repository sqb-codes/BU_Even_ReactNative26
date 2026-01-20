import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { styles } from './app.styles';
import city from './assets/city.jpg';
import { Input } from './components/Input';
import { DisplayTemp } from './components/DisplayTemp';
import { useState } from 'react';

export default function App() {

  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C")

  return (
    <ImageBackground 
      source={city} 
      style={styles.backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>Temperature Conversion App</Text>
          </View>
          <View>
            <DisplayTemp
              temperature={inputValue}
              unit={currentUnit}
            />
          </View>
          <View>
            <Input 
              defaultValue={0}
              unit={currentUnit}
              onChange={setInputValue}
              />
          </View>
          <View>
            <Text>Convert</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

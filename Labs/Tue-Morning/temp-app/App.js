import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { styles } from './app.styles';
import city from './assets/city.jpg';
import { Input } from './components/Input';
import { DisplayTemp } from './components/DisplayTemp';
import { useState } from 'react';
import { convertTemp, getUnitToggle } from './utils/temperature';
import { ConvertButton } from './components/ConvertButton';

export default function App() {

  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");

  const toggleUnit = getUnitToggle(currentUnit);

  function getConvertedTemp() {
    if(isNaN(inputValue)) {
      return "";
    } else {
      return convertTemp(inputValue, toggleUnit).toFixed(1);
    }
  }

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
              temperature={getConvertedTemp()}
              unit={toggleUnit}
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
            <ConvertButton
              unit={currentUnit}
              onPress={() => setCurrentUnit(toggleUnit)}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

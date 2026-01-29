import { ImageBackground } from 'react-native';
import { styles } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import city_bg from "./assets/city_bg.jpg";
import { Header } from './components/Header';
import { Input } from './components/Input';
import { useState } from 'react';
import { DisplayTemp } from './components/DisplayTemp';
import { convertTemp, toggleUnit } from './utils/tempConvert';
import { ToggleButton } from './components/ToggleButton';

export default function App() {

  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");

  const getOppUnit = toggleUnit(currentUnit);

  function getConvertedTemp() {
    if(isNaN(inputValue)) {
      return "";
    } else {
      return convertTemp(inputValue, getOppUnit).toFixed(1);
    }
  }

  return (

    <ImageBackground
      style={styles.bg_styles}
      source={city_bg}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          
          {/* Header Component */}
            <Header/>

          {/* Display Temp Component */}
            <DisplayTemp
              unit={getOppUnit}
              temp={getConvertedTemp()}
            />

          {/* Input Component */}
            <Input 
              defaultValue={0}
              onChange={setInputValue}
              />

            {/* Convert Button */}
            <ToggleButton
              unit={currentUnit}
              onPress={() => {
                setCurrentUnit(getOppUnit)
              }}
            />
        
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

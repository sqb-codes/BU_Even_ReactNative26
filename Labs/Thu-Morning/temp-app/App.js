import { Text, View, ImageBackground } from 'react-native';
import { styles } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import city_bg from "./assets/city_bg.jpg";
import { Header } from './components/Header';
import { Input } from './components/Input';

export default function App() {
  return (

    <ImageBackground
      style={styles.bg_styles}
      source={city_bg}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          
          {/* Header Component */}
            <Header/>

          {/* Input Component */}
            <Input/>
        
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

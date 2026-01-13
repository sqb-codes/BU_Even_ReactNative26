import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.section1}>
        <Text>This is my first React Native App!</Text>
        <Button
          title="Press me"
          onPress={() => console.log("Button pressed!")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section1: {
    flex: 1,
    backgroundColor: '#ddeeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

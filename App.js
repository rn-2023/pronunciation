import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [words, setWords] = useState('');

  const speak = () => {
    Speech.speak(words);
    setWords('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={words} 
        onChangeText={text => setWords(text)}
        placeholder='Text here' />
      <Button onPress={speak} title="Speak"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
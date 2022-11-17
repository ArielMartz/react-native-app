import React from 'react';
import { StyleSheet, Text, Alert, TouchableNativeFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <TouchableNativeFeedback
    onPress={() => Alert.alert('Hemos tocado el boton')}>
      
      <Text>Hola Mundo</Text>
    </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

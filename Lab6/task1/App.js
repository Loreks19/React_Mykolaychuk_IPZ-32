import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';  // Імпортуємо Footer компонент

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Little Lemon</Text>
      {/* Інший контент вашого додатка */}
      
      <Footer />  {/* Викликаємо компонент Footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
});

export default App;
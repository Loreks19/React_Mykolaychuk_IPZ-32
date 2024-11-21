import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Усі права захищені Little Lemon, 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Footer;
import { StyleSheet, Text } from 'react-native';
import React from 'react';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 12,
  },
});
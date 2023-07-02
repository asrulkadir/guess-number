import { StyleSheet, Text, Platform } from 'react-native';
import React from 'react';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: '#ffffff',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

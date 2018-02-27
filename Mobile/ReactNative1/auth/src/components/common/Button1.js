import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button1 = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonBox}>
    <Text style={styles.buttonText}>
       { children }
    </Text>
  </TouchableOpacity>
);

const styles = {
  buttonBox: {
    flex: 1,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFA500',
  },
  buttonText: {
    fontWeight: '600',
    color: '#FFA500',
    paddingTop: 5,
    paddingBottom: 5,
  }
};

export { Button1 };

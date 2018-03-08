import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button1 = ({ onPress, color, children }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.buttonBox, {
      backgroundColor: color,
      borderColor: color
    }]}
  >
    <Text style={styles.buttonText}>
       { children }
    </Text>
  </TouchableOpacity>
);

const styles = {
  buttonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: '600',
    color: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
  }
};

export { Button1 };

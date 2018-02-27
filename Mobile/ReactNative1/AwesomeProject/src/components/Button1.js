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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#841584',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#841584',
  },
  buttonText: {
    fontWeight: '600',
    color: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
  }
};

export default Button1;

//Imporrt libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make BrandHeader Component
const AppHeader = (props) => (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
);

//STYLES//
const styles = {
  viewStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: '500',
    color: '#000000',
    fontStyle: 'italic'
  }
};

//Make component available to app.js (export)
export { AppHeader };

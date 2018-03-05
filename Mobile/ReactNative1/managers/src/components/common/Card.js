import React from 'react';
import { View } from 'react-native';

//CARD component that applies the style to all it s childs !!, accesses passed
//components as props.children
const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

//applies all the styling to the components rendered inside of it
//that means everything inside props.children.
const styles = {
  containerStyle: {
    //borders
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    //shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    //margins
    marginBottom: 15,
  }
};

export { Card };

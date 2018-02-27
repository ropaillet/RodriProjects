import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#EEEEEE',
    paddingLeft: 2,
    paddingRight: 2,
  }
};

export { CardSection };

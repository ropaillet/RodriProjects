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
    borderColor: '#ddd',
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2
  }
};

export { CardSection };

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner1 = ({ size }) => (
    <View style={styles.spinnerContStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
);

const styles = {
  spinnerContStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner1 };

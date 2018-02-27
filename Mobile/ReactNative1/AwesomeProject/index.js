//import a library of elements to create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import AppHeader from './src/components/AppHeader';
import AlbumList from './src/components/AlbumList';

//build the actual Component
const App = () => (
    <View style={{ flex: 1 }}>
      <AppHeader headerText={'The Taylor Gallery'} />
      <AlbumList />
    </View>
);

//tel react when and how to show it on device screen (render)
AppRegistry.registerComponent('AwesomeProject', () => App);

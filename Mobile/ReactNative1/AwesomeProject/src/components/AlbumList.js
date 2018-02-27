import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albumsState: [] };

//Fetch data promises
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(responseJson => this.setState({ albumsState: responseJson }));
  }

  //define a render albums method to render list based on state, then call it
  //in the traditional component render as JSX.
  renderAlbums() {
    return this.state.albumsState.map(album =>
      <View>
        <AlbumDetail key={album.title} album={album} />
      </View>
    );
  }

  //render, gets initialized whenever state is updated.
  render() {
    //console.log(`State2 :'${this.state.albumsState}`);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

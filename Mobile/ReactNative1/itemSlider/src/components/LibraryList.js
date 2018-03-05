import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {
  //Run the renderItem method for each Item passed, which calls
  //a functional component and passes the library prop
  renderItem(library) {
      return <ListItem library={library.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={(library) => library.id.toString()}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);

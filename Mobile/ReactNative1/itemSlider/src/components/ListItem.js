import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback,
         NativeModules, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);

//functional component that renders a view with title and desc
class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  expandItem() {
    const { library, shouldExpand } = this.props;
    if (shouldExpand) {
      return (
        <Text style={styles.descriptionStyle}>
          {library.description}
        </Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;
    return (
    <TouchableWithoutFeedback
      onPress={() => this.props.selectLibrary(id)}
    >
      <View style={styles.containerStyle}>
        <Text style={styles.headerStyle}>
          {title}
        </Text>
        {this.expandItem()}
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#ddd',
    elevation: 1,
    padding: 4
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 15
  },
  descriptionStyle: {
    fontStyle: 'italic'
  }
};

const mapStateToProps = (state, ownProps) => {
  const shouldExpand = state.selectedLibrary === ownProps.library.id;
  return { shouldExpand };
};

export default connect(mapStateToProps, actions)(ListItem);

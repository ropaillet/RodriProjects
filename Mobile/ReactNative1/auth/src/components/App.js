import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { AppHeader, CardSection, Button1, Spinner1 } from './common';
import LoginForm from './LoginForm';

class App extends Component {
  //initialize a component level state loggedin that defaults to null.
  // so we can check in the meantime if the user is authenticated with
  //firebase.
  state = { loggedIn: null }

  componentWillMount() {
    //call firebase initialization and pass keys as web setup object
    //specified in firebase web.
    firebase.initializeApp({
      apiKey: 'AIzaSyAzvFuWzBqRZ8cN8GyhoLLqKmB0Xws7VtY',
      authDomain: 'auth-trial-3278f.firebaseapp.com',
      databaseURL: 'https://auth-trial-3278f.firebaseio.com',
      projectId: 'auth-trial-3278f',
      storageBucket: 'auth-trial-3278f.appspot.com',
      messagingSenderId: '830119155674'
    });

    //firebase callback that is triggered when user state changes.
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  //checks if user is auth by looking at state, if so show only a button
  // to enable log out, if not render the form to login /register.
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button1 onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button1>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner1 size='large' />
          </View>
        );
    }
  }
  //Render //
  render() {
    return (
      <View>
        <AppHeader headerText="Amigos da Tartara" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

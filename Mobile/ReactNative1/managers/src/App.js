import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component {
  //firebase initialization
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD3vK9usdwY-R73oeg2XteOHHtlqsxd63Y',
      authDomain: 'managers-2a0e0.firebaseapp.com',
      databaseURL: 'https://managers-2a0e0.firebaseio.com',
      projectId: 'managers-2a0e0',
      storageBucket: 'managers-2a0e0.appspot.com',
      messagingSenderId: '879998274161'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;

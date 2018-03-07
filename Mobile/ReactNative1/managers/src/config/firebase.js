import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD3vK9usdwY-R73oeg2XteOHHtlqsxd63Y',
  authDomain: 'managers-2a0e0.firebaseapp.com',
  databaseURL: 'https://managers-2a0e0.firebaseio.com',
  projectId: 'managers-2a0e0',
  storageBucket: 'managers-2a0e0.appspot.com',
  messagingSenderId: '879998274161'
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

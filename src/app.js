import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7d7fzCKuu-_4ZSDkS6P5YFqqPJ8oVvbg',
      authDomain: 'auth-6f223.firebaseapp.com',
      databaseURL: 'https://auth-6f223.firebaseio.com',
      projectId: 'auth-6f223',
      storageBucket: 'auth-6f223.appspot.com',
      messagingSenderId: '1078562731675'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

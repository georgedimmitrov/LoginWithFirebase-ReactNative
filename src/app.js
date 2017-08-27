import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7d7fzCKuu-_4ZSDkS6P5YFqqPJ8oVvbg',
      authDomain: 'auth-6f223.firebaseapp.com',
      databaseURL: 'https://auth-6f223.firebaseio.com',
      projectId: 'auth-6f223',
      storageBucket: 'auth-6f223.appspot.com',
      messagingSenderId: '1078562731675'
    });

    // On user sign-in or sign-out we call this method
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else { 
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

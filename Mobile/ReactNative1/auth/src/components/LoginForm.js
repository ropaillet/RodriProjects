import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button1, Input, Spinner1 } from './common';

//Card with 3 Sections : user email, pswd and login button.
class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  //handle firebase sign in when button press.
  onButtonPress() {
    //reset form error message if password is ok (in state) and set loading
    this.setState({ error: '', loading: true });
    //Attempt to sign in, if fails try to create account
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          //if registration success, reset form and stop spinner
          .then(this.onLoginSuccess.bind(this))
          //if registration fails, show error and stop spinner
          .catch(this.onLoginFailed.bind(this));
      });
  }
  onLoginSuccess() {
    this.setState({
        email: '',
        password: '',
        error: '',
        loading: false
      });
  }
  onLoginFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }
  //If loading, show spinner. Otherwise show button base on loading state
  // value.
  condRenderButton() {
    if (this.state.loading) {
      return <Spinner1 size='small' />;
    }
    return (
      <Button1 onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button1>
    );
  }

  //render the component
  render() {
    return (
        <Card>
          <CardSection>
            <View>
              <Image
                style={styles.loginImage}
                resizeMethod={'scale'}
                source={require('../../assets/img/tartara.jpeg')}
              />
            </View>

          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={false}
              autoCorrect={false}
              label="Email :"
              placeholder="user@gmail.com"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              autoCorrect={false}
              label="Password :"
              placeholder="password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this.condRenderButton()}
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 19,
    color: 'red',
    alignSelf: 'center'
  },
  loginImage: {
    height: 400,
    flex: 0,
  }
};

export default LoginForm;

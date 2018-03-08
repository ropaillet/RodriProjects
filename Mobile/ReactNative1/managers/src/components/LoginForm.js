import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, pwdChanged, loginUser, logoutUser } from '../actions';
import { Card, CardSection, Input, Button1, Spinner1 } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPwdChange(text) {
    this.props.pwdChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onLogOutPress() {
    this.props.logoutUser();
  }

  loginError() {
    if (this.props.error.message) {
      return (
        <View>
            <Text style={styles.errorText}>
              {this.props.error.message}
            </Text>
        </View>
      );
    }
    if (this.props.error === 'Logged In') {
      return (
        <View>
            <Text style={styles.errorText}>
              {this.props.error}
            </Text>
        </View>
      );
    }
  }

  buttonOrSpinner() {
    if (this.props.loginProcessing) {
      return <Spinner1 size='large' />;
    }
    if (!this.props.user) {
      return (
        <Button1
          onPress={this.onButtonPress.bind(this)}
          color='green'
        >
          Log In
        </Button1>
      );
    }
    if (this.props.user) {
      return (
        <Button1
          onPress={this.onLogOutPress.bind(this)}
          color='red'
        >
          Log Out
        </Button1>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email :'
            placeholder='ropaillet@gmail.com'
            autoCorrect={false}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password :"
            placeholder="password"
            autoCorrect={false}
            secureTextEntry
            onChangeText={this.onPwdChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.loginError()}
        <CardSection>
          {this.buttonOrSpinner()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loginProcessing: state.auth.loginProcessing
  };
};

export default connect(mapStateToProps, {
  emailChanged, pwdChanged, loginUser, logoutUser
})(LoginForm);

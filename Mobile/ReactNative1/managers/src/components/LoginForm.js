import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, pwdChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button1 } from './common';

class LoginForm extends Component {
  //Call action creators
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPwdChange(text) {
    this.props.pwdChanged(text);
  }

  onButtonPress() {
    const { email, pwd } = this.props;
    this.props.loginUser({ email, pwd });
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
            value={this.props.pwd}
          />
        </CardSection>

        <CardSection>
            <Button1 onPress={this.onButtonPress.bind(this)}>
              Log In
            </Button1>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    email: state.auth.email,
    pwd: state.auth.pwd,
    user: state.auth.user
  };
};

export default connect(mapStateToProps,
  { emailChanged, pwdChanged, loginUser })(LoginForm);

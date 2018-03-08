import firebase from '../config/firebase';
import {
  EMAIL_CHANGED,
  PWD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_PROCESSING,
  LOGOUT_USER
}
from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const pwdChanged = (text) => {
  return {
    type: PWD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_PROCESSING });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((error) => loginFailed(dispatch, error));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_PROCESSING });
    firebase.auth().signOut()
      .then(() => {
        dispatch({ type: LOGOUT_USER });
      });
    };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
};

const loginFailed = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: error
   });
};

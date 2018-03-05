import {
  EMAIL_CHANGED,
  PWD_CHANGED,
  LOGIN_SUCCESS
} from '../actions/types';

//initial initialization value of form and state set to nothing
// for both pieces of state that this reducer produces
const initState = { email: '', pwd: '', loginSuccess: '' };

export default (state = initState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PWD_CHANGED:
      return { ...state, pwd: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

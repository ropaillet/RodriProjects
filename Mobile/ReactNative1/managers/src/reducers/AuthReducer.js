import {
  EMAIL_CHANGED,
  PWD_CHANGED,
  LOGIN_PROCESSING,
  LOGIN_SUCCESS,
  LOGIN_USER_FAILED,
} from '../actions/types';

//initial initialization value of form and state set to nothing
// for both pieces of state that this reducer produces
const initState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loginProcessing: false
 };

export default (state = initState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PWD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_PROCESSING:
      return { ...state, error: '', loginProcessing: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...initState,
        user: action.payload,
        error: 'Logged In',
     };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        ...initState,
        error: action.payload,
      };
    default:
      return state;
  }
};

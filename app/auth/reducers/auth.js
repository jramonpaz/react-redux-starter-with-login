import * as types from '../constants/authConstants';

const initialState = {loggedIn:false};

export default function Auth(state = initialState, action) {
  switch(action.type) {
  case types.LOGIN_SUCCESS:
    return Object.assign({}, state, {loggedIn:true});
  case types.ACCOUNT_CONFIRMATION_SUCCESS:
    return Object.assign({}, state, {});
  case types.PASSWORD_SET_SUCCCESS:
    return Object.assign({}, state, initialState);
  default:
    return state;
  }
}

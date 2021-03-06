import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => (dispatch) => {
  APIUtil.login(user);
};

export const logout = () => (dispatch) => {
  APIUtil.logout();
};

export const signup = (user) => (dispatch) => {
  APIUtil.signup(user);
};

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

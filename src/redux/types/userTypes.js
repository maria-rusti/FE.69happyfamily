export const LOG_IN_USER_REQUEST = 'LOG_IN_USER_REQUEST';
export const LOG_IN_USER_SUCCESS = 'LOG_IN_USER_SUCCESS';
export const LOG_IN_USER_FAILURE = 'LOG_IN_USER_FAILURE';
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

export const loginUserRequest = () => {
  return {
    type: LOG_IN_USER_REQUEST
  };
};

export const loginUserSuccess = (payload) => {
  return {
    type: LOG_IN_USER_SUCCESS,
    payload: payload
  };
};

export const loginUserFailure = (payload) => {
  return {
    type: LOG_IN_USER_FAILURE,
    payload: payload
  };
};

export const logoutUserRequest = () => {
  return {
    type: LOGOUT_USER_REQUEST
  };
};

export const logoutUserSuccess = (payload) => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: payload
  };
};

export const logoutUserFailure = (payload) => {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: payload
  };
};

export const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST
  };
};

export const registerUserSuccess = (payload) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: payload
  };
};

export const registerUserFailure = (payload) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: payload
  };
};
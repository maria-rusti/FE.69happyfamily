import { userUrl } from '../../utils/constants';
import {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  logoutUserFailure,
  logoutUserRequest,
  logoutUserSuccess,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess
} from '../types/userTypes';
import axios from 'axios';

export const loginUser = (userName, password) => {
  return (dispatch) => {
    dispatch(loginUserRequest());
    axios
      .post(`${userUrl}users/login`, {
        userName: userName,
        password: password
      })
      .then((response) => {
        const data = response?.data;
        dispatch(loginUserSuccess(data));
      })
      .catch((error) => dispatch(loginUserFailure(error)));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutUserRequest());
    try {
      dispatch(logoutUserSuccess());
    } catch (error) {
      dispatch(logoutUserFailure(error));
    }
  };
};

export const registerUser = (userName, password, age) => {
  return (dispatch) => {
    dispatch(registerUserRequest());
    axios
      .post(`${userUrl}users/register`, {
        userName: userName,
        password: password,
        age: Number(age)
      })
      .then((response) => {
        const data = response?.data;
        dispatch(registerUserSuccess(data));
      })
      .catch((error) => dispatch(registerUserFailure(error)));
  };
};

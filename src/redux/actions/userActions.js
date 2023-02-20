import { userUrl } from "../../utils/constants";
import { loginUserFailure, loginUserRequest, loginUserSuccess, logoutUserFailure, logoutUserRequest, logoutUserSuccess, registerUserFailure, registerUserRequest, registerUserSuccess } from "../types/userTypes";
import axios from "axios";

export const loginUser = (userName, password) => {
  return (dispatch) => {
    dispatch(loginUserRequest());
    axios
      .post(`${userUrl}/login`, {
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
      dispatch(logoutUserFailure(error))
    };
  };
}

export const registerUser = (userName, password) => {
  return (dispatch) => {
    dispatch(registerUserRequest());
    axios
      .post(`${userUrl}/register`, {
        userName: userName,
        password: password
      })
      .then((response) => {
        const data = response?.data;
        dispatch(registerUserSuccess(data));
      })
      .catch((error) => dispatch(registerUserFailure(error)));
  };
};


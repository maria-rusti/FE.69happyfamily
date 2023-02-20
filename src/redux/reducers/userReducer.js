import { LOGOUT_USER_FAILURE, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOG_IN_USER_FAILURE, LOG_IN_USER_REQUEST, LOG_IN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../types/userTypes";

const initialState = {
    userName: '',
    loading: false,
    isLoggedIn: false,
    hasErrors: {
        message: '',
        error: false
    }
}


export const userReducer = (state = initialState, action) => {
    switch (action?.type) {
        case LOG_IN_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOG_IN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                username: action?.payload,
                isLoggedIn: true,
                hasErrors: {
                    message: '',
                    error: false
                }
            };
        case LOG_IN_USER_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                hasErrors: {
                    message: action?.payload?.message,
                    error: true
                }
            };
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                username: action?.payload,
                hasErrors: {
                    message: '',
                    error: false
                }
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                hasErrors: {
                    message: action?.payload?.message,
                    error: true
                }
            };
        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                hasErrors: {
                    message: '',
                    error: false
                }
            };
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                isLoggedIn: true,
                loading: false,
                hasErrors: {
                    message: action?.payload?.message,
                    error: true
                }
            };
        default:
            return state;
    }
};

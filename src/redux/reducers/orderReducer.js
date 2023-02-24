import { GET_ORDER_PRODUCTS_FAILURE, GET_ORDER_PRODUCTS_REQUEST, GET_ORDER_PRODUCTS_SUCCESS, ORDER_PRODUCTS_FAILURE, ORDER_PRODUCTS_REQUEST, ORDER_PRODUCTS_SUCCESS } from "../types/orderTypes";

const initialState = {
    orderedProducts: [],
    loading: false,
    hasErrors: {
        message: '',
        error: false
    }
};

export const orderReducer = (state = initialState, action) => {
    switch (action?.type) {
        case GET_ORDER_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_ORDER_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                orderedProducts: action?.payload === state.orderedProducts ? state.orderedProducts : [...action?.payload],
                hasErrors: {
                    message: '',
                    error: false
                }
            };
        case GET_ORDER_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                hasErrors: {
                    message: action?.payload?.message,
                    error: true
                }
            };
        case ORDER_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ORDER_PRODUCTS_SUCCESS:
            const data = state.orderedProducts.push(action?.payload)
            return {
                ...state,
                loading: false,
                orderedProducts: data,
                hasErrors: {
                    message: '',
                    error: false
                }
            };
        case ORDER_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                hasErrors: {
                    message: action?.payload?.message,
                    error: true
                }
            };
        default:
            return state;
    }
}
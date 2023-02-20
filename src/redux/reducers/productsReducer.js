import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from '../types/productsTypes';

const initialState = {
  products: [],
  loading: false,
  hasErrors: {
    message: '',
    error: false
  }
};

export const productsReducer = (state = initialState, action) => {
  switch (action?.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action?.payload === state.products ? state.products : [...action?.payload],
        hasErrors: {
          message: '',
          error: false
        }
      };
    case GET_PRODUCTS_FAILURE:
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
};

import { removeProduct } from '../actions/cartActions';
import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS
} from '../types/cartTypes';

const initialState = {
  cartProducts: [],
  loading: false,
  hasErrors: {
    message: '',
    error: false
  }
};

const handleCartProduct = (product, cartProducts, type) => {
  let productExists = false;
  let cartState = [...cartProducts];
  cartState.map((item) => {
    if (item._id === product._id) {
      productExists = true;
      if (type === 'plus') {
        item.quantity++;
      }
      if (type === 'minus') {
        item.quantity--;
      }
    }
  });

  if (productExists === false) {
    cartState.push({ ...product, quantity: 1 });
  }

  return cartState;
};

export const cartReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_SUCCESS:
      const updatedProductsPlus =
        action?.payload === state.cartProducts
          ? state.cartProducts
          : [...handleCartProduct(action.payload, state.cartProducts, 'plus')];
      return {
        ...state,
        loading: false,
        cartProducts: [...updatedProductsPlus],
        hasErrors: {
          message: '',
          error: false
        }
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          message: action?.payload?.message,
          error: true
        }
      };
    case REMOVE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        cartProducts:
          action?.payload === state?.cartProducts
            ? state?.cartProducts
            : state?.cartProducts.filter((item) => item !== action?.payload),
        hasErrors: {
          message: '',
          error: false
        }
      };
    case REMOVE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          message: action?.payload?.message,
          error: true
        }
      };
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_PRODUCT_SUCCESS:
      const updatedProductsMinus =
        action?.payload === state.cartProducts
          ? state.cartProducts
          : [...handleCartProduct(action.payload, state.cartProducts, 'minus')];
      return {
        ...state,
        loading: false,
        cartProducts: [...updatedProductsMinus],
        hasErrors: {
          message: '',
          error: false
        }
      };
    case UPDATE_PRODUCT_FAILURE:
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

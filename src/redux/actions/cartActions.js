import {
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  removeProductRequest,
  removeProductSuccess,
  removeProductFailure
} from '../types/cartTypes';

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch(addProductRequest(product));
    try {
      dispatch(addProductSuccess(product));
    } catch {
      dispatch(addProductFailure());
    }
  };
};

export const removeProduct = (product) => {
  return (dispatch) => {
    dispatch(removeProductRequest());
    try {
      dispatch(removeProductSuccess(product));
    } catch (error) {
      dispatch(removeProductFailure(error));
    }
  };
};

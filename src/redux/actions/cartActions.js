import {
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  removeProductRequest,
  removeProductSuccess,
  removeProductFailure,
  updateProductSuccess,
  updateProductRequest,
  updateProductFailure
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
export const updatedProduct = (product) => {
  return (dispatch) => {
    dispatch(updateProductRequest());
    try {
      dispatch(updateProductSuccess(product));
    } catch (error) {
      dispatch(updateProductFailure(error));
    }
  };
};

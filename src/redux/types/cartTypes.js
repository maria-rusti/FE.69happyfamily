export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const REMOVE_PRODUCT_REQUEST = 'REMOVE_PRODUCT_REQUEST';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_FAILURE = 'REMOVE_PRODUCT_FAILURE';

export const addProductRequest = () => {
  return {
    type: ADD_PRODUCT_REQUEST
  };
};

export const addProductSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: payload
  };
};

export const addProductFailure = () => {
  return {
    type: ADD_PRODUCT_FAILURE
  };
};
export const removeProductRequest = () => {
  return {
    type: REMOVE_PRODUCT_REQUEST
  };
};

export const removeProductSuccess = (payload) => {
  return {
    type: REMOVE_PRODUCT_SUCCESS,
    payload: payload
  };
};

export const removeProductFailure = (payload) => {
  return {
    type: REMOVE_PRODUCT_FAILURE,
    payload: payload
  };
};

export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const REMOVE_PRODUCT_REQUEST = 'REMOVE_PRODUCT_REQUEST';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_FAILURE = 'REMOVE_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUES';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';

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
export const updateProductRequest = () => {
  return {
    type: UPDATE_PRODUCT_REQUEST
  };
};

export const updateProductSuccess = (payload) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: payload
  };
};

export const updateProductFailure = (payload) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: payload
  };
};

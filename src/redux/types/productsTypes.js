export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST
  };
};

export const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: payload
  };
};

export const getProductsFailure = (payload) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: payload
  };
};

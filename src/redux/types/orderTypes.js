export const ORDER_PRODUCTS_REQUEST = 'ORDER_PRODUCTS_REQUEST';
export const ORDER_PRODUCTS_SUCCESS = 'ORDER_PRODUCTS_SUCCESS';
export const ORDER_PRODUCTS_FAILURE = 'ORDER_PRODUCTS_FAILURE';
export const GET_ORDER_PRODUCTS_REQUEST = 'GET_ORDER_PRODUCTS_REQUEST';
export const GET_ORDER_PRODUCTS_SUCCESS = 'GET_ORDER_PRODUCTS_SUCCESS';
export const GET_ORDER_PRODUCTS_FAILURE = 'GET_ORDER_PRODUCTS_FAILURE';

export const orderProductsRequest = () => {
  return {
    type: ORDER_PRODUCTS_REQUEST
  };
};

export const orderProductsSuccess = (payload) => {
  return {
    type: ORDER_PRODUCTS_SUCCESS,
    payload: payload
  };
};

export const orderProductsFailure = (payload) => {
  return {
    type: ORDER_PRODUCTS_FAILURE,
    payload: payload
  };
};


export const getOrderProductsRequest = () => {
  return {
    type: GET_ORDER_PRODUCTS_REQUEST
  };
};

export const getOrderProductsSuccess = (payload) => {
  return {
    type: GET_ORDER_PRODUCTS_SUCCESS,
    payload: payload
  };
};

export const getOrderProductsFailure = (payload) => {
  return {
    type: GET_ORDER_PRODUCTS_FAILURE,
    payload: payload
  };
};

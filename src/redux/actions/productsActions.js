import axios from 'axios';
import { getProductsFailure, getProductsRequest, getProductsSuccess } from '../types/productsTypes';
import { productsUrl } from '../../utils/constants';

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch(getProductsRequest());
    axios
      .get(`${productsUrl}/show`)
      .then((response) => {
        const data = response?.data?.products;
        dispatch(getProductsSuccess(data));
      })
      .catch((error) => dispatch(getProductsFailure(error)));
  };
};

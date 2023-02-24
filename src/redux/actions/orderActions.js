import axios from "axios"
import { ordersUrl } from "../../utils/constants"
import { getOrderProductsFailure, getOrderProductsRequest, getOrderProductsSuccess, orderProductsFailure, orderProductsRequest, orderProductsSuccess } from "../types/orderTypes"

export const orderProducts = (products, client) => {
    return (dispatch) => {
        dispatch(orderProductsRequest())
        axios
            .post(`${ordersUrl}/create`, {
                client: client,
                products: products
            })
            .then((response) => {
                const data = response?.data;
                dispatch(orderProductsSuccess(data));
            })
            .catch((error) => dispatch(orderProductsFailure(error)));
    }

}
export const getOrderProducts = () => {
    return (dispatch) => {
        dispatch(getOrderProductsRequest());
        axios
            .get(`${ordersUrl}/show`)
            .then((response) => {
                const data = response?.data?.orders;
                dispatch(getOrderProductsSuccess(data));
            })
            .catch((error) => dispatch(getOrderProductsFailure(error)));
    };
};

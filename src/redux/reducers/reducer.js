import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { orderReducer } from './orderReducer';

const reducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  userState: userReducer,
  orderState: orderReducer
});

export default reducer;

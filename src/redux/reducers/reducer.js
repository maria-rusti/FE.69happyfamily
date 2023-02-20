import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';

const reducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  userState: userReducer
});

export default reducer;

import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/Cart/cartSlice';
import { modalReducer } from './features/Modal/modalSlice';
// import "./Cart/Cart.reducer"

export const store = configureStore({
  reducer: {
    /* 
    The obj key here will be the name of the state
    object that will hold the data coming from 
    our reducer
    */
    mobilePhonesCart: cartReducer,
    modalVisibility: modalReducer
  }
})
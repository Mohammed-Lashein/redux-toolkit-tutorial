import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Cart/Cart.reducer';
import { modalReducer } from './Modal/Modal.reducer';
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
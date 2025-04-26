import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  // for implementing basic suspence on fetching from the api
  isLoading: false
}

const cartSlice = createSlice({
  name: 'myCart',
  initialState
})
console.log(cartSlice);

export const cartReducer = cartSlice.reducer
 

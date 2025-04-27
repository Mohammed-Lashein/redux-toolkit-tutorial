import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  // for implementing basic suspence on fetching from the api
  isLoading: false
}

const cartSlice = createSlice({
  // generated action types will use that name as a prefix 
  name: 'myCart',
  initialState
})
console.log('### This is cart slice ###');

console.log(cartSlice);

export const cartReducer = cartSlice.reducer
 

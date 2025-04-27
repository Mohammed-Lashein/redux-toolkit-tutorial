import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';


const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  // for implementing basic suspence on fetching from the api
  isLoading: false
}

const cartSlice = createSlice({
  // generated action types will use that name as a prefix 
  // like : myCart/clearCart
  name: 'myCart',
  initialState,
  reducers: {
    clearCart: (store) => {
      console.log("### Cart was cleared ! ###");
      
      store.mobilePhonesCart = []
    }
  }
})
console.log('### This is cart slice ###');

console.log(cartSlice);


export const cartReducer = cartSlice.reducer
// This is an action creator
export const {clearCart} = cartSlice.actions
 

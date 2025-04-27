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
      // We can mutate the state directly because behind the scenes immer takes
      // care of returning a new copy of the state
      store.cartItems = []
      console.log(store.cartItems);
    },
    removeItem: (store, {payload}) => {
      const cartItems = store.cartItems.filter((item) => item.id !== payload)
      store.cartItems = cartItems
    },
    increaseItemQty: (store, {payload}) => {
      const item = store.cartItems.find((item) => item.id === payload)
      item.amount = item.amount + 1
    },
    decreaseItemQty: (store, {payload}) => {
      const item = store.cartItems.find((item) => item.id === payload)
      console.log(item);
      console.log(payload);
      console.log(item.amount);
      
      if(item.amount <= 1) {
        /* The below code won't work simply because you can't call a reducer within another one . 
        
        You should implement the logic of removing the item yourself*/
        // removeItem(payload)
        store.cartItems = store.cartItems.filter((item) => item.id !== payload)
        return
      }
      item.amount = item.amount - 1
    },
  }
})
console.log('### This is cart slice ###');

console.log(cartSlice);


export const cartReducer = cartSlice.reducer
// This is an action creator
export const {clearCart, removeItem, increaseItemQty, decreaseItemQty} = cartSlice.actions


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import cartItems from "../../../cartItems"

const url = "https://www.course-api.com/react-useReducer-cart-project"

const initialState = {
	cartItems: [],
	amount: 4,
	total: 0,
	// for implementing basic suspence on fetching from the api
	isLoading: true,
}

// createAsyncThunk(typePrefix, payloadCreator)
export const getCartItems = createAsyncThunk("banana", () => {
	return (
		fetch(url)
			.then((res) => res.json())
			// .then((res) => console.log(res))
			.catch((err) => console.log(err))
	)
})
/* 
	What does the return value from createAsyncThunk() do ?
	=> That function returns an action creator . 
	And that action creator returns a dispatch function (the way we return action objects through async code)
*/
console.log(getCartItems)
// console.log(getCartItems.prototype); // {}
// console.log(Object.keys(getCartItems));
// [
// 	"pending",
// 	"rejected",
// 	"fulfilled",
// 	"typePrefix"
// ]
// console.log(typeof getCartItems); // function

const cartSlice = createSlice({
	// generated action types will use that name as a prefix
	// like : myCart/clearCart
	name: "myCart",
	initialState,
	reducers: {
		clearCart: (store) => {
			console.log("### Cart was cleared ! ###")
			// We can mutate the state directly because behind the scenes immer takes
			// care of returning a new copy of the state
			store.cartItems = []
			console.log(store.cartItems)
		},
		removeItem: (store, { payload }) => {
			const cartItems = store.cartItems.filter((item) => item.id !== payload)
			store.cartItems = cartItems
		},
		increaseItemQty: (store, { payload }) => {
			const item = store.cartItems.find((item) => item.id === payload)
			item.amount = item.amount + 1
		},
		decreaseItemQty: (store, { payload }) => {
			const item = store.cartItems.find((item) => item.id === payload)

			if (item.amount <= 1) {
				/* The below code won't work simply because you can't call a reducer within another one . 
        
        You should implement the logic of removing the item yourself*/
				// removeItem(payload)
				store.cartItems = store.cartItems.filter((item) => item.id !== payload)
				return
			}
			item.amount = item.amount - 1
		},
		calculateTotalItemsCount: (state) => {
			state.amount = state.cartItems.reduce((acc, curr) => acc + curr.amount, 0)
			// console.log('after using the reduce HOF');
			// console.log(state.amount);
		},
		calculateTotalPrice: (state) => {
			let totalPrice = state.cartItems.reduce(
				// prettier-ignore
				/* The above line is important otherwise prettier will remove the brackets 
        since there is not mathematical need for them (but I like being explicit about that) */
				(acc, item) => acc + (item.amount * item.price),
				0
			)

			state.total = totalPrice
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCartItems.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getCartItems.fulfilled, (state, action) => {
				console.log(action)
				state.cartItems = action.payload
				state.isLoading = false
			})
			.addCase(getCartItems.rejected, (state) => {
				state.isLoading = false
			})
	},
})
console.log("### This is cart slice ###")

console.log(cartSlice)

export const cartReducer = cartSlice.reducer
// These are action creators
export const {
	clearCart,
	removeItem,
	increaseItemQty,
	decreaseItemQty,
	calculateTotalItemsCount,
	calculateTotalPrice,
} = cartSlice.actions

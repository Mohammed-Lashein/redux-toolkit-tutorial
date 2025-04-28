# Course notes

#### Redux selectors notes

**What is a selector ?**  
=> Any function that takes the full redux store as its parameter and return a chunk of that store (either modified or not) is called a selector . 

Usually, a named selector starts with the word 'select' followed by the description of the data we are extracting like `selectItemIds`.  

**How can we write a selector ?**   
=> In 2 places : 
1. Within the `useSelector` hook
2. Using `mapStateToProps` that is provided to `connect` (This is the old approach)
____
**What is createSlice() ?**  
=> This function's params have a lot of tasks, but I will mention them here incrementally as I learn more about them . 

**What does this function do in general ?**  
=> From redux docs : 
>This API is the standard approach for writing Redux logic.  

Regarding the params : 
- **name :** A string name for this slice of state .Generated action type constants will use this as a prefix . 

I generally tend to prefer the manual approach of creating the action types, but let's see what RTK has to provide us . 

- **initialState :** The initial state that the reducer will return whenever supplied with `undefined` as an argument . 
___

### Thunk notes
- We should return a promise from the cb passed to `createAsyncThunk`
- The var that we stored the return result from `createAsyncThunk` supports *lifecycle actions* (as the states of any promise)
So lifecycle actions are accessed within the `extraReducers` nested object, however I don't know from where are these properties like (pending, rejected, ...) are coming from . 

From the docs : `extraReducers` allows `createSlice` to respond and update its own state in response to other action types besides the types it has generated . 


**Some notes regarding `getCartItems`** :   
- It is an action creator returned by the `createAsyncThunk()`
- It has some properties attached to it since that **functions are objects in js (I totally forgot that)**
- Each attached property to the `getCartItems` action creator has a plain action creator stored in it (In simple terms : `getCartItems.pending` has a value of an action creator function) 

You can [check more information about thunks from the docs](https://redux-toolkit.js.org/api/createAsyncThunk)
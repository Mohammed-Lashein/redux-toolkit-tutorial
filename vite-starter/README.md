# Course notes

Here I am following redux conventions used [in this project](https://github.com/scandipwa/scandipwa/tree/master/packages/scandipwa)

### Notes
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


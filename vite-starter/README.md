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


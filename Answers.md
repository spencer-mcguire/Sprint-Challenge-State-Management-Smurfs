1. What problem does the context API help solve?

   - tries to solve the problem of prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   - thing to pass data from your app to the store
   - takes the action from the actions and manipulates state
   - store holds the state for the whole app

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   - app state is global and comp state is local,
     app state is used when data needs to travel. comp state is used when data needs to stay local

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   - middleware that lets you call action creators that return a function instead of an action object

5. What is your favorite state management system you've learned and this sprint? Please explain why!

   - Redux because its the most used.

1. What problem does the context API help solve?

It is meant to not drill props down/get rid of props, however, in my opinion, it just gives us an illusion of doing so since we're still technically passing props down through our Context Provider

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

*actions: take 2 arguments : type and payload(optional); they are the source of information for the redux store and carry information from the application itself to the store--actions describe what happened

*reducers: reducers manipulate the initial state we set up with immutable methods; they take in actions to affect such state -- reducers describe how the application state changes

*store: it's pretty much a state container; it stores the whole state of the app in an immutable object tree

*store being a single source of truth: it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reduce

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state of the whole application at a given point of time 

Component state is usually stored locally within a component and is not accessible by other components unless we drill it down through props

A good time to use Application over Component state would probably be for an App with lots of Components where drilling down state through props would be too much  of a hassle , especially if some components in between do not need access to such state -- So the bigger the App, the better it might be to resort to a globally accessible state 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that lets us call action creators that return a function instead of an action object 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Hands down Redux and Redux Hooks. It makes sense and is efficient and organized! 

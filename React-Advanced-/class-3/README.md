# Redux in React

A concise, practical guide to using **Redux** with **React** — what it is, why you might use it, and how to set it up and use it today. Includes examples and recommended patterns.

---

## What is Redux?

Redux is a predictable state container for JavaScript apps. It provides a single source of truth (the *store*) and enforces unidirectional data flow. While not tied to React, Redux is commonly used with React to manage global app state in a scalable, testable way.

## Why use Redux?

* **Single source of truth** for app state shared across many components.
* Predictable updates via pure reducers.
* Easier debugging (time travel, action logs) and testing.
* Well-suited for complex apps with many interactions and asynchronous flows.

> Note: For many small-medium apps, React Context + `useReducer`, Zustand, or other lighter libraries may be simpler. Consider complexity before adopting Redux.

## Core Concepts

* **Store**: Holds the entire application state tree. Created with `createStore` (classic) or `configureStore` (Redux Toolkit).
* **Action**: A plain object describing *what happened*: `{ type: 'INCREMENT', payload: 1 }`.
* **Reducer**: A pure function `(state, action) => newState` that returns the updated state.
* **Dispatch**: The method used to send actions to the store: `store.dispatch({ type: '...' })`.
* **Selectors**: Functions to read and derive data from the store.

## Modern Recommendation: Redux Toolkit (RTK)

Redux Toolkit is the official, recommended way to write Redux logic. It reduces boilerplate and includes good defaults (Immer, Thunk, devtools). Use `@reduxjs/toolkit` instead of `redux` in most projects.

### Install

```bash
npm install @reduxjs/toolkit react-redux
# or
yarn add @reduxjs/toolkit react-redux
```

## Basic Example (Redux Toolkit + React Hooks)

```js
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const store = configureStore({
  reducer: { counter: counterSlice.reducer }
})
```

```jsx
// index.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

```jsx
// Counter.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'

export default function Counter(){
  const value = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
```

## Async Logic

Use `createAsyncThunk` from RTK for common async flows or middleware like `redux-saga` for complex side effects.

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('users/fetchById', async (userId) => {
  const res = await fetch(`/api/users/${userId}`)
  return res.json()
})

// handle pending/fulfilled/rejected in extraReducers
```

## Folder Structure (simple)

```
/src
  /app
    store.js
  /features
    /counter
      counterSlice.js
      Counter.jsx
  App.jsx
  index.jsx
```

## Best Practices

* Prefer Redux Toolkit over hand-written Redux.
* Keep reducers pure and small; use slices per feature.
* Use selectors and memoize expensive derived data (`reselect`).
* Keep local UI state (form inputs, toggle states) in component state; use Redux for shared/global state.
* Write unit tests for reducers and thunks.

## Testing

Reducers and selectors are pure — easy to unit test. For thunks, mock fetch/API calls and assert dispatched actions.

## When NOT to use Redux

* Very small apps with limited shared state.
* When complexity of Redux outweighs benefits — consider Context + `useReducer` or lightweight libs like Zustand.

## Additional Tools

* **Redux DevTools** — debugging and time-traveling.
* **RTK Query** — powerful data fetching and caching built into RTK.
* **Reselect** — memoized selectors.

---

### Quick References

* `configureStore`, `createSlice`, `createAsyncThunk` are key RTK helpers.
* `Provider` wraps your app, `useSelector` reads state, `useDispatch` sends actions.

---

*This markdown is ready to save as `Redux-in-React.md`.*
